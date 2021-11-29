import React from 'react';
import styles from './storyPopup.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import Close from 'svgComponents/close';
import InfoComponent from 'commonComponents/infoComponent';
import StoryHistoryItem from 'commonComponents/storyHistoryItem';
import ActionList from 'components/sprint/execution/actionList';
import _ from 'lodash';
import AddTaskCheckBox from 'svgComponents/addTaskCheckBox';
import SelectedTaskCheckBox from 'svgComponents/selectedTaskCheckBox';
import { checkIfPresent, addItemToArray, removeItemFromArray } from 'util/utilFunctions';

const StoryPopup = (props) => {

	const closePopup = () => {
		props.updateUserState({
			selectedStoryId: null
		});
		props.setUiState({
			showOverlay: false,
			overlayComponentType: '',
			highlightDesktopHeader: false,
			highlightMetricsHeader: false,
			overlayComponent: ''
		});
	}

	const onClickCard = (e) => {
		e.stopPropagation();
	}

	const isCardSelected = () => {
		if (props.userState.taskArray.indexOf(props.userState.selectedStoryId) >= 0) {
			return true;
		}
		return false;
	}

	const onCardSelectClick = (storyDetails) => {
		if (isCardSelected()) {
			props.updateUserState({
				taskCount: props.userState.taskCount - 1,
				storyPointCount: props.userState.storyPointCount - storyDetails.storyPoint,
				taskArray: removeItemFromArray(props.userState.taskArray, storyDetails.id)
			});
		} else {
			props.updateUserState({
				taskCount: props.userState.taskCount + 1,
				storyPointCount: props.userState.storyPointCount + storyDetails.storyPoint,
				taskArray: addItemToArray(props.userState.taskArray, storyDetails.id)
			});
		}
	}

	const renderDetail = (name, value, infoDesc) => {
		return (
			<div styleName="each-detail-container">
				<div className={css(myStyles.detailName)} styleName="each-detail-name">{name} | </div>
				<div className={css(myStyles.detailValue)} styleName="each-detail-value">{value}</div>
				<div styleName="each-detail-info">
					<InfoComponent
						tooltipText={infoDesc}
						alignTooltipKey="RIGHT"
					/>
				</div>
			</div>
		);
	}
	const myStyles = getSkin(props.skinGuide);
	const storyDetails = props.stories.storyList.find((eachStory) => {
		return eachStory.id === props.userState.selectedStoryId;
	});
	const userStoryDetails = props.userStories.userStoryList.find((eachUserStory) => {
		return eachUserStory.storyId === props.userState.selectedStoryId;
	});

	const featureDetails = props.features.featuresList.find((eachFeature) => {
		return eachFeature.featureId === storyDetails.featureId;
	});

	let blockerDetails = null;
	let blockerActionsList = [];

	if (
		checkIfPresent(userStoryDetails.blockerId)
		&& userStoryDetails.blockerId !== null
	) {
		blockerDetails = props.userBlockers.blockerList.find((eachBlocker) => {
			return userStoryDetails.blockerId === eachBlocker.id
		});

		const blockerActionsArray = blockerDetails.actions;
		const blockerActionsObj = _.keyBy(blockerActionsArray, 'actionId');

		blockerActionsList = props.actions.actionsList.filter(
			eachAction => blockerActionsObj[eachAction.id]
		);
	}

	const renderFeatureImage = (feature) => {
		if (checkIfPresent(feature.imageKey)) {
			return <img alt="feature" styleName="feature-image" src={props.getImage(feature.imageKey)} />;
		}

		return <img alt="feature" styleName="feature-image" src={props.getImage('IMG_DEFAULT_FEATURE')} />;
	}

	// blockerActionsList = props.actions.actionsList;

	return (
		<div
			styleName="story-popup-container"
			className={css(myStyles.storyPopupContainer)}
			onClick={onClickCard}
		>
			<div styleName="header-container">
				<div className={css(myStyles.headerBackground)} styleName="header-background-container"></div>
				<div styleName="header-content-container">
					<div styleName="header-details-container">
						<div className={css(myStyles.storyName)} styleName="story-name">
							{props.getLabel(storyDetails.name)}
						</div>
						<div styleName="story-details">
							{
								checkIfPresent(storyDetails.storyPoint)
									? renderDetail(
										props.getLabel('label_story_point'),
										storyDetails.storyPoint,
										props.getLabel(storyDetails.storyPointDescription)
									)
									: null
							}
							{
								checkIfPresent(userStoryDetails.storyPriority)
									? renderDetail(
										props.getLabel('label_task_priority'),
										userStoryDetails.storyPriority,
										props.getLabel('label_task_priority_help_text')
									)
									: null
							}
						</div>
					</div>
					<div styleName="close-container">
						<div styleName="close-icon" onClick={closePopup}>
							<Close />
						</div>
					</div>
				</div>
			</div>
			<div styleName="content-container">
				<div styleName={props.userState.currentSprintState !== 1 ? "story-description-container" : "story-description-container-full"}>
					<div className={css(myStyles.descHeading)} styleName="story-description-heading">
						{props.getLabel('label_description')}
					</div>
					<div className={css(myStyles.descContent)} styleName="story-description-content">
						{props.getLabel(storyDetails.description)}
					</div>
					<div className={css(myStyles.featureDescHeading)} styleName="feature-description-heading">
						{renderFeatureImage(featureDetails)}
						{props.getLabel(featureDetails.name + "_caps").includes("label") ? props.getLabel(featureDetails.name) : props.getLabel(featureDetails.name  + "_caps")}
					</div>
					<div className={css(myStyles.featureDescContent)} styleName="feature-description-content">
						{props.getLabel(featureDetails.description)}
					</div>
					{
						props.userState.currentSprintState === 1
							? <div
								styleName="selection-container"
							>
								<div
									className={isCardSelected() ? css(myStyles.selectionContainer, myStyles.selectionBoxShadow) : css(myStyles.selectionContainer)}
									styleName="selection-content"
									onClick={() => { onCardSelectClick(storyDetails) }}
								>
									<div styleName="checkbox-container">
										{
											isCardSelected()
												? <SelectedTaskCheckBox />
												: <AddTaskCheckBox />
										}
									</div>
									<div className={css(myStyles.selectionText)} styleName="text-container">
										{
											isCardSelected()
												? props.getLabel('label_story_is_selected')
												: props.getLabel('label_select_this_story')
										}
										{}
									</div>
								</div>
							</div>
							: null
					}
				</div>
				{
					checkIfPresent(blockerDetails)
						? <div className={css(myStyles.storyHistoryContainer)}
							styleName={props.userState.currentSprintState !== 1 ? "story-history-container" : "story-history-container-full"}
						>
							{/* <div className={css(myStyles.descHeading)} styleName="story-history-heading">
								{props.getLabel('label_history')}
							</div> */}
							<div styleName="story-history-content">
								<StoryHistoryItem
									sprintNumber={blockerDetails.sprintNumber}
									sprintDay={blockerDetails.sprintDay}
									type="BLOCKER"
									name={props.getLabel(blockerDetails.name)}
									desc={props.getLabel(blockerDetails.description)}
								/>
							</div>
						</div>
						: null
				}
				{
					checkIfPresent(blockerDetails) && props.userState.currentSprintState !== 1
						? <div styleName="story-actions-container">
							<ActionList
								{...props}
								actionsList={blockerActionsList}
								isActionsFromStoryPopup={true}
							/>
						</div>
						: null
				}
			</div>
		</div>
	);
}

export default applyWrappers(StoryPopup, styles);