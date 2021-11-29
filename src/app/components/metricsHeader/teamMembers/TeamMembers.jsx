import React from 'react';
import styles from './teamMembers.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import TeamMemberSvg from 'svgComponents/teamMemberSvg';

const TeamMembers = (props) => {

	const openKYTPopup = () => {
		const { tutorial } = props;

		//Pause tutorial if it is already open
		if (tutorial.isRunning && tutorial.stepIndex === 0) {
			props.pauseTutorial();
			props.updateStepNumber(tutorial.stepIndex + 1);
		}

		props.setUiState({
			showOverlay: true,
			overlayComponentType: 'RIGHT',
			highlightDesktopHeader: true,
			highlightMetricsHeader: false,
			overlayComponent: 'KNOW_YOUR_TEAM'
		});
	}

	const myStyles = getSkin(props.skinGuide);
	return (
		<div
			styleName="tm-container"
			onClick={() => {
				openKYTPopup();
			}}
		>
			<div styleName="tm-content" className={css(myStyles.tmContent)}>
				<div styleName="tm-image">
					<TeamMemberSvg />
				</div>
			</div>
			<div styleName="tm-name" className={css(myStyles.tmName)}>
				{props.getLabel('label_your_team')}
			</div>
		</div>
	);
}

export default applyWrappers(TeamMembers, styles);