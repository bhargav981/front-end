import React from 'react';
import styles from './overlay.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import ActionResponseContainer from 'containers/ActionResponseContainer';
import EventContainer from 'containers/EventContainer';
import EndSprintConfirmation from 'components/popups/endSprintConfirmation';
import AutofillSprintConfirmation from 'components/popups/autofillSprintConfirmation';
import ReplanSprintConfirmation from 'components/popups/replanSprintConfirmation';
import ReplanSprintHelpPopup from 'components/popups/replanSprintHelpPopup';
import AddTaskConfirmation from 'components/popups/addTaskConfirmation';
import StoryPopupContainer from 'containers/StoryPopupContainer';
import SimMVPPopupContainer from 'containers/SimMVPPopupContainer';
import SprintReportPopupContainer from 'containers/SprintReportPopupContainer';
import ProductLaunchPopup from 'components/popups/productLaunchPopup'
import LeaderboardContainer from 'containers/LeaderboardContainer';
import KnowYourTeam from 'components/popups/knowYourTeam'
import KnowYourCustomers from 'components/popups/knowYourCustomers'
import ActionLoader from 'commonComponents/actionLoader';
import EventLoader from 'commonComponents/eventLoader';
import IntroPopup from 'components/intro/introPopup';
import HistoryListContainer from 'containers/HistoryListContainer'
import analyticsUtil from 'util/segmentUtil';
import { identity } from 'lodash';

const Overlay = (props) => {

	const myStyles = getSkin(props.skinGuide);

	const closePopup = (e) => {
		e.stopPropagation();
		if (
			props.uiState.overlayComponent === 'STORY_POPUP'
		) {
			props.updateUserState({
				selectedStoryId: null
			});
			props.setUiState({
				showOverlay: false,
				overlayComponentType: '',
				highlightDesktopHeader: true,
				highlightMetricsHeader: false,
				overlayComponent: ''
			});
		}
	}

	const renderOverlayComponent = () => {
		console.log(props.uiState.overlayComponent)
		switch (props.uiState.overlayComponent) {
			case 'ACTION_REPONSE_COMPONENT':
				return <ActionResponseContainer />

			case 'EVENT_COMPONENT':
				return <EventContainer />

			case 'END_SPRINT_CONFIRMATION':
				return <EndSprintConfirmation {...props} />

			case 'AUTOFILL_SPRINT_CONFIRMATION':
				return <AutofillSprintConfirmation {...props} />

			case 'REPLAN_SPRINT_CONFIRMATION':
				return <ReplanSprintConfirmation {...props} />

			case 'STORY_POPUP':
				analyticsUtil.track("SIDEBAR_POPUP_OPEN",{ popup: "STORY_POPUP" });				
				return <StoryPopupContainer />;

			case 'SIM_MVP_POPUP':
				analyticsUtil.track("SIDEBAR_POPUP_OPEN",{ popup: "SIM_MVP_POPUP" });				
				return <SimMVPPopupContainer />;

			case 'PRODUCT_LAUNCH_CONFIRMATION':
				return <ProductLaunchPopup {...props} />

			case 'LEADERBOARD':
				analyticsUtil.track("SIDEBAR_POPUP_OPEN",{ popup: "LEADERBOARD_POPUP" });				
				return <LeaderboardContainer />

			case 'INTRO':
				analyticsUtil.track("SIDEBAR_POPUP_OPEN",{ popup: "INTRO_POPUP" });				
				return <IntroPopup {...props} />

			case 'KNOW_YOUR_TEAM':
				analyticsUtil.track("SIDEBAR_POPUP_OPEN",{ popup: "TEAM_POPUP" });				
				return <KnowYourTeam {...props} />

			case 'KNOW_YOUR_CUSTOMERS':
				analyticsUtil.track("SIDEBAR_POPUP_OPEN",{ popup: "CUSTOMERS_POPUP" });				
				return <KnowYourCustomers {...props} />

			case 'ACTION_LOADER':
				return <ActionLoader />

			case 'EVENT_LOADER':
				return <EventLoader {...props} />

			case 'SPRINT_REPORT_POPUP':
				analyticsUtil.track("SIDEBAR_POPUP_OPEN",{ popup: "SPRINT_REPORT_POPUP" });				
				return <SprintReportPopupContainer />

			case 'HISTORY_POPUP':
				analyticsUtil.track("SIDEBAR_POPUP_OPEN",{ popup: "HISTORY_POPUP" });				
				return <HistoryListContainer />

			case 'REPLAN_SPRINT_HELP_POPUP':
				analyticsUtil.track("SIDEBAR_POPUP_OPEN",{ popup: "REPLAN_SPRINT_POPUP" });
				return <ReplanSprintHelpPopup {...props} />

			case 'ADD_TASK_CONFIRMATION_POPUP':
				analyticsUtil.track("SIDEBAR_POPUP_OPEN",{ popup: "TASK_CONFIRMATION_POPUP" });
				return <AddTaskConfirmation {...props} />

			default:
				return (
					<div>Render your component here</div>
				);
		}
	}

	const renderComponent = () => {
		switch (props.uiState.overlayComponentType) {
			case 'BOTTOM':
				return (
					<div
						styleName="complete-container bottom-container"
						className={css(myStyles.completeContainer)}
					>
						<div styleName="bottom-container-component" className={css(myStyles.bottomContainerComponent)}>
							{renderOverlayComponent()}
						</div>
					</div>
				);
			case 'RIGHT':
				return (
					<div
						styleName="complete-container right-container"
						className={css(myStyles.completeContainer)}
					>
						<div styleName="right-container-component" className={css(myStyles.rightContainerComponent)}>
							{renderOverlayComponent()}
						</div>
					</div>
				);
			case 'CENTER':
				return (
					<div
						styleName="complete-container center-container"
						className={css(myStyles.completeContainer)}
						onClick={(e) => { closePopup(e); }}
					>
						{renderOverlayComponent()}
					</div>
				);
			default:
				return null;
		}
	}

	return renderComponent();
}

export default applyWrappers(Overlay, styles);