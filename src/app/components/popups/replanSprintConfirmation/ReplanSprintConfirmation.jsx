import React from 'react';
import styles from './replanSprintConfirmation.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import FilledButton from 'commonComponents/buttons/filledButton';
import HollowButton from 'commonComponents/buttons/hollowButton';
import TriangleBackground from 'svgComponents/triangleBackground';
import { actionOptionIds } from 'config/actions';

const ReplanSprintConfirmation = (props) => {

	const cancelButtonClickFunction = () => {
		props.setUiState({
			showOverlay: false,
			overlayComponentType: '',
			highlightDesktopHeader: false,
			highlightMetricsHeader: false,
			overlayComponent: ''
		});
	}

	const replanSprintButtonClickFunction = () => {
		props.submitAction(
			actionOptionIds.REPLAN_SPRINT,
			{
				sprintId: props.userState.currentSprintNumber,

			}
		);
	}

	const myStyles = getSkin(props.skinGuide);
	return (
		<div styleName="main-component" className={css(myStyles.completeContainer)}>
			<div styleName="popup-header-container">
				<div className={css(myStyles.headerContainer)} styleName="popup-header-container-background">
					<TriangleBackground />
				</div>
				<div styleName="popup-header-container-content">
					{/* <div styleName="header-image">
						{renderpopupImage()}
					</div> */}
					<div className={css(myStyles.headerText)} styleName="header-text">
						{props.getLabel('label_replan_sprint_popup_heading')}
					</div>
					{
						11 - props.userState.currentSprintDay > 2
							? <div className={css(myStyles.headerDesc)} styleName="header-desc">
								{props.getLabel('label_replan_sprint_popup_desc', "", { ACTION_DAY_COUNT: 2,DAY_COUNT: (props.userState.currentSprintNumber <= 4) ? 11 - props.userState.currentSprintDay : 50 - props.userState.currentDay })}

							</div>
							: <div className={css(myStyles.headerDesc)} styleName="header-desc">
								{props.getLabel('label_replan_sprint_popup_desc_not_posiible', "", { ACTION_DAY_COUNT: 2, DAY_COUNT: 11 - props.userState.currentSprintDay })}
							</div>
					}

				</div>
			</div>
			<div styleName="popup-buttons-container">
				<div styleName="button-container">
					<FilledButton
						textLabel={props.getLabel('label_cancel')}
						clickFunction={cancelButtonClickFunction}
					/>
				</div>
				<div styleName="button-container">
					<HollowButton
						textLabel={props.getLabel('label_replan_sprint')}
						disableButton={11 - props.userState.currentSprintDay > 2 ? false : true}
						clickFunction={replanSprintButtonClickFunction}
					/>
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(ReplanSprintConfirmation, styles);