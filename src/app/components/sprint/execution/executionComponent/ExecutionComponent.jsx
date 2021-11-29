import React from 'react';
import styles from './executionComponent.module.sass';
// import getSkin from './skin.js';
// import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import TasksLane from 'components/sprint/execution/tasksLane';
import executionState from 'constants/executionState/executionState';
import cardState from 'constants/cardState/cardState';
import ConsolidateActionTemplate from 'commonComponents/consolidateActionTemplate';
import { checkIfPresent } from 'util/utilFunctions';

const ExecutionComponent = (props) => {

	// const myStyles = getSkin(props.skinGuide);

	const onClickReplanSprintButton = () => {
		props.setUiState({
			showOverlay: true,
			overlayComponentType: 'CENTER',
			highlightDesktopHeader: true,
			highlightMetricsHeader: false,
			overlayComponent: 'REPLAN_SPRINT_CONFIRMATION'
		});
	}

	const onClickEndSprintButton = () => {
		props.setUiState({
			showOverlay: true,
			overlayComponentType: 'CENTER',
			highlightDesktopHeader: true,
			highlightMetricsHeader: false,
			overlayComponent: 'END_SPRINT_CONFIRMATION'
		});
	}

	const getStoriesList = () => {
		const userStoryList = props.userStories.userStoryList;
		const storyList = props.stories.storyList;
		let storiesList = [];
		userStoryList.map((eachUserStory) => {
			if (
				eachUserStory.sprintNumber === props.userState.currentSprintNumber
				&& eachUserStory.storyStatus !== 1
			) {
				const storyDetails = storyList.find((eachStory) => {
					return eachUserStory.storyId === eachStory.id;
				});
				const featuresList = props.features.featuresList;
				const currentFeature = featuresList.find((eachFeature) => {
					return storyDetails.featureId === eachFeature.id
				});
				storiesList.push({
					storyDetails: storyDetails,
					userStoryDetails: eachUserStory,
					featureDetails: currentFeature
				});
			}
			return 1;
		});
		return storiesList;
	}

	const onClickAddPriorityButton = () => {
		const currentSprintUserStoryList = userStoryList.filter((eachUserStory) => {
			return (
				eachUserStory.sprintNumber === props.userState.currentSprintNumber
				&& eachUserStory.storyStatus !== 1
			)
		});
		const userStoryPriorityList = [];
		currentSprintUserStoryList.map((eachUserStory) => {
			userStoryPriorityList.push({
				storyId: eachUserStory.storyId,
				priorityId: eachUserStory.storyPriority
			});
			return 1;
		});

		props.setPriorityForTasks(
			{
				sprintId: props.userState.currentSprintNumber,
				sprintDay: props.userState.currentSprintDay,
				userStoryPriorityList: userStoryPriorityList
			}
		);
	}

	const onClickAutoFill = () => {
		console.log("Auto fill clicked...");
		props.setUiState({
			showOverlay: true,
			overlayComponentType: 'CENTER',
			highlightDesktopHeader: true,
			highlightMetricsHeader: false,
			overlayComponent: 'AUTOFILL_SPRINT_CONFIRMATION'
		});
	}

	const getPriorityValues = (userStories) => {
		const prioritiesList = props.priorities.prioritiesList;
		let priorityValues = [];
		const taskCount = userStories.length;
		let consolidatedTaskCount = 0;
		prioritiesList.map((eachPriority) => {
			const priorityTaskCount = Math.round((taskCount * eachPriority.maxTasksAllowedPercentage) / 100);
			consolidatedTaskCount = consolidatedTaskCount + priorityTaskCount;
			priorityValues.push({
				...eachPriority,
				priorityTaskCount: priorityTaskCount
			});
			return 1;
		});
		if (consolidatedTaskCount !== taskCount) {
			priorityValues = priorityValues.map((eachPriorityValue) => {
				if (consolidatedTaskCount < taskCount) {
					if (eachPriorityValue.priorityId === 1) {
						return {
							...eachPriorityValue,
							priorityTaskCount: eachPriorityValue.priorityTaskCount + (taskCount - consolidatedTaskCount)
						}
					}
				} else {
					if (eachPriorityValue.priorityId === 3) {
						return {
							...eachPriorityValue,
							priorityTaskCount: eachPriorityValue.priorityTaskCount + (taskCount - consolidatedTaskCount)
						}
					}
				}
				return eachPriorityValue;
			});
		}
		return priorityValues;
	}

	const checkTaskPriorities = (currentSprintUserStoryList, priorityValues) => {
		const prioritiesArray = [];
		currentSprintUserStoryList.map((eachUserStory) => {
			if (checkIfPresent(eachUserStory.storyPriority)) {
				prioritiesArray.push(eachUserStory.storyPriority);
			}
			return 1;
		});
		let enableButton = true;
		priorityValues.forEach((eachPriority) => {
			let count = 0;
			prioritiesArray.forEach((eachValue) => {
				if (eachValue === eachPriority.priorityId) {
					count++;
				}
			});
			if (count !== eachPriority.priorityTaskCount) {
				enableButton = false;
			}
		});
		return enableButton;
	}

	const renderTaskLanes = () => {
		// const userStoryList = props.userStories.userStoryList;
		// const storyList = props.stories.storyList;
		// let storiesList = [];
		// userStoryList.map((eachUserStory) => {
		// 	if (eachUserStory.sprintNumber === props.userState.currentSprintNumber) {
		// 		const storyDetails = storyList.find((eachStory) => {
		// 			return eachUserStory.storyId === eachStory.id;
		// 		});
		// 		const featuresList = props.features.featuresList;
		// 		const currentFeature = featuresList.find((eachFeature) => {
		// 			return storyDetails.featureId === eachFeature.id
		// 		});
		// 		storiesList.push({
		// 			storyDetails: storyDetails,
		// 			userStoryDetails: eachUserStory,
		// 			featureDetails: currentFeature
		// 		});
		// 	}
		// });

		if (props.userState.currentSprintState === executionState.SETTING_PRIORITY) {

			const notCompletedStoriesList = storiesList.filter((eachUserStory) => {
				return (
					eachUserStory.userStoryDetails.storyStatus !== 4
				);
			});

			return [
				<TasksLane
					heading={props.getLabel('label_sprint_execution_todo')}
					taskList={notCompletedStoriesList}
					cardState={cardState.SETTING_PRIORITY}
					showAutoFill={true}
					onClickAutoFill={onClickAutoFill}
					{...props}
				/>,
				<TasksLane
					heading={props.getLabel('label_sprint_execution_inprogress')}
					taskList={[]}
					cardState={cardState.SETTING_PRIORITY}
					{...props}
				/>,
				<TasksLane
					heading={props.getLabel('label_sprint_execution_completed')}
					taskList={[]}
					cardState={cardState.SETTING_PRIORITY}
					{...props}
				/>
			];
		} else if (props.userState.currentSprintState === executionState.SPRINT_EXECUTION) {
			return [
				<TasksLane
					heading={props.getLabel('label_sprint_execution_todo')}
					taskList={toDoStoriesList}
					cardState={cardState.EXECUTION_STATE}
					{...props}
				/>,
				<TasksLane
					heading={props.getLabel('label_sprint_execution_inprogress')}
					taskList={inProgressStoriesList}
					cardState={cardState.EXECUTION_STATE}
					{...props}
				/>,
				<TasksLane
					heading={props.getLabel('label_sprint_execution_completed')}
					taskList={doneStoriesList}
					cardState={cardState.EXECUTION_STATE}
					{...props}
				/>
			];
		}

	}

	const userStoryList = props.userStories.userStoryList;
	const currentSprintUserStoryList = userStoryList.filter((eachUserStory) => {
		return (
			eachUserStory.sprintNumber === props.userState.currentSprintNumber
			&& eachUserStory.storyStatus !== 1
		)
	});

	const currentNotCompletedSprintUserStoryList = currentSprintUserStoryList.filter((eachUserStory) => {
		return (eachUserStory.storyStatus !== 4);
	});

	const priorityValues = getPriorityValues(currentNotCompletedSprintUserStoryList);

	const storiesList = getStoriesList();
	const toDoStoriesList = storiesList.filter((eachStory) => {
		return eachStory.userStoryDetails.storyStatus === 2;
	});
	const inProgressStoriesList = storiesList.filter((eachStory) => {
		return eachStory.userStoryDetails.storyStatus === 3;
	});
	const doneStoriesList = storiesList.filter((eachStory) => {
		return eachStory.userStoryDetails.storyStatus === 4;
	});

	if (
		(props.userState.currentSprintState === executionState.SETTING_PRIORITY)
		|| (
			props.userState.currentSprintState === executionState.SPRINT_EXECUTION
			&& toDoStoriesList.length === 0
			&& inProgressStoriesList.length === 0
		)
	) {
		props.setDisableActions(true);
	}
	else {
		props.setDisableActions(false);
	}

	return (
		<div styleName="cards-container">
			{renderTaskLanes()}
			{
				props.userState.currentSprintState === executionState.SETTING_PRIORITY
					? <ConsolidateActionTemplate
						templateStyle={{
							left: '350px',
							top: '0px'
						}}
						type='SETTING_PRIORITY'
						sprintUserStories={currentNotCompletedSprintUserStoryList}
						priorityValues={priorityValues}
						enableButton={checkTaskPriorities(currentNotCompletedSprintUserStoryList, priorityValues)}
						buttonClickFunction={onClickAddPriorityButton}
						{...props}
					/>
					: null
			}
			{
				(props.userState.currentSprintState === executionState.SPRINT_EXECUTION
					&& toDoStoriesList.length === 0
					&& inProgressStoriesList.length === 0)
					? <ConsolidateActionTemplate
						templateStyle={{
							left: '50px',
							top: '0px'
						}}
						type='TASKS_COMPLETED'
						enableReplanSprintButton={true}
						onClickReplanSprintButton={onClickReplanSprintButton}
						enableEndSprintButton={true}
						onClickEndSprintButton={onClickEndSprintButton}
						{...props}
					/>
					: null
			}
		</div>
	);
}

export default applyWrappers(ExecutionComponent, styles);