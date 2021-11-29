import React from 'react';
import styles from './walkthroughSteps.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import WalkthroughStep from './walkthroughStep';

const WalkthroughSteps = (props) => {

	const myStyles = getSkin(props.skinGuide);

	const renderSeperationLine = (index) => {
		if (index === props.steps.length -1) {
			return null;
		}
		return (
			<div className={css(myStyles.seperationLine)} styleName="seperation-line"></div>
		);
	}

	const renderSteps = () => {
		return props.steps.map((step, index) => {
			return (
				<div key={step.key}>
					<WalkthroughStep step={step} />
					{renderSeperationLine(index)}
				</div>
			);
		});
	}

	return (
		<div styleName="container">
			{renderSteps()}
		</div>
	);
}

export default applyWrappers(WalkthroughSteps, styles);