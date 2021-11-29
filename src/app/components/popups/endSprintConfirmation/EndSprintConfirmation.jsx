import React, { useState } from 'react';
import styles from './endSprintConfirmation.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import FilledButton from 'commonComponents/buttons/filledButton';
import HollowButton from 'commonComponents/buttons/hollowButton';
import TriangleBackground from 'svgComponents/triangleBackground';

const EndSprintConfirmation = (props) => {

	const [ disableEndSprintButton, setDisableEndSprintButton ] = useState(false);

	const cancelButtonClickFunction = () => {
		props.setUiState({
			showOverlay: false,
			overlayComponentType: '',
			highlightDesktopHeader: false,
			highlightMetricsHeader: false,
			overlayComponent: ''
		});
	}

	const closePopup = () => {
		props.setUiState({
			showOverlay: false,
			overlayComponentType: '',
			highlightDesktopHeader: false,
			highlightMetricsHeader: false,
			overlayComponent: ''
		});
	}

	const endSprintButtonClickFunction = () => {
		props.endSprint({
			sprintId: props.userState.currentSprintNumber
		}, closePopup);
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
						{props.getLabel('label_end_sprint_popup_heading')}
					</div>
					<div className={css(myStyles.headerDesc)} styleName="header-desc">
						{props.getLabel('label_end_sprint_popup_desc', "", 
						{DAY_COUNT: (props.userState.currentSprintNumber <= 4) ? 11 - props.userState.currentSprintDay : 50 - props.userState.currentDay})}
					</div>
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
						textLabel={props.getLabel('label_end_sprint')}
						clickFunction={() => {
							setDisableEndSprintButton(true);
							endSprintButtonClickFunction();
						}}
						disableButton={disableEndSprintButton}
					/>
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(EndSprintConfirmation, styles);