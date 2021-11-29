import React from 'react';
import styles from './sprintWalkthrough.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import WalkthroughSteps from '../../walkthroughSteps';

const SprintWalkthrough = (props) => {

	const myStyles = getSkin(props.skinGuide);
	// const globalProfiles = props.skinGuide.globalProfiles;
	// const skin = globalProfiles.palette;

	let containerStyle = 'container';

	if (props.isDisabled) {
		containerStyle += ' disabled-container';
	}

	return (
		<div className={css(myStyles.container)} styleName={containerStyle}>
			<div styleName="title-img-container">
				<img alt="rotate" src={props.getImage('IMG_ROTATE')} styleName="rotate-image" />
				<div className={css(myStyles.title)} styleName="title">
					{props.getLabel(props.title).replace(
						'%{SPRINT_NUMBER}',
						props.sprintNumber
					)}
				</div>
			</div>
			<div styleName="steps-container">
				<WalkthroughSteps steps={props.steps} />
			</div>
		</div>
	);
}

export default applyWrappers(SprintWalkthrough, styles);