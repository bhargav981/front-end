import React, { useState } from 'react';
import styles from './sprintPlanningComponent.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import PlanningHeader from 'components/sprint/planning/planningHeader';
import TaskCard from 'commonComponents/taskCard';
import cardState from 'constants/cardState/cardState';

const SprintPlanningComponent = (props) => {

	const myStyles = getSkin(props.skinGuide);

	const [taskCount, setTaskCount] = useState(0);
	const [taskArray, setTaskArray] = useState([]);
	const [storyPointCount, setStoryPointCount] = useState(0);
	const [featureFilter, setFeatureFilter] = useState(0);
	const [statusFilter, setStatusFilter] = useState(0);

	const onClickAddTaskToSprint = () => {
		props.addTasksToSprint(
			{
				sprintId: props.userState.currentSprintNumber,
				userStoryIds: taskArray
			}
		);
	}

	const openConfirmationPopup = () => {
		props.setUiState({
			showOverlay: true,
			highlightDesktopHeader: true,
			highlightMetricsHeader: false,
			overlayComponentType: 'CENTER',
			overlayComponent: 'ADD_TASK_CONFIRMATION_POPUP'
		});
	}

	const checkStatusFilter = (progress, storyPoint, statusFilterValue) => {
		switch(statusFilterValue){
			case 2:
				return progress === 0;
			case 1:
				return (progress > 0 && progress < storyPoint);
			case 3:
				return progress === storyPoint
			default:
				return false;
		}
	}


	const getFeatureFilterArray = () => {
		const featuresList = props.features.featuresList;
		const filterArray = [
			{
				value: 0,
				name: props.getLabel('label_filter_by_feature')
			}
		]
		featuresList.map((eachFeature) => {
			filterArray.push({
				value: eachFeature.featureId,
				name: props.getLabel(eachFeature.name)
			});
			return 1;
		});
		return filterArray;
	}

	const getStatusFilterArray = () => {
		// const statusesList = props.statuses.statusesList;
		const statusArray = [
			{
				value: 0,
				name: props.getLabel('label_filter_by_status')
			},
			{
				value: 1,
				name: props.getLabel('label_pending')
			},
			{
				value: 2,
				name: props.getLabel('label_to_do')
			},
			{
				value: 3,
				name: props.getLabel('label_completed')
			}
		];
		return statusArray;
	}

	const getStatusStories = (statusFilterValue, statusFilterName) => {
		const userStoryList = props.userStories.userStoryList;
		const storyList = props.stories.storyList;
		const statusStories = [];
		userStoryList.map((eachUserStory, index) => {
			const storyDetails = storyList.find((eachStory) => {
				return eachUserStory.storyId === eachStory.id;
			});
			const featuresList = props.features.featuresList;
			const currentFeature = featuresList.find((eachFeature) => {
				return storyDetails.featureId === eachFeature.id
			});
			if (
				(storyDetails.featureId === featureFilter || featureFilter === 0)
				&& (checkStatusFilter(eachUserStory.progress, storyDetails.storyPoint, statusFilterValue))
			) {
				statusStories.push(
					<TaskCard
						storyDetails={storyDetails}
						userStoryDetails={eachUserStory}
						featureDetails={currentFeature}
						taskCount={props.userState.taskCount}
						setTaskCount={setTaskCount}
						storyPointCount={props.userState.storyPointCount}
						setStoryPointCount={setStoryPointCount}
						taskArray={props.userState.taskArray}
						setTaskArray={setTaskArray}
						cardState={cardState.SELECTING_TASKS}
						priorities={props.priorities}
						statuses={props.statuses}
						index={index}
						{...props}
					/>
				);
			}
			return null;
		});

		return (
			<div styleName="each-status-stories-container">
				<div styleName="each-status-heading" className={css(myStyles.eachStatusHeading)}>
					{statusFilterName}&nbsp;({statusStories.length})
						</div>
				<div styleName="each-status-cards-container">
					{statusStories}
				</div>
			</div>
		);
	}

	const renderCards = () => {
		// const userStoryList = props.userStories.userStoryList;
		// const storyList = props.stories.storyList;

		const statusFilterName = getStatusFilterArray().find((eachStatus) => {
			return eachStatus.value === statusFilter;
		}).name;

		if (statusFilter !== 0) {
			return getStatusStories(statusFilter, statusFilterName);
		}
		return getStatusFilterArray().map((eachStatus) => {
			if (eachStatus.value === 0) {
				return null;
			}
			return getStatusStories(eachStatus.value, eachStatus.name);
		});
	}

	//Removing card scrollbar for tutorial
	const { tutorial } = props
	let isTutorialRunning = false
	if (tutorial.isRunning) {
		isTutorialRunning = true
	}

	// Code for zoomed card
	const zoomedStoryDetails = props.stories.storyList.find((eachStory) => {
		return props.userStories.userStoryList[0].storyId === eachStory.id;
	});
	const featuresList = props.features.featuresList;
	const currentFeature = featuresList.find((eachFeature) => {
		return zoomedStoryDetails.featureId === eachFeature.id
	});
	const isZoomedCardShown = tutorial.isRunning && tutorial.stepIndex === 4

	return (
		<div styleName="sprint-planning-component">
			<div styleName="sprint-planning-component-background">
				<img width="100%" height="100%" src={props.getImage('SIM_BACKGROUND')} alt="" />
			</div>
			<div styleName="sprint-planning-component-content" className={css(myStyles.planningContent)}>
				<div styleName="planning-background" className={css(myStyles.planningBackground)}>
				</div>
				<div styleName="planning-content-container">
					<div styleName="planning-content">
						<PlanningHeader
							{...props}
							taskCount={props.userState.taskCount}
							storyPointCount={props.userState.storyPointCount}
							featureFilter={featureFilter}
							statusFilter={statusFilter}
							setFeatureFilter={setFeatureFilter}
							setStatusFilter={setStatusFilter}
							filterFeatureArray={getFeatureFilterArray()}
							filterStatusArray={getStatusFilterArray()}
							onClickAddTaskToSprint={openConfirmationPopup}
						/>
						{/* Hide scroll bar for tutorial */}
						<div styleName="cards-container" style={isTutorialRunning ? { overflow: 'hidden' } : {}}>
							{renderCards()}
						</div>
					</div>
				</div>
			</div>

			{/* This is the zoomed card for tutorial */}
			{
				isZoomedCardShown ?
					<div styleName="zoomed-card" id="zoomed-card">
						<TaskCard
							storyDetails={zoomedStoryDetails}
							userStoryDetails={props.userStories.userStoryList[0]}
							featureDetails={currentFeature}
							taskCount={props.userState.taskCount}
							setTaskCount={setTaskCount}
							storyPointCount={props.userState.storyPointCount}
							setStoryPointCount={setStoryPointCount}
							taskArray={props.userState.taskArray}
							setTaskArray={setTaskArray}
							cardState={cardState.SELECTING_TASKS}
							priorities={props.priorities}
							statuses={props.statuses}
							index='0'
							isZoomed={true}
							{...props}
						/>
					</div>
					: null
			}
		</div>
	);
}

export default applyWrappers(SprintPlanningComponent, styles);