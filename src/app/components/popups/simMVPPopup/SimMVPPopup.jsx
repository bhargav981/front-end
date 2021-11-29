import React from 'react';
import styles from './simMVPPopup.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import Close from 'svgComponents/close';
import TaskCard from 'commonComponents/taskCard';
import cardState from 'constants/cardState/cardState';
import CustomerLike from 'svgComponents/customerLike';

const SimMVPPopup = (props) => {

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

	const myStyles = getSkin(props.skinGuide);
	const skin = props.skinGuide.globalProfiles.palette;

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
			eachUserStory.progress == storyDetails.storyPoint
			&& eachUserStory.storyStatus == 4
		) {
			statusStories.push(
				<TaskCard
					storyDetails={storyDetails}
					userStoryDetails={eachUserStory}
					featureDetails={currentFeature}
					taskCount={props.userState.taskCount}
					cardState={cardState.POPUP_STATE}
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
		<div
			styleName="mvp-popup-container"
			className={css(myStyles.mvpPopupContainer)}
			onClick={onClickCard}
		>
			<div styleName="header-container">
				<div className={css(myStyles.headerBackground)} styleName="header-background-container"></div>
				<div styleName="header-content-container">
					<div styleName="header-details-container">
						<div styleName="heading-content">
							<div styleName="heading-text" className={css(myStyles.headingText)}>{props.getLabel('label_mvp_popup_heading')}</div>
							<div styleName="correct-help-container">
								<div styleName="correct-help-img">
									<CustomerLike />
								</div>
								<div styleName="correct-help-text" className={css(myStyles.helpText)}>{props.getLabel('label_mvp_popup_correct_user_stories')}</div>
							</div>
						</div>
						<div styleName="desc-content" className={css(myStyles.descText)}>
							{props.getLabel('label_mvp_popup_desc')}
						</div>
					</div>
					<div styleName="close-container">
						<div styleName="close-icon" onClick={closePopup}>
							<Close backgroundColor={skin.grayColor4} />
						</div>
					</div>
				</div>
			</div>
			<div className={css(myStyles.contentContainer)} styleName="content-container">
				<div styleName="cards-container">
					{statusStories}
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(SimMVPPopup, styles);