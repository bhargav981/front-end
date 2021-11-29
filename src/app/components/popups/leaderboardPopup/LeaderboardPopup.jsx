import React from 'react';
import styles from './leaderboardPopup.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import Close from 'svgComponents/close';
import { getUserMetricsForMetricsKey } from 'util/utilFunctions';
import HollowButton from 'commonComponents/buttons/hollowButton';

const LeaderboardPopup = (props) => {

	const closePopup = () => {
		props.setUiState({
			showOverlay: false,
			showOverlayOverWalkthrough: false,
			overlayComponentType: '',
			highlightDesktopHeader: false,
			highlightMetricsHeader: false,
			overlayComponent: ''
		});
	}

	let refreshButtonText = props.getLabel('label_refresh');
	let disableButton = false;
	if (props.leaderboard.isLeaderboardFetching) {
		refreshButtonText = props.getLabel('label_refreshing');
		disableButton = true;
	}

	const myStyles = getSkin(props.skinGuide);

	const renderTableBody = () => {
		return props.leaderboard.usersList.map(user => {
			const daysRemaining = props.userState.totalDays - user.currentDay < 0 ? 0 : props.userState.totalDays - user.currentDay;
			const mvpUserMetrics = getUserMetricsForMetricsKey(props.metrics.metricsList, user.metrics, 'MVP');
			// eslint-disable-next-line
			const mvpValue = mvpUserMetrics && mvpUserMetrics.value || 0;

			let rowClass = '';
			let cellClass = css(myStyles.value);
			if (user.isSelf) {
				rowClass = css(myStyles.currentUser);
				cellClass = css(myStyles.currentUserValue);
			}

			return (
				<div key={user.uliId}>
					<div className={rowClass} styleName="table-row">
						<div className={cellClass} styleName="position position-body">{user.rank}</div>
						<div className={cellClass} styleName="username">{`${user.userName}`}</div>
						<div className={cellClass} styleName="days-remaining">{`${daysRemaining} ${props.getLabel('label_days')}`}</div>
						<div className={cellClass} styleName="mvp mvp-body">{`${(mvpValue.toFixed(1) * 10) / 10}%`}</div>
					</div>
					<div className={css(myStyles.seperationLine)} styleName="seperation-line"></div>
				</div>
			);
		});
	}

	return (
		<div styleName="leaderboard-popup-container" className={css(myStyles.leaderboardPopupContainer)}>
			<div styleName="header-container">
				<div className={css(myStyles.headerBackground)} styleName="header-background-container"></div>
				<div className={css(myStyles.title)} styleName="title">
					{props.getLabel('label_leaderboard')}
				</div>
				<div styleName="close-icon" onClick={closePopup}>
					<Close />
				</div>
			</div>
			<div className={css(myStyles.refreshContainer)} styleName="refresh-container">
				<HollowButton
					textLabel={refreshButtonText}
					clickFunction={props.fetchLeaderboard}
					disableButton={disableButton}
					buttonStyle={{ width: '100px' }}
				/>
			</div>
			<div styleName="content">
				<div styleName="background-image">
					<img width="100%" height="100%" src={props.getImage('IMG_LEADERBOARD_BACKGROUND')} alt="" />
				</div>
				<div styleName="table-container">
					<div styleName="table-header-container">
						<div className={css(myStyles.headerTitle)} styleName="position position-header">{props.getLabel('label_position')}</div>
						<div className={css(myStyles.headerTitle)} styleName="username">{props.getLabel('label_username')}</div>
						<div className={css(myStyles.headerTitle)} styleName="days-remaining">{props.getLabel('label_days_remaining')}</div>
						<div className={css(myStyles.headerTitle)} styleName="mvp">{props.getLabel('label_mvp_alignment')}</div>
					</div>
					<div styleName="table-body-container">
						{renderTableBody()}
					</div>
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(LeaderboardPopup, styles);