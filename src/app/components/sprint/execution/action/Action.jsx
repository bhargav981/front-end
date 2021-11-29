import React, { useState, useEffect, useRef } from 'react';
import styles from './action.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import ActionOptionsPopover from 'components/sprint/execution/actionOptionsPopover';
import { actionIds } from 'config/actions';

import TeamLunch from 'svgComponents/actions/teamLunch';
import Standup from 'svgComponents/actions/standup';
import MarketPulseSurvey from 'svgComponents/actions/marketPulseSurvey';
import RebuildFeature from 'svgComponents/actions/rebuildFeature';
import ReplanSprint from 'svgComponents/actions/replanSprint';
import Retrospect from 'svgComponents/actions/retrospect';
import TeamMotivationSurvey from 'svgComponents/actions/teamMotivationSurvey';
import UpdatePrd from 'svgComponents/actions/updatePrd';
import UserFeedback from 'svgComponents/actions/userFeedback';
import UserResearch from 'svgComponents/actions/userResearch';
import Training from 'svgComponents/actions/training';
import MeetTheTeam from 'svgComponents/actions/meetTheTeam';
import Mom from 'svgComponents/actions/mom';
import TalkOnAgile from 'svgComponents/actions/talkOnAgile';

const Action = (props) => {

	const myRef = useRef(null);
	const [isActionOnHover, setIsActionOnHover] = useState(false);

	let isCurrentActionSelected = props.uiState.showActionOptionPopover
		&& props.uiState.selectedActionId === props.action.id;

	if (props.uiState.showOverlay
		&& props.uiState.overlayComponent === 'STORY_POPUP'
	) {
		isCurrentActionSelected &= props.isActionsFromStoryPopup;
	}

	useEffect(() => {
		if (isCurrentActionSelected) {
			document.addEventListener('mousedown', closeOpenPopover, false);
		} else {
			document.removeEventListener('mousedown', closeOpenPopover, false);
		}
		return () => {
			document.removeEventListener('mousedown', closeOpenPopover, false);
		}
	});

	const closeOpenPopover = (e) => {
		if (myRef.current.contains(e.target)) {
			return;
		}
		props.setUiState({
			showActionOptionPopover: false,
			selectedActionId: null
		});
	}

	const getLatestPrdId = () => {
		let selectedPrdId = props.userPrds.selectedPrdId;

		if (!selectedPrdId && props.userPrds.userPrdsList.length > 0) {
			selectedPrdId = props.userPrds.userPrdsList[
				props.userPrds.userPrdsList.length - 1
			].prdId;
		}

		if (!selectedPrdId) {
			return null;
		}

		return selectedPrdId;
	}

	const myStyles = getSkin(props.skinGuide);
	const skin = props.skinGuide.globalProfiles.palette;

	let selectedActionOptions = props.actions.actionOptionsList.filter(actionOption =>
		actionOption.actionId === props.action.id
	);

	if (props.action.id === actionIds.UPDATE_PRD) {
		const updatePrdActionOption = selectedActionOptions[0];
		selectedActionOptions = [];

		const latestPrdId = getLatestPrdId();

		let prdsList = props.prds.prdsList;

		if (latestPrdId) {
			prdsList = prdsList.filter(prd => prd.id > latestPrdId);
		}

		prdsList.map(prd => {
			selectedActionOptions.push({
				...updatePrdActionOption,
				...prd
			});
			return 1;
		})
	}

	const renderActionPopover = () => {
		if (isCurrentActionSelected) {
			return (
				<ActionOptionsPopover
					{...props}
					selectedActionOptions={selectedActionOptions}
					setIsActionOnHover={setIsActionOnHover}
					isActionsFromStoryPopup={props.isActionsFromStoryPopup}
				/>
			);
		}
		return null;
	}

	const openActionOptionPopover = () => {
		const { tutorial } = props
		if (tutorial && tutorial.isRunning) {
			props.endTutorial()
		}

		props.setUiState({
			showActionOptionPopover: true,
			selectedActionId: props.action.id
		});
	}

	const renderActionImage = () => {
		let color = skin.secondaryColor;
		let secondaryColor = '#FF5B7F';

		if (isCurrentActionSelected || isActionOnHover) {
			color = skin.white;
			secondaryColor = skin.white;
		}

		switch (props.action.imageKey) {
			case 'team_lunch':
				return <TeamLunch svgId='team_lunch' color={color} secondaryColor={secondaryColor} />

			case 'standup':
				return <Standup svgId='standup' color={color} secondaryColor={secondaryColor} />

			case 'market_pulse_survey':
				return <MarketPulseSurvey svgId='market_pulse_survey' color={color} secondaryColor={secondaryColor} />

			case 'rebuild_feature':
				return <RebuildFeature svgId='rebuild_feature' color={color} secondaryColor={secondaryColor} />

			case 'replan_sprint':
				return <ReplanSprint svgId='replan_sprint' color={color} secondaryColor={secondaryColor} />

			case 'retrospect':
				return <Retrospect svgId='retrospect' color={color} secondaryColor={secondaryColor} />

			case 'team_motivation_survey':
				return <TeamMotivationSurvey svgId='team_motivation_survey' color={color} secondaryColor={secondaryColor} />

			case 'update_prd':
				return <UpdatePrd svgId='update_prd' color={color} secondaryColor={secondaryColor} />

			case 'user_feedback':
				return <UserFeedback svgId='user_feedback' color={color} secondaryColor={secondaryColor} />

			case 'user_research':
				return <UserResearch svgId='user_research' color={color} secondaryColor={secondaryColor} />

			case 'training':
				return <Training svgId='training' color={color} secondaryColor={secondaryColor} />

			case 'meet_the_team':
				return <MeetTheTeam svgId='meet_the_team' color={color} secondaryColor={secondaryColor} />

			case 'mom':
				return <Mom svgId='mom' color={color} secondaryColor={secondaryColor} />

			case 'talk_on_agile':
				return <TalkOnAgile svgId='talk_on_agile' color={color} secondaryColor={secondaryColor} />

			default:
				return <UserFeedback svgId='user_feedback' color={color} secondaryColor={secondaryColor} />
		}
	}

	let actionImageContainerClass = css(myStyles.actionImageContainer);
	if (isCurrentActionSelected) {
		actionImageContainerClass = css(myStyles.selectedActionImageContainer);
	} else if (isActionOnHover) {
		actionImageContainerClass = css(myStyles.hoverActionImageContainer);
	}

	return (
		<div ref={myRef} styleName={selectedActionOptions.length === 0 ? "action-wrapper disable-action" : "action-wrapper"}
			onMouseOver={() => { setIsActionOnHover(true) }}
			onMouseOut={() => { setIsActionOnHover(false) }}
		>
			<div onClick={openActionOptionPopover} styleName="action-container" className={css(myStyles.actionContainer)}>
				<div className={actionImageContainerClass} styleName="action-image-container">
					{renderActionImage()}
				</div>
				<div styleName="action-name" className={css(myStyles.actionName)}>{props.getLabel(props.action.name)}</div>
			</div>
			<div>
				{renderActionPopover()}
			</div>
		</div>
	);
}

export default applyWrappers(Action, styles);