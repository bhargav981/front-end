import React from 'react';
import styles from './executionWalkthrough.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import WalkthroughTabs from '../walkthroughTabs';
import FilledButton from 'commonComponents/buttons/filledButton';
import SprintsWalkthrough from '../sprintsWalkthrough/SprintsWalkthrough';

const ExecutionWalkthrough = (props) => {

	const myStyles = getSkin(props.skinGuide);

	return (
		<div styleName="container">
			<div styleName="wrapper">
				<div styleName="walkthrough-background">
					<img width="100%" height="100%" src={props.getImage('SIM_BACKGROUND')} alt="" />
				</div>
				<WalkthroughTabs walkthroughTabsList={props.walkthroughTabsList} />
				<div
					styleName="description"
					className={css(myStyles.description)}
					dangerouslySetInnerHTML={{ __html: props.getLabel(props.descriptionLabel) }}
				></div>
				<div styleName="sprints-container">
					<SprintsWalkthrough sprintsSteps={props.steps} />
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

export default applyWrappers(ExecutionWalkthrough, styles);