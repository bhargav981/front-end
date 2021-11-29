import React, { useState } from 'react';
import styles from './actionOptionsPopover.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import Close from 'svgComponents/close';
import ActionOption from 'components/sprint/execution/actionOption';
import FilledButton from 'commonComponents/buttons/filledButton';
import { actionIds, actionOptionIds } from 'config/actions';
import { getUserMetricsForMetricsKey } from 'util/utilFunctions';

const ActionOptionsPopover = (props) => {

	const [selectedActionOptionId, setSelectedActionOptionId] = useState(
		props.selectedActionOptions[0] ? props.selectedActionOptions[0].id : -1
	);

	const { totalDaysInSprint, currentSprintDay } = props.userState;
	const daysRemainingInSprint = totalDaysInSprint - currentSprintDay + 1;

	const selectedActionOption = props.selectedActionOptions.filter(
		actionOptions => actionOptions.id === selectedActionOptionId
	)[0];

	const budgetUserMetrics = getUserMetricsForMetricsKey(
		props.metrics.metricsList,
		props.userMetrics.userMetricsList,
		'BUDGET'
	);

	const currentBudget = budgetUserMetrics && budgetUserMetrics.value || 0;

	const myStyles = getSkin(props.skinGuide);

	let popoverPositionStyle = {
		//top: '200px',
		right: '255px',
		position: 'fixed'
	}

	if (props.isActionsFromStoryPopup) {
		popoverPositionStyle = {
			top: '0px',
			right: '250px',
			position: 'absolute'
		};
	}

	// let popoverArrowStyle = {
	// 	top: '10px',
	// 	left: '-10px'
	// }

	const isActionPossibleBasedOnBudget = () => {
		const actionOptionBudget = selectedActionOption.cost;

		if (actionOptionBudget <= currentBudget) {
			return true;
		}
		return false;
	}

	const isActionPossibleBasedOnGameLimit = () => {
		let gameLimit = selectedActionOption.gameLimit;
		if (gameLimit === null) {
			gameLimit = props.action.gameLimit;
		}

		if (gameLimit === null) {
			return true;
		}

		const selectedUserActionOptions = props.userActions.userActionsList.filter(
			userAction => userAction.actionOptionId === selectedActionOptionId
		);

		if (selectedUserActionOptions.length < gameLimit) {
			return true;
		}

		return false;
	}

	const isActionPossibleBasedOnSprintLimit = () => {
		let sprintLimit = selectedActionOption.sprintLimit;
		if (sprintLimit == null) {
			sprintLimit = props.action.sprintLimit;
		}

		if (sprintLimit == null) {
			return true;
		}

		const selectedUserActionOptions = props.userActions.userActionsList.filter(
			userAction => (
				userAction.actionOptionId === selectedActionOptionId
				&& userAction.sprintNumber === props.userState.currentSprintNumber
			)
		);

		if (selectedUserActionOptions.length < sprintLimit) {
			return true;
		}

		return false;
	}

	const isActionPossibleBasedOnDays = () => {
		if (props.selectedActionOptions.length === 0) {
			return false;
		}

		if (daysRemainingInSprint >= selectedActionOption.effort) {
			if (selectedActionOptionId === actionOptionIds.REPLAN_SPRINT) {
				if (daysRemainingInSprint > 2 && (props.userState.totalDays - props.userState.currentDay > 2)) {
					return true;
				}
				return false;
			}
			return true;
		}

		return false;
	}

	const isActionOptionsAvailable = () => {
		if (props.selectedActionOptions.length === 0) {
			return false;
		}

		return true;
	}

	const getTakeActionButtonStyle = () => {
		if (
			!isActionOptionsAvailable()
			|| !isActionPossibleBasedOnDays()
			|| !isActionPossibleBasedOnBudget()
			|| !isActionPossibleBasedOnGameLimit()
			|| !isActionPossibleBasedOnSprintLimit()
		) {
			return {
				pointerEvents: 'none',
				opacity: 0.5
			};
		}
		return {
			pointerEvents: 'all',
			opacity: 1
		};
	}

	const submitActionAndClosePopover = () => {
		let actionOptionIdForFetchCall = selectedActionOptionId;
		let actionPayload = {};

		if (props.action.id === actionIds.UPDATE_PRD) {
			actionOptionIdForFetchCall = actionOptionIds.UPDATE_PRD;
			actionPayload = {
				prdId: selectedActionOptionId
			};
		}

		if (props.action.id === actionIds.REPLAN_SPRINT) {
			actionOptionIdForFetchCall = actionOptionIds.REPLAN_SPRINT;
			actionPayload = {
				sprintId: props.userState.currentSprintNumber
			};
			props.setUiState({
				showActionOptionPopover: false,
				selectedActionId: null,
				showOverlay: true,
				overlayComponentType: 'CENTER',
				highlightDesktopHeader: true,
				highlightMetricsHeader: false,
				overlayComponent: 'REPLAN_SPRINT_CONFIRMATION'
			});
			props.setIsActionOnHover(false);
			return 1;
		}

		props.submitAction(actionOptionIdForFetchCall, actionPayload);
		props.setUiState({
			showActionOptionPopover: false,
			selectedActionId: null
		});
		props.setIsActionOnHover(false);
	}

	const renderOptions = () => {
		if (props.selectedActionOptions.length === 0) {
			return null;
		}
		return (
			<ActionOption
				action={props.action}
				selectedActionOptions={props.selectedActionOptions}
				selectedActionOptionId={selectedActionOptionId}
				setSelectedActionOptionId={setSelectedActionOptionId}
			/>
		);
	}

	const getErrorMessage = () => {
		if (!isActionOptionsAvailable()) {
			return props.getLabel('label_error_message_no_options');
		}

		if (!isActionPossibleBasedOnDays()) {
			return props.getLabel('label_error_message_insufficient_days').replace(
				'%{REMAINING_DAYS}',
				daysRemainingInSprint
			);
		}

		if (!isActionPossibleBasedOnBudget()) {
			return props.getLabel('label_error_message_insufficient_budget');
		}

		if (!isActionPossibleBasedOnGameLimit()) {
			return props.getLabel('label_error_message_game_limit');
		}

		if (!isActionPossibleBasedOnSprintLimit()) {
			return props.getLabel('label_error_message_sprint_limit');
		}

		return '';
	}

	const renderErrorMessage = () => {
		if (
			!isActionOptionsAvailable()
			|| !isActionPossibleBasedOnDays()
			|| !isActionPossibleBasedOnBudget()
			|| !isActionPossibleBasedOnGameLimit()
			|| !isActionPossibleBasedOnSprintLimit()
		) {
			return (
				<div
					styleName="error-message"
					className={css(myStyles.errorMessage)}
				>
					{getErrorMessage()}
				</div>
			);
		}

		return null;
	}

	return (
		<div>
			<div
				className={css(myStyles.container)}
				styleName="popover-container"
				style={popoverPositionStyle}
			>
				<div className={css(myStyles.header)} styleName="popover-header">
					<div styleName="title-and-description">
						<div className={css(myStyles.title)} styleName="title">{props.getLabel(props.action.name)}</div>
						<div className={css(myStyles.description)}>{props.getLabel(props.action.description)}</div>
					</div>
					<div styleName="close-container">
						<div
							styleName="close-svg"
							onClick={() => {
								props.setUiState({
									showActionOptionPopover: false,
									selectedActionId: null
								});
								props.setIsActionOnHover(false)
							}}
						>
							<Close />
						</div>
					</div>
				</div>
				<div className={css(myStyles.chooseOptions)} styleName="choose-options">
					{props.getLabel('label_action_options_choose_heading')}
				</div>
				<div styleName="options-container">
					{renderOptions()}
				</div>
				{renderErrorMessage()}
				<div
					styleName="button-container"
					style={getTakeActionButtonStyle()}
				>
					<FilledButton
						textLabel={props.getLabel('label_take_action')}
						showButtonShadow={false}
						clickFunction={submitActionAndClosePopover}
					/>
				</div>
			</div>
			{/* <div
				className={css(myStyles.popoverArrow)}
				styleName="popover-arrow"
				style={popoverArrowStyle}
			/> */}
		</div>
	);
}

export default applyWrappers(ActionOptionsPopover, styles);