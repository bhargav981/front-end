import React from 'react';
import styles from './replanSprintHelpPopup.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import FilledButton from 'commonComponents/buttons/filledButton';
import HollowButton from 'commonComponents/buttons/hollowButton';
import TriangleBackground from 'svgComponents/triangleBackground';
import { actionOptionIds } from 'config/actions';

const ReplanSprintHelpPopup = (props) => {

	const cancelButtonClickFunction = () => {
		props.setUiState({
			showOverlay: false,
			overlayComponentType: '',
			highlightDesktopHeader: false,
			highlightMetricsHeader: false,
			overlayComponent: '',
			showReplanSprintPopup: false
		});
	}

	// const replanSprintButtonClickFunction = () => {
	// 	props.submitAction(
	// 		actionOptionIds.REPLAN_SPRINT,
	// 		{
	// 			sprintId: props.userState.currentSprintNumber,

	// 		}
	// 	);
	// }

	const myStyles = getSkin(props.skinGuide);
	return (
		<div styleName="main-component" className={css(myStyles.completeContainer)}>
			<div styleName="popup-header-container">
				<div className={css(myStyles.headerContainer)} styleName="popup-header-container-background">
					<TriangleBackground />
				</div>
				<div styleName="popup-header-container-content">
					<div className={css(myStyles.headerText)} styleName="header-text">
						{props.getLabel('label_replan_sprint_help_popup_heading')}
					</div>
					<div className={css(myStyles.headerDesc)} styleName="header-desc">
					{props.getLabel('label_replan_sprint_help_popup_desc')}
					</div>

				</div>
			</div>
			<div styleName="popup-buttons-container">
				<div styleName="button-container">
					<FilledButton
						textLabel={props.getLabel('label_continue_cap')}
						clickFunction={cancelButtonClickFunction}
					/>
				</div>
				{/* <div styleName="button-container">
					<HollowButton
						textLabel={props.getLabel('label_replan_sprint')}
						disableButton={11 - props.userState.currentSprintDay > 2 ? false : true}
						clickFunction={replanSprintButtonClickFunction}
					/>
				</div> */}
			</div>
		</div>
	);
}

export default applyWrappers(ReplanSprintHelpPopup, styles);