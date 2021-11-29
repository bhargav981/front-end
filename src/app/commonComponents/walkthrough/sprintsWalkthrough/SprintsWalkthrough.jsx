import React from 'react';
import styles from './sprintsWalkthrough.module.sass';
// import getSkin from './skin.js';
// import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import SprintWalkthrough from './sprintWalkthrough/SprintWalkthrough';

const SprintsWalkthrough = (props) => {

	// const myStyles = getSkin(props.skinGuide);

	const renderSprints = () => {
		return props.sprintsSteps.map(sprint => {
			return <SprintWalkthrough
				title={sprint.title}
				steps={sprint.steps}
				isDisabled={sprint.isDisabled}
				key={sprint.key}
				sprintNumber={sprint.sprintNumber}
			/>
		})
	}

	return (
		<div styleName="container">
			{renderSprints()}
		</div>
	);
}

export default applyWrappers(SprintsWalkthrough, styles);