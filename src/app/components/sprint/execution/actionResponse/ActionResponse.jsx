import React from 'react';
import styles from './actionResponse.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import Close from 'svgComponents/close';
import { hexToRgbA } from 'util/styleUtil';
import ActionResponseMetrics from '../actionResponseMetrics';

const ActionResponse = (props) => {

	const myStyles = getSkin(props.skinGuide);

	const latestUserActionResponse = props.userActions.userActionsList[
		props.userActions.userActionsList.length - 1
	];

	const closeActionResponse = () => {
		let updatedUiState = {
			showOverlay: false,
			overlayComponentType: '',
			highlightDesktopHeader: false,
			highlightMetricsHeader: false,
			overlayComponent: ''
		};

		if (props.userEvents.eventsToBeShownCount !== 0) {
			updatedUiState = {
				highlightDesktopHeader: true,
				highlightMetricsHeader: false,
				overlayComponentType: 'CENTER',
				overlayComponent: 'EVENT_LOADER'
			};
		} else if (props.uiState.showReplanSprintPopup) {
			updatedUiState = {
				showOverlay: true,
				highlightDesktopHeader: true,
				highlightMetricsHeader: false,
				overlayComponentType: 'CENTER',
				overlayComponent: 'REPLAN_SPRINT_HELP_POPUP'
			};
		}

		props.setUiState(updatedUiState);
	}

	if (props.userActions.userActionsList.length === 0) {
		return (
			<div className={css(myStyles.container, myStyles.responseMessage)} styleName="container">
				No actions taken
			</div>
		);
	}

	const latestActionOption = props.actions.actionOptionsList.filter(actionOption =>
		actionOption.id === latestUserActionResponse.actionOptionId
	)[0];

	const latestAction = props.actions.actionsList.filter(action =>
		action.id === latestActionOption.actionId
	)[0];

	return (
		<div className={css(myStyles.container)} styleName="container">
			<div styleName="image-container">
				<img alt={latestActionOption.responseImageKey} src={props.getImage(latestActionOption.responseImageKey)} styleName="image" />
			</div>
			<div className={css(myStyles.responseContainer)} styleName="response-container">
				<div className={css(myStyles.title)}>
					{props.getLabel(latestAction.name)}
				</div>
				<div className={css(myStyles.subTitle)}>
					{props.getLabel(latestActionOption.name)}
				</div>
				<div className={css(myStyles.responseMessage)} styleName="response-message">
					{props.getLabel(latestUserActionResponse.message)}
				</div>
				<div className={css(myStyles.personName)} styleName="person-name">
					{`- ${props.getLabel('label_cpo_name')}, ${props.getLabel('label_cpo_pos')}`}
				</div>
				<ActionResponseMetrics
					latestActionOption={latestActionOption}
					latestUserActionResponse={latestUserActionResponse}
					metrics={props.metrics}
					userState={props.userState}
					prds={props.prds}
					userPrds={props.userPrds}
					userMetrics={props.userMetrics}
				/>
			</div>
			<div
				styleName="close-container"
				onClick={closeActionResponse}
			>
				<Close
					backgroundColor={hexToRgbA(
						props.skinGuide.globalProfiles.palette.primaryColor,
						0.5
					)}
				/>
			</div>
		</div>
	);
}

export default applyWrappers(ActionResponse, styles);