import React, { useState } from 'react';
import styles from './addTaskConfirmation.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import FilledButton from 'commonComponents/buttons/filledButton';
import HollowButton from 'commonComponents/buttons/hollowButton';
import TriangleBackground from 'svgComponents/triangleBackground';
import { actionOptionIds } from 'config/actions';

const AddTaskConfirmation = (props) => {

	const [ disableAddTasksButton, setDisableAddTasksButton ] = useState(false);

	const cancelButtonClickFunction = () => {
		props.setUiState({
			showOverlay: false,
			overlayComponentType: '',
			highlightDesktopHeader: false,
			highlightMetricsHeader: false,
			overlayComponent: ''
		});
	}

	const closeConfirmationPopup = () => {
		props.setUiState({
			showOverlay: false,
			overlayComponentType: '',
			highlightDesktopHeader: false,
			highlightMetricsHeader: false,
			overlayComponent: ''
		});
	}

	const clearUserStateTaskLabels = () => {
		props.updateUserState({
			taskCount: 0,
			storyPointCount: 0,
			taskArray: []
		});
		closeConfirmationPopup();
	}

	const addTasksToSprintFunction = () => {
		props.addTasksToSprint(
			{
				sprintId: props.userState.currentSprintNumber,
				userStoryIds: props.userState.taskArray
			},
			clearUserStateTaskLabels
		);
	}

	const myStyles = getSkin(props.skinGuide);
	return (
		<div styleName="main-component" className={css(myStyles.completeContainer)}>
			<div styleName="popup-header-container">
				<div className={css(myStyles.headerContainer)} styleName="popup-header-container-background">
					<TriangleBackground />
				</div>
				<div styleName="popup-header-container-content">
					<div className={css(myStyles.headerText)} styleName="header-text">
						{props.getLabel('label_add_task_confirmation_popup_heading')}
					</div>
					<div className={css(myStyles.headerDesc)} styleName="header-desc">
						{props.getLabel('label_add_task_confirmation_popup_desc')}
					</div>

				</div>
			</div>
			<div styleName="details-container">
				<div className={css(myStyles.tasksContainer)} styleName="tasks-container">
					{props.getLabel('label_tasks_selected', '', { TASK_COUNT: props.userState.taskCount })}
				</div>
				<div className={css(myStyles.storyPointsContainer)} styleName="storyPoints-container">
					{props.getLabel('label_story_points')} | {props.userState.storyPointCount}
				</div>
			</div>
			<div styleName="popup-buttons-container">
				<div styleName="button-container">
					<FilledButton
						textLabel={props.getLabel('label_cancel')}
						clickFunction={cancelButtonClickFunction}
					/>
				</div>
				<div styleName="button-container">
					<HollowButton
						textLabel={props.getLabel('label_continue_cap')}
						clickFunction={() => {
							setDisableAddTasksButton(true);
							addTasksToSprintFunction();
						}}
						disableButton={disableAddTasksButton}
					/>
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(AddTaskConfirmation, styles);