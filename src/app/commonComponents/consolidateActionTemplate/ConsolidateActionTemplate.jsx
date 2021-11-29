import React, { useState } from 'react';
import styles from './consolidateActionTemplate.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import FilledButton from 'commonComponents/buttons/filledButton';
import HollowButton from 'commonComponents/buttons/hollowButton';
import Calendar from "svgComponents/calendar";
import { checkIfPresent } from 'util/utilFunctions';

const ConsolidateActionTemplate = (props) => {

	const [disableSetPriority, setDisableSetPriority] = useState(false);

	const viewSprintReportButtonClickFunction = () => {
		props.endSprint({
			sprintId: props.userState.currentSprintNumber
		});
	}

	const getTaskPriorityDetails = () => {
		const currentSprintUserStoryList = props.sprintUserStories;
		const priorityValues = props.priorityValues;

		const priorityCountObj = {};
		let atleastOnePrioritySet = false;
		let atleastOnePriorityCountExceeded = false;

		const prioritiesArray = [];
		currentSprintUserStoryList.map((eachUserStory) => {
			if (checkIfPresent(eachUserStory.storyPriority)) {
				prioritiesArray.push(eachUserStory.storyPriority);
			}
			return 1;
		});
		priorityValues.forEach((eachPriority) => {
			let count = 0;
			prioritiesArray.forEach((eachValue) => {
				if (eachValue === eachPriority.priorityId) {
					count++;
					atleastOnePrioritySet = true;
				}
			});

			priorityCountObj[eachPriority.priorityId] = count;
			if (count > eachPriority.priorityTaskCount) {
				atleastOnePriorityCountExceeded = true;
			}
		});
		return {
			priorityCountObj,
			atleastOnePrioritySet,
			atleastOnePriorityCountExceeded
		};
	}

	const renderActionImage = () => {
		switch (props.type) {
			case 'SETTING_PRIORITY':
				return <img alt="priority_setting" src={props.getImage('IMG_SETTING_PRIORITY')} width="100%" height="100%" />
			case 'TASKS_COMPLETED':
				return <img alt="tasks_completed" src={props.getImage('IMG_TASKS_COMPLETED')} width="100%" height="100%" />
			default:
				return null;
		}
	}

	const renderArrow = () => {
		switch (props.type) {
			case 'SETTING_PRIORITY':
				return (
					<div className={css(myStyles.arrowLeft)} styleName="arrow"></div>
				);
			case 'TASKS_COMPLETED':
				return (
					<div className={css(myStyles.arrowRight)} styleName="arrow"></div>
				);
			default:
				return null;
		}
	}

	const renderActionDetails = () => {
		switch (props.type) {
			case 'SETTING_PRIORITY':

				const taskPriorityDetails = getTaskPriorityDetails();

				const priorityValueDivs = props.priorityValues.map((eachPriorityValue) => {
					return (
						<div styleName="each-priority-value-container">
							{
								taskPriorityDetails.atleastOnePrioritySet
									? <div styleName="each-priority-value">
										<div className={
											taskPriorityDetails.priorityCountObj[eachPriorityValue.priorityId] > eachPriorityValue.priorityTaskCount
												? css(myStyles.eachPriorityValue, myStyles.colorRed)
												: css(myStyles.eachPriorityValue)
										}
										>
											{taskPriorityDetails.priorityCountObj[eachPriorityValue.priorityId]}
										</div>
										<div className={css(myStyles.eachPriorityValueCount)}>
											/{eachPriorityValue.priorityTaskCount}
										</div>
									</div>
									: <div styleName="each-priority-value" className={css(myStyles.eachPriorityValue)}>
										{eachPriorityValue.priorityTaskCount}
									</div>
							}
							<div styleName="each-priority-name-container">
								<div styleName="each-priority-value-desc" className={css(myStyles.eachPriorityValueDesc)}>
									{props.getLabel('label_tasks_to')}
								</div>
								<div styleName="each-priority-name" className={css(myStyles.eachPriorityName)}>
									{props.getLabel(eachPriorityValue.name)}
								</div>
							</div>


						</div>
					);
				});
				return [
					renderPriorityDescText(taskPriorityDetails),
					<div styleName="set-priority-values-container" className={taskPriorityDetails.atleastOnePrioritySet ? css(myStyles.highlightBlue) : null}>
						{priorityValueDivs}
					</div>
				];
			case 'TASKS_COMPLETED':
				if (11 - props.userState.currentSprintDay <= props.userState.replanSprintMinDays) {
					return (
						<div styleName="remaining-days-container">
							<div className={css(myStyles.daysHeading)} styleName="remaining-days-heading">
								{props.getLabel('label_days_lost_sprint')}
							</div>
							<div styleName="remaining-days-count-container">
								<div styleName="remaining-days-image">
									<Calendar />
								</div>
								<div className={css(myStyles.daysCountText)} styleName="remaining-days-count">
									{props.getLabel('label_number_days', '', {
										DAY_NUMBER: 11 - props.userState.currentSprintDay
									})}
									{/* {11 - props.userState.currentSprintDay} Days */}
								</div>
							</div>
						</div>
					);
				}
				return (
					<div styleName="remaining-days-container">
						<div className={css(myStyles.daysHeading)} styleName="remaining-days-heading">
							{props.getLabel('label_days_remaining_sprint')}
						</div>
						<div styleName="remaining-days-count-container">
							<div styleName="remaining-days-image">
								<Calendar />
							</div>
							<div className={css(myStyles.daysCountText)} styleName="remaining-days-count">
								{(props.userState.currentSprintNumber <= 4)
									? props.getLabel('label_number_days', '', {
										DAY_NUMBER: 11 - props.userState.currentSprintDay
									})
									: props.getLabel('label_number_days', '', {
										DAY_NUMBER: 50 - props.userState.currentDay
									})
									// ? 11 - props.userState.currentSprintDay + ' Days'
									// : 50 - props.userState.currentDay + ' Days'
								}
								{/* {11 - props.userState.currentSprintDay} Days */}
							</div>
						</div>
					</div>
				);
			default:
				return null;
		}
	}

	const renderPriorityDescText = (taskPriorityDetails) => {
		if (props.enableButton) {
			return (
				<div className={css(myStyles.setPriorityDescText)} styleName="set-priority-desc-text">
					{props.getLabel('label_set_priority_count_matched')}
				</div>
			);
		}
		if (taskPriorityDetails.atleastOnePrioritySet === false) {
			return (
				<div className={css(myStyles.setPriorityDescText)} styleName="set-priority-desc-text">
					{props.getLabel('label_set_priority_desc_text')}
				</div>
			);
		}
		if (taskPriorityDetails.atleastOnePriorityCountExceeded === false) {
			return (
				<div className={props.enableButton ? css(myStyles.setPriorityDescText) : css(myStyles.setPriorityDescTextRed)} styleName="set-priority-desc-text">
					{props.getLabel('label_set_priority_count_none_execeeded')}
				</div>
			);
		}
		return (
			<div className={css(myStyles.setPriorityDescTextRed)} styleName="set-priority-desc-text">
				{props.getLabel('label_set_priority_count_atleast_one_execeeded')}
			</div>
		);
	}

	const renderActionButtons = () => {
		switch (props.type) {
			case 'SETTING_PRIORITY':
				return (
					<div styleName="button-container">
						<FilledButton
							textLabel={props.getLabel('label_continue_cap')}
							clickFunction={
								() => {
									setDisableSetPriority(true);
									props.buttonClickFunction();
								}
							}
							disableButton={!props.enableButton || disableSetPriority}
						/>
					</div>
				);
			case 'TASKS_COMPLETED':
				if (11 - props.userState.currentSprintDay <= props.userState.replanSprintMinDays) {
					return (
						<div styleName="button-container">
							<FilledButton
								textLabel={props.getLabel('label_view_sprint_report')}
								clickFunction={viewSprintReportButtonClickFunction}
								disableButton={!props.enableEndSprintButton}
							/>
						</div>
					);
				}
				return [
					<div styleName="button-container">
						<FilledButton
							textLabel={props.getLabel('label_replan_sprint')}
							clickFunction={props.onClickReplanSprintButton}
							disableButton={!props.enableReplanSprintButton}
						/>
					</div>,
					<div styleName="button-container">
						<HollowButton
							textLabel={props.getLabel('label_end_sprint')}
							clickFunction={props.onClickEndSprintButton}
							disableButton={!props.enableEndSprintButton}
						/>
					</div>
				];
			default:
				return null;
		}
	}

	const renderActionText = () => {
		switch (props.type) {
			case 'SETTING_PRIORITY':
				return props.getLabel('label_set_priority_action_heading');
			case 'TASKS_COMPLETED':
				if (11 - props.userState.currentSprintDay <= props.userState.replanSprintMinDays) {
					return props.getLabel('label_all_task_completed_action_heading_noreplan');
				}
				return props.getLabel('label_all_task_completed_action_heading');
			default:
				return null;
		}
	}

	const renderActionDesc = () => {
		switch (props.type) {
			case 'SETTING_PRIORITY':
				return props.getLabel('label_set_priority_action_desc');
			case 'TASKS_COMPLETED':
				if (11 - props.userState.currentSprintDay <= props.userState.replanSprintMinDays) {
					return props.getLabel('label_replan_not_possible_desc');
				}
				return props.getLabel('label_all_task_completed_action_desc', "", { DAY_COUNT: 11 - props.userState.currentSprintDay });
			default:
				return null;
		}
	}

	const myStyles = getSkin(props.skinGuide);
	return (
		<div
			className={css(myStyles.completeContainer)}
			styleName="consolidate-action-container"
			style={{
				...props.templateStyle,
				// height: (props.userState.currentSprintState === executionState.SPRINT_EXECUTION && 11 - props.userState.currentSprintDay <= props.userState.replanSprintMinDays) ? '435px' : '400px'
				height: '435px'
			}}
		>
			<div styleName="action-header-container" style={{

			}}>
				<div className={css(myStyles.headerContainer)} styleName="action-header-container-background">
					{/* <TriangleBackground /> */}
				</div>
				<div styleName="action-header-container-content">
					<div styleName="header-image">
						{renderActionImage()}
					</div>
					<div className={css(myStyles.headerText)} styleName="header-text">
						{renderActionText()}
					</div>
					<div className={css(myStyles.headerDesc)} styleName="header-desc">
						{renderActionDesc()}
					</div>
				</div>
			</div>
			<div styleName="action-details-container">
				{renderActionDetails()}
			</div>
			<div styleName="action-buttons-container">
				{renderActionButtons()}
			</div>
			{renderArrow()}
		</div>
	);
}

export default applyWrappers(ConsolidateActionTemplate, styles);