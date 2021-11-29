import React from 'react';
import styles from './planningWalkthrough.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import WalkthroughTabs from '../walkthroughTabs';
import WalkthroughSteps from '../walkthroughSteps';
import FilledButton from 'commonComponents/buttons/filledButton';

const PlanningWalkthrough = (props) => {

	const myStyles = getSkin(props.skinGuide);

	return (
		<div styleName="container">
			<div styleName="wrapper">
				<div styleName="walkthrough-background">
					<img width="100%" height="100%" src={props.getImage('SIM_BACKGROUND')} alt="" />
				</div>
				<WalkthroughTabs walkthroughTabsList={props.walkthroughTabsList} />
				<div className={css(myStyles.descriptionStepsContainer)} styleName="description-steps-container">
					<div
						styleName="description"
						className={css(myStyles.description)}
						dangerouslySetInnerHTML={{ __html: props.getLabel(props.descriptionLabel) }}
					></div>
					<div styleName="steps-container">
						<WalkthroughSteps steps={props.steps} />
					</div>
				</div>
				<div styleName="button-container">
					<FilledButton
						textLabel={props.getLabel(props.buttonText)}
						clickFunction={props.buttonClickFunctionality}
					/>
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(PlanningWalkthrough, styles);