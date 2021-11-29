import React from 'react';
import styles from './sprintReportPopupHeader.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import Close from 'svgComponents/close';

const SprintReportPopupHeader = (props) => {

	const closePopup = () => {
		props.updateUserState({
			selectedStoryId: null
		});
		props.setUiState({
			showOverlay: false,
			overlayComponentType: '',
			highlightDesktopHeader: false,
			highlightMetricsHeader: false,
			overlayComponent: ''
		});
	}


	const myStyles = getSkin(props.skinGuide);
	return (
		<div styleName="header-container">
			<div className={css(myStyles.headerBackground)} styleName="header-background-container"></div>
			<div styleName="header-content-container">
				<div styleName="header-details-container">
					<div className={css(myStyles.storyName)} styleName="story-name">
						{props.getLabel('label_sprint_report_heading')}
					</div>
				</div>
				<div styleName="close-container">
					<div styleName="close-icon" onClick={closePopup}>
						<Close />
					</div>
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(SprintReportPopupHeader, styles);