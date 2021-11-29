import React, { useEffect } from 'react';
import styles from './taskCard.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import InfoComponent from 'commonComponents/infoComponent';
import { checkIfPresent, addItemToArray, removeItemFromArray } from 'util/utilFunctions';
import AddTaskButton from 'svgComponents/addTaskButton';
import SelectedTaskButton from 'svgComponents/selectedTaskButton';
import cardState from 'constants/cardState/cardState';
import LowPriority from 'svgComponents/lowPriority';
import MediumPriority from 'svgComponents/mediumPriority';
import HighPriority from 'svgComponents/highPriority';
import Blocker from 'svgComponents/blocker';
import BlockerResolved from 'svgComponents/blockerResolved';
import AddTaskCheckBox from 'svgComponents/addTaskCheckBox';
import SelectedTaskCheckBox from 'svgComponents/selectedTaskCheckBox';
import CustomerLike from 'svgComponents/customerLike';

const TaskCard = (props) => {

	useEffect(() => {
		if (props.userStoryDetails.showBlockerResolved) {
			setTimeout(() => {
				props.updateUserTasksAction({
					storyId: props.storyDetails.id,
					showBlockerResolved: false
				});
			}, 5000);
		}
	});

	const isCardSelected = () => {
		if (props.cardState === cardState.SELECTING_TASKS && props.cardState !== cardState.POPUP_STATE) {
			return props.taskArray.indexOf(props.userStoryDetails.storyId) >= 0;
		}
		return false;
	}

	const getCardStyleName = () => {
		if (props.cardState === cardState.EXECUTION_STATE) {
			return "card-container card-cursor";
		}
		return "card-container";
	}

	const onTaskCardClick = () => {
		//Go to next tutorial step, if tutorial is in progress
		const { tutorial } = props
		// if (tutorial.isRunning && tutorial.stepIndex === 3 && props.cardState === cardState.SELECTING_TASKS) {
		// 	props.updateStepNumber(tutorial.stepIndex + 1)
		// }

		if (
			(props.cardState === cardState.EXECUTION_STATE
				|| props.cardState === cardState.SELECTING_TASKS
				|| props.cardState === cardState.SETTING_PRIORITY
			) && (tutorial.type !== 'sprintPlanningScreen')
		) {
			if (tutorial.type === 'blockerAction') {
				props.endTutorial()
				props.stopBlockerTutorial()
			}
			props.updateUserState({
				selectedStoryId: props.userStoryDetails.storyId
			});
			props.setUiState({
				showOverlay: true,
				overlayComponentType: 'CENTER',
				highlightDesktopHeader: true,
				highlightMetricsHeader: false,
				overlayComponent: 'STORY_POPUP'
			});
		}
	}

	const getPriorityImageComponent = (priorityId) => {
		switch (priorityId) {
			case 1:
				return <HighPriority />;
			case 2:
				return <MediumPriority />;
			case 3:
				return <LowPriority />;
			default:
				return null;
		}
	}

	const setUserTaskPriority = (priorityId) => {
		props.updateUserTasksAction({
			storyId: props.storyDetails.id,
			storyPriority: priorityId
		});
	}

	const renderBlockerTag = () => {
		return (
			<div className={css(myStyles.blockerTag, myStyles.redTag)} styleName="blocker-tag-component">
				<div styleName="blocker-image">
					<Blocker />
				</div>
				<div className={css(myStyles.blockerText, myStyles.redText)} styleName="blocker-text">
					{props.getLabel('label_task_attention')}
				</div>
			</div>
		);
	}

	const renderBlockerClearedTag = () => {
		return (
			<div className={css(myStyles.blockerTag, myStyles.greenTag)} styleName="blocker-tag-component">
				<div styleName="blocker-image">
					<BlockerResolved />
				</div>
				<div className={css(myStyles.blockerText, myStyles.greenText)} styleName="blocker-text">
					{props.getLabel('label_task_blocker_cleared')}
				</div>
			</div>
		);
	}

	const renderCardStatusBox = () => {
		switch (props.cardState) {
			case cardState.SELECTING_TASKS:
				return renderTaskAddButton();
			case cardState.SETTING_PRIORITY:
				return;
			case cardState.EXECUTION_STATE:
				return renderTaskPriority();
			case cardState.BLOCKED_STATE:
				return renderTaskPriority();
			case cardState.RESOLVED_STATE:
				return renderTaskPriority();
			case cardState.POPUP_STATE:
				return renderTaskPriority();
			default:
				return;
		}
	}

	const renderDescPriorityContainer = () => {
		switch (props.cardState) {
			case cardState.SELECTING_TASKS:
				return renderCardFeatureDetails();
			case cardState.SETTING_PRIORITY:
				return renderPriorityButtons();
			case cardState.EXECUTION_STATE:
				return renderCardFeatureDetails();
			case cardState.POPUP_STATE:
				return renderCardFeatureDetails();
			case cardState.BLOCKED_STATE:
				return renderBlockerTag();
			case cardState.RESOLVED_STATE:
				return renderBlockerClearedTag();
			default:
				return;
		}
	}

	const onClickAddTaskButton = () => {
		const { tutorial } = props
		// if tutorial is running and needs click on card to zoom, disable the function
		if (tutorial.isRunning && tutorial.stepIndex === 1 && props.cardState === cardState.SELECTING_TASKS) {
			props.updateStepNumber(tutorial.stepIndex + 1)
			return
		}

		if (isCardSelected()) {
			props.setTaskCount(props.taskCount - 1);
			props.setStoryPointCount(props.storyPointCount - props.storyDetails.storyPoint);
			props.setTaskArray(removeItemFromArray(props.taskArray, props.storyDetails.id));
			props.updateUserState({
				taskCount: props.taskCount - 1,
				storyPointCount: props.storyPointCount - props.storyDetails.storyPoint,
				taskArray: removeItemFromArray(props.taskArray, props.storyDetails.id)
			});
		} else {
			props.setTaskCount(props.taskCount + 1);
			props.setStoryPointCount(props.storyPointCount + props.storyDetails.storyPoint);
			props.setTaskArray(addItemToArray(props.taskArray, props.storyDetails.id));
			props.updateUserState({
				taskCount: props.taskCount + 1,
				storyPointCount: props.storyPointCount + props.storyDetails.storyPoint,
				taskArray: addItemToArray(props.taskArray, props.storyDetails.id)
			});
			// If tutorial is running, stop the tutorial after click on the + button
			// if (tutorial.isRunning && tutorial.stepIndex == 2) {
			// 	setTimeout(() => { props.pauseTutorial() }, 1000)
			// }
		}
	}

	const renderTaskAddButton = () => {
		if (
			props.userStoryDetails.storyStatus === 4
			|| props.userStoryDetails.progress === props.storyDetails.storyPoint
		) {
			return null;
		}
		return (
			<div styleName="add-task-button-container">
				<div
					styleName="add-task-button"
					// className={isCardSelected() ? css(myStyles.selectedShadow) : null}
					onClick={(e) => {
						onClickAddTaskButton();
						e.stopPropagation();
					}}
				>
					{
						isCardSelected()
							? <SelectedTaskCheckBox />
							: <AddTaskCheckBox />
					}

				</div>
			</div>
		);
	}

	const renderPriorityButtons = () => {
		const priorityList = props.priorities.prioritiesList;
		let isPrioritySet = false;
		const priorityButtonList = priorityList.map((eachPriority) => {
			if (eachPriority.priorityId === props.userStoryDetails.storyPriority) {
				isPrioritySet = true;
			}
			return (
				<div
					styleName="each-priority"
					className={
						eachPriority.priorityId === props.userStoryDetails.storyPriority
							? css(myStyles.selectedPriority)
							: css(myStyles.eachPriority)
					}
					onClick={(e) => {
						setUserTaskPriority(eachPriority.priorityId);
						e.stopPropagation();
					}}
				>
					{props.getLabel(eachPriority.name)}
				</div>
			);
		});
		return (
			<div
				styleName="priorities-button-container"
				className={isPrioritySet ? css(myStyles.prioritiesContainerSelected) : css(myStyles.prioritiesContainer)}
			>
				<div
					styleName="set-priority-heading"
					className={css(myStyles.setPriorityHeading)}
				>
					{props.getLabel('label_set_priority')} :
				</div>
				<div styleName="priority-buttons">
					{priorityButtonList}
				</div>
			</div>
		);
	}

	const renderTaskPriority = () => {
		if (!checkIfPresent(props.userStoryDetails.storyPriority)) {
			return null;
		}
		const priorityList = props.priorities.prioritiesList;
		const storyPriorityDetails = priorityList.find((eachPriority) => {
			return (eachPriority.priorityId === props.userStoryDetails.storyPriority)
		});
		return (
			<div
				styleName="task-priority-container"
				className={css(myStyles.priorityContainer)}
			>
				<div styleName="task-priority-image">
					{getPriorityImageComponent(props.userStoryDetails.storyPriority)}
				</div>
				<div
					styleName="task-priority-letter"
					className={css(myStyles.priorityLetter)}
				>
					{props.getLabel(storyPriorityDetails.key)}
				</div>
			</div>
		);
	}

	const renderFeatureImage = (feature) => {
		if (checkIfPresent(feature.imageKey)) {
			return <img alt={feature.imageKey} width="15px" height="15px" src={props.getImage(feature.imageKey)} />;
		}

		return <img alt="default" width="15px" height="15px" src={props.getImage('IMG_DEFAULT_FEATURE')} />;
	}

	const renderCardFeatureDetails = () => {
		const featureDetails = props.featureDetails;

		if (props.userStoryDetails.showBlocker) {
			return renderBlockerTag();
		} else if (props.userStoryDetails.showBlockerResolved) {
			return renderBlockerClearedTag();
		}

		return (
			<div styleName="feature-details-container">
				<span styleName="feature-container" className={css(myStyles.featureContainer)}>
					<span styleName="feature-image">
						{renderFeatureImage(featureDetails)}
					</span>
					<span styleName="feature-name" className={css(myStyles.featureName)}>
						{props.getLabel(featureDetails.name)}
					</span>
				</span>
				<span styleName="feature-desc" className={css(myStyles.featureDesc)}>
					{props.getLabel(featureDetails.name).length + props.getLabel(featureDetails.description).length > 70
						? `${props.getLabel(featureDetails.description).substring(0, 70 - props.getLabel(featureDetails.name).length)}...`
						: props.getLabel(featureDetails.description)
					}
					{/* {props.getLabel(featureDetails.description)} */}
				</span>
			</div>
		);
	}

	let idName = `task-card-` + props.index;

	const getCardClassName = () => {
		if (isCardSelected()) {
			return css(myStyles.cardContainer, myStyles.cardSelectedContainer);
		} else {
			if (props.userStoryDetails.showBlocker) {
				idName = 'task-card-blocker';
				return css(myStyles.cardContainer, myStyles.borderBlocker);
			}
			return css(myStyles.cardContainer);
		}
	}

	const myStyles = getSkin(props.skinGuide);


	//Added specific style for zoomed card, when tutorial is ongoing
	return (
		<div
			className={getCardClassName()}
			styleName={getCardStyleName()}
			style={
				props.isZoomed
					? {
						margin: '0',
						zoom: 1.5,
						cursor: 'auto'
					}
					: {}
			}
			id={idName}
			key={`user-story-${props.userStoryDetails.storyId}`}
			onClick={onTaskCardClick}
		>
			<div styleName="card-header">
				<div className={css(myStyles.cardHeading)} styleName="card-heading-content">
					{
						props.getLabel(props.storyDetails.name).length >= 55 && false
							? `${props.getLabel(props.storyDetails.name).substring(0, 52)}...`
							: props.getLabel(props.storyDetails.name)
					}
				</div>
				<div styleName="card-status-box">
					{renderCardStatusBox()}
				</div>
			</div>
			<div styleName="desc-priority-container">
				{renderDescPriorityContainer()}
			</div>
			<div styleName="progress-container">
				<div className={css(myStyles.progressbackground)} styleName="progress-bar-background">
					<div
						style={{
							width: `${Math.round((props.userStoryDetails.progress / props.storyDetails.storyPoint) * 100, 2)}%`
						}}
						className={css(myStyles.progressNoBlocker)}
						styleName="progress-bar"
					></div>
				</div>
			</div>
			{
				props.cardState === cardState.POPUP_STATE
					? props.storyDetails.isPA
						? <div styleName="story-point-container-like-customer">
							<div styleName="story-point">
								<div className={css(myStyles.storyPoints)} styleName="storypoints-text">
									{props.getLabel('label_story_points')} | {props.storyDetails.storyPoint}
								</div>
								<InfoComponent
									tooltipText={props.getLabel(props.storyDetails.storyPointDescription)}
									alignTooltipKey="TOP"
									tooltipStyles={{
										width: '220px'
									}}
								/>
							</div>
							<div styleName="like-customer-img">
								<CustomerLike />
							</div>
						</div>
						: <div styleName="story-point-container">
							<div className={css(myStyles.storyPoints)} styleName="storypoints-text">
								{props.getLabel('label_story_points')} | {props.storyDetails.storyPoint}
							</div>
							<InfoComponent
								tooltipText={props.getLabel(props.storyDetails.storyPointDescription)}
								alignTooltipKey="TOP"
								tooltipStyles={{
									width: '220px'
								}}
							/>
						</div>
					: <div styleName="story-point-container">
						<div className={css(myStyles.storyPoints)} styleName="storypoints-text">
							{props.getLabel('label_story_points')} | {props.storyDetails.storyPoint}
						</div>
						<InfoComponent
							tooltipText={props.getLabel(props.storyDetails.storyPointDescription)}
							alignTooltipKey="TOP"
							tooltipStyles={{
								width: '220px'
							}}
						/>
					</div>
			}
		</div>
	);
}

export default applyWrappers(TaskCard, styles);