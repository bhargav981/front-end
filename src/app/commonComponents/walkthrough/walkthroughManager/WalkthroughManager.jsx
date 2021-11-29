import React from 'react';
import styles from './walkthroughManager.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';
import PlanningWalkthrough from '../planningWalkthrough/PlanningWalkthrough';
import ExecutionWalkthrough from '../executionWalkthrough/ExecutionWalkthrough';
import { walkthroughTabsList, sprintsSteps, planningSteps } from 'config/walkthrough';
import updateRoute from 'util/webAppRoutes/updateRoute';

const WalkthroughManager = (props) => {

	let steps = [];
	let updatedWalkthroughTabsList = [];
	let buttonText = "";
	let buttonClickFunctionality = () => {
		props.setWalkthroughState(null);
	}
	let descriptionLabel = '';

	const currentSprintNumber = props.userState.currentSprintNumber || 1;

	const getWalkthroughTabsList = (tabKey) => {
		return walkthroughTabsList.map(walkthroughTab => {
			if (walkthroughTab.key === tabKey) {
				return {
					...walkthroughTab,
					isSelected: true
				};
			}
			return {
				...walkthroughTab,
				isSelected: false
			};
		});
	}

	const getSprintUpdatedSteps = (sprint) => {
		let inProgressKey = '';
		let completedKeys = [];
		switch(props.walkthrough.walkthroughState){
			case 'executionSprintPlanning':
				inProgressKey = 'sprintPlanning';
				break;
			case 'executionSprintExecution':
				inProgressKey = 'sprintExecution';
				completedKeys = ['sprintPlanning'];
				break;
			case 'executionSprintLaunch':
				inProgressKey = 'sprintLaunch';
				completedKeys = ['sprintPlanning', 'sprintExecution'];
				break;
		}

		return sprint.steps.map(step => {
			if (sprint.sprintNumber < currentSprintNumber) {
				return {
					...step,
					status: 'completed'
				};	
			}
			if (sprint.sprintNumber === currentSprintNumber) {
				if (step.key === inProgressKey) {
					return {
						...step,
						status: 'inprogress'
					};
				}

				if (completedKeys.indexOf(step.key) !== -1) {
					return {
						...step,
						status: 'completed'
					};
				}
			}
			return step;
		});
	}

	const getExecutionUpdatedSteps = () => {
		return sprintsSteps.map(sprint => {
			const updatedSteps = getSprintUpdatedSteps(sprint);
			let isDisabled = true;

			if (sprint.sprintNumber === currentSprintNumber) {
				isDisabled = false;
			}

			return {
				...sprint,
				isDisabled,
				steps: updatedSteps
			};
		});
	}

	switch (props.walkthrough.walkthroughState) {
		case 'planningStart':
			updatedWalkthroughTabsList = getWalkthroughTabsList('planning');
			steps = planningSteps;
			descriptionLabel = 'label_transition_planning_start_description';
			buttonText = "label_transition_start_planning";
			buttonClickFunctionality = () => {
				updateRoute({ route: 'planning' });
				props.setWalkthroughState(null);
			}
			break;

		case 'planningCompleted':
			updatedWalkthroughTabsList = getWalkthroughTabsList('planning');
			steps = planningSteps.map(step => ({
				...step,
				status: 'completed'
			}));
			descriptionLabel = 'label_transition_planning_completed_description';
			buttonText = "label_transition_move_to_execution";
			buttonClickFunctionality = () => {
				// Stop tutorial when moving to sprint planning
				props.pauseTutorial();
				switch(props.userState.currentSprintState) {
					case 2:
					case 3:
						updateRoute({ route: `/execution/sprint/${currentSprintNumber}/execution` });
						props.setWalkthroughState('executionSprintExecution');
						break;
					case 4:
						updateRoute({ route: `/execution/sprint/${currentSprintNumber}/report` });
						props.setWalkthroughState('executionSprintLaunch');
						break;
					default:
						updateRoute({ route: `/execution/sprint/${currentSprintNumber}/planning` });
						props.setWalkthroughState('executionSprintPlanning');
						break;
				}
			}
			break;

		case 'executionSprintPlanning':
			updatedWalkthroughTabsList = getWalkthroughTabsList('execution');
			steps = getExecutionUpdatedSteps();
			descriptionLabel = 'label_transition_sprint_planning_description';
			buttonText = "label_transition_start_execution";
			buttonClickFunctionality = () => {
				updateRoute({ route: `/execution/sprint/${currentSprintNumber}/planning` });
				props.setWalkthroughState(null);
			}
			break;

		case 'executionSprintExecution':
			updatedWalkthroughTabsList = getWalkthroughTabsList('execution');
			steps = getExecutionUpdatedSteps();
			descriptionLabel = 'label_transition_sprint_execution_description';
			buttonText = "label_transition_continue_cap";
			buttonClickFunctionality = () => {
				// updateRoute({ route: `/execution/sprint/${currentSprintNumber}/execution` });
				props.setWalkthroughState(null);
			}
			break;

		case 'executionSprintLaunch':
			updatedWalkthroughTabsList = getWalkthroughTabsList('execution');
			steps = getExecutionUpdatedSteps();
			descriptionLabel = 'label_transition_sprint_launch_description';
			buttonText = "label_transition_continue_cap";
			buttonClickFunctionality = () => {
				// updateRoute({ route: `/execution/sprint/${currentSprintNumber}/report` });
				props.setWalkthroughState(null);
			}
			break;

		default:
			break;
	}

	switch (props.walkthrough.walkthroughState) {
		case 'planningStart':
		case 'planningCompleted':
			return <PlanningWalkthrough
				steps={steps}
				walkthroughTabsList={updatedWalkthroughTabsList}
				buttonText={buttonText}
				buttonClickFunctionality={buttonClickFunctionality}
				descriptionLabel={descriptionLabel}
			/>

		case 'executionSprintPlanning':
		case 'executionSprintExecution':
		case 'executionSprintLaunch':
			return <ExecutionWalkthrough
				steps={steps}
				walkthroughTabsList={updatedWalkthroughTabsList}
				buttonText={buttonText}
				buttonClickFunctionality={buttonClickFunctionality}
				descriptionLabel={descriptionLabel}
			/>

		default:
			return null;
	}
}

export default applyWrappers(WalkthroughManager, styles);