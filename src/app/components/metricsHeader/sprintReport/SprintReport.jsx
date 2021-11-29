import React from 'react';
import styles from './sprintReport.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import SprintReportSvg from 'svgComponents/sprintReportSvg';

const SprintReport = (props) => {

	const openSprintReportPopup = () => {
		const { tutorial } = props;

		//Pause tutorial if it is already open
		if (tutorial.isRunning && tutorial.stepIndex === 0) {
			props.pauseTutorial();
			props.updateStepNumber(tutorial.stepIndex + 1);
		}

		props.setUiState({
			showOverlay: true,
			overlayComponentType: 'CENTER',
			highlightDesktopHeader: true,
			highlightMetricsHeader: false,
			overlayComponent: 'SPRINT_REPORT_POPUP'
		});
	}

	const myStyles = getSkin(props.skinGuide);
	return (
		<div
			styleName="report-container"
			onClick={() => {
				openSprintReportPopup();
			}}
		>
			<div styleName="tm-content" className={css(myStyles.tmContent)}>
				<div styleName="tm-image">
					<SprintReportSvg />
				</div>
			</div>
			<div styleName="tm-name" className={css(myStyles.tmName)}>
				{props.getLabel('label_sprint_report')}
			</div>
		</div>
	);
}

export default applyWrappers(SprintReport, styles);