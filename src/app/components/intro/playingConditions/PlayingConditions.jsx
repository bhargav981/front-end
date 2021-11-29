import React from 'react';
import styles from './playingConditions.module.sass';
// import getSkin from './skin.js';
// import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import FilledButton from 'commonComponents/buttons/filledButton';
import updateRoute from 'util/webAppRoutes/updateRoute';
import PlayingConditionsBox from 'components/intro/playingConditions/playingConditionsBox';
import ObjectivesBox from 'components/intro/playingConditions/objectivesBox';

const renderPlayingConditions = (props) => {
	// const { storylineIntro } = props;
	// const playingConditions = props.getLabel(
	// 	storylineIntro.playingConditionsDesc
	// );

	const moveToPlanning = () => {
		if (props.uiState.currentPlanningPhaseState === 'features') {
			props.setWalkthroughState('planningStart');
		}
		else {
			props.setWalkthroughState('planningCompleted');
		}
		// updateRoute({ route: 'planning' });
	}

	const moveToExecution = () => {
		// if (props.userState.currentSprintState === 1) {
		// 	props.setWalkthroughState('executionSprintPlanning');
		// 	updateRoute({ route: `execution/sprint/${props.userState.currentSprintNumber}/planning` });
		// } else if (props.userState.currentSprintState === 2 || props.userState.currentSprintState === 3) {
		// 	props.setWalkthroughState('executionSprintExecution');
		// 	updateRoute({ route: `execution/sprint/${props.userState.currentSprintNumber}/execution` });
		// } else if (props.userState.currentSprintState === 4) {
		// 	props.setWalkthroughState('executionSprintLaunch');
		// 	updateRoute({ route: `execution/sprint/${props.userState.currentSprintNumber}/report` });
		// } else if (props.userState.currentSprintState == 5 && props.userState.isGameCompleted) {
		// 	updateRoute({ route: `execution/sprint/${props.userState.currentSprintNumber}/report` });
		// } else if (props.userState.currentSprintState == null && props.userState.isGameCompleted) {
		// 	updateRoute({ route: `execution/sprint/${props.userState.currentSprintNumber}/report` });
		// }
		switch(props.userState.currentSprintState){
			case 1:
				props.setWalkthroughState('executionSprintPlanning');
				updateRoute({ route: `execution/sprint/${props.userState.currentSprintNumber}/planning` });
				break;
			case 2:
			case 3:
				props.setWalkthroughState('executionSprintExecution');
				updateRoute({ route: `execution/sprint/${props.userState.currentSprintNumber}/execution` });
				break;
			case 4:
				props.setWalkthroughState('executionSprintLaunch');
				updateRoute({ route: `execution/sprint/${props.userState.currentSprintNumber}/report` });
				break;
			case 5:
			case null:
				if(props.userState.isGameCompleted)
					updateRoute({ route: `execution/sprint/${props.userState.currentSprintNumber}/report` });
				break;
		}
	}

	const onClickStartSimulation = () => {
		props.postGameStarted({});
		props.updateCurrentPhase(
			{
				phaseId: 1
			},
			moveToPlanning
		);
	}

	const onClickResumeSimulation = () => {
		if (props.userState.currentPhaseId === 1 && !props.userState.isGameCompleted) {
			moveToPlanning();
		} else if (props.userState.currentPhaseId === 2 || props.userState.isGameCompleted) {
			moveToExecution();
		}
	}

	// const myStyles = getSkin(props.skinGuide);

	return (
		<div
			styleName="playing-conditions-container">
			<ObjectivesBox {...props} />
			<PlayingConditionsBox {...props} />
			<div styleName="button">
				{
					props.userState.isGameStarted
						? <FilledButton textLabel={props.getLabel('label_resume_sim')}
							clickFunction={onClickResumeSimulation} />
						: <FilledButton textLabel={props.getLabel('label_start_simulation')}
							clickFunction={onClickStartSimulation} />
				}

			</div>
		</div>
	);
};

export default applyWrappers(renderPlayingConditions, styles);
