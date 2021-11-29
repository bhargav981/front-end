import React from 'react';
import styles from './autofillSprintConfirmation.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import FilledButton from 'commonComponents/buttons/filledButton';
import HollowButton from 'commonComponents/buttons/hollowButton';
import TriangleBackground from 'svgComponents/triangleBackground';
import { checkIfPresent } from 'util/utilFunctions';

const AutofillSprintConfirmation = (props) => {

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

	const getTaskPriorityDetails = (currentSprintUserStoryList, priorityValues) => {

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

	const cancelButtonClickFunction = () => {
		props.setUiState({
			showOverlay: false,
			overlayComponentType: '',
			highlightDesktopHeader: false,
			highlightMetricsHeader: false,
			overlayComponent: ''
		});
	}

	const closePopup = () => {
		props.setUiState({
			showOverlay: false,
			overlayComponentType: '',
			highlightDesktopHeader: false,
			highlightMetricsHeader: false,
			overlayComponent: ''
		});
	}

	const resetPriority = () => {
		const priorityNumberArray = [];
		priorityValues.map((eachPriorityValue) => {
			for (let index = 0; index < eachPriorityValue.priorityTaskCount; index++) {
				priorityNumberArray.push(eachPriorityValue.priorityId);
			}
			return 1;
		});
		const storyPriorityArray = [];
		currentNotCompletedSprintUserStoryList.map((eachStory, index) => {
			storyPriorityArray.push({
				storyId: eachStory.storyId,
				storyPriority: index < priorityNumberArray.length ? priorityNumberArray[index] : null
			});
			return 1;
		});
		return storyPriorityArray;
	}

	const retainAndResetPriority = () => {
		const priorityNumberArray = [];
		const remainingPriorityCountObj = {};
		priorityValues.map((eachPriorityValue) => {
			if (taskPriorityDetails.priorityCountObj[eachPriorityValue.priorityId] <= eachPriorityValue.priorityTaskCount) {
				remainingPriorityCountObj[eachPriorityValue.priorityId] = eachPriorityValue.priorityTaskCount - taskPriorityDetails.priorityCountObj[eachPriorityValue.priorityId];
			}
			return 1;
		});
		Object.keys(remainingPriorityCountObj).map((eachPriorityId) => {
			for (let index = 0; index < remainingPriorityCountObj[eachPriorityId]; index++) {
				priorityNumberArray.push(parseInt(eachPriorityId, 10));
			}
			return 1;
		});
		const storyPriorityArray = [];
		let iterator = 0;
		currentNotCompletedSprintUserStoryList.map((eachStory) => {
			if (eachStory.storyPriority == null) {
				storyPriorityArray.push({
					storyId: eachStory.storyId,
					storyPriority: iterator < priorityNumberArray.length ? priorityNumberArray[iterator] : null
				});
				iterator++;
			}
			return 1;
		});
		return storyPriorityArray;
	}

	const continueButtonClickFunction = (priorityValues) => {
		let storyPriorityArray = [];
		if (
			taskPriorityDetails.atleastOnePriorityCountExceeded
			|| !taskPriorityDetails.atleastOnePrioritySet
		) {
			// Reset all priorities
			storyPriorityArray = resetPriority();

		} else {
			// Retain set priorities and randomize others
			storyPriorityArray = retainAndResetPriority();
		}
		props.updateUserStories(storyPriorityArray);
		closePopup();
	}

	const renderDesc = (taskPriorityDetails) => {
		if (taskPriorityDetails.atleastOnePriorityCountExceeded) {
			return props.getLabel('label_auto_fill_priority_execeeded_desc');
		} else if (taskPriorityDetails.atleastOnePrioritySet) {
			return props.getLabel('label_auto_fill_desc_atleast_one_selected');
		} else {
			return props.getLabel('label_auto_fill_desc_none_selected')
		}
	}

	const myStyles = getSkin(props.skinGuide);
	const taskPriorityDetails = getTaskPriorityDetails(currentNotCompletedSprintUserStoryList, priorityValues);
	
	return (
		<div styleName="main-component" className={css(myStyles.completeContainer)}>
			<div styleName="popup-header-container">
				<div className={css(myStyles.headerContainer)} styleName="popup-header-container-background">
					<TriangleBackground />
				</div>
				<div styleName="popup-header-container-content">
					{/* <div styleName="header-image">
						{renderpopupImage()}
					</div> */}
					<div className={css(myStyles.headerText)} styleName="header-text">
						{props.getLabel('label_auto_fill_heading')}
					</div>
					<div className={css(myStyles.headerDesc)} styleName="header-desc">
						{renderDesc(taskPriorityDetails)}
					</div>
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
						clickFunction={() => { continueButtonClickFunction(priorityValues); }}
					/>
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(AutofillSprintConfirmation, styles);




