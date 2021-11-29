import React from 'react';
import styles from './desktopHeader.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import SimLogo from 'components/header/simLogo';
import SimUserProfile from 'components/header/simUserProfile';
import Timer from 'components/header/timer';
import SimObjectives from 'components/header/simObjectives';
import SimLeaderBoard from 'components/header/simLeaderBoard';
import SimMVP from 'components/header/simMVP';
import SimProgress from 'components/header/simProgress';

const getDesktopHeaderConfig = (path) => {

	if (path.search('/introduction') === 0) {
		return {
			showSimLogo: true,
			showTimeline: false,
			showMVPProgress: false,
			showLeaderBoard: false,
			showObjectives: false,
			showTimer: false,
			showUserProfile: true
		}
	} else if (path.search('/planning') === 0) {
		return {
			showSimLogo: true,
			showTimeline: true,
			showMVPProgress: true,
			showLeaderBoard: true,
			showObjectives: true,
			showTimer: true,
			showUserProfile: true
		}
	} else if (path.search('/execution') === 0) {
		return {
			showSimLogo: true,
			showTimeline: true,
			showMVPProgress: true,
			showLeaderBoard: true,
			showObjectives: true,
			showTimer: true,
			showUserProfile: true
		};
	}
	return {
		showSimLogo: true,
		showTimeline: false,
		showMVPProgress: false,
		showLeaderBoard: false,
		showObjectives: false,
		showTimer: false,
		showUserProfile: true
	};
}

const DesktopHeader = (props) => {

	const myStyles = getSkin(props.skinGuide);
	const headerConfig = getDesktopHeaderConfig(props.location.pathname);

	return (
		<div
			styleName="header-container"
			className={css(myStyles.headerContainer)}
			style={{
				zIndex: props.uiState.highlightDesktopHeader ? 52 : 'auto'
			}}
		>
			<div styleName="header-content">
				<div styleName="left-header">
					{headerConfig.showSimLogo ? <SimLogo {...props} /> : null}
				</div>
				<div styleName="middle-header">
					{headerConfig.showMVPProgress ? <SimMVP {...props} /> : null}
					{headerConfig.showTimeline ? <SimProgress {...props} /> : null}
				</div>
				<div styleName="right-header">
					{headerConfig.showLeaderBoard && props.userState.isLeaderboardEnabled ? <SimLeaderBoard {...props} /> : null}
					{headerConfig.showObjectives ? <SimObjectives {...props} /> : null}
					{headerConfig.showTimer && (props.userState.isTimerEnabled) ? <Timer {...props} /> : null}
					{headerConfig.showUserProfile ? <SimUserProfile {...props} /> : null}
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(DesktopHeader, styles);