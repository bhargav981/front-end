import React from 'react';
import styles from './metricsHeader.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import SprintComponent from 'components/metricsHeader/sprintComponent';
import AllMetricComponent from 'components/metricsHeader/allMetricComponent';
import TeamMembers from 'components/metricsHeader/teamMembers';
import SprintReport from 'components/metricsHeader/sprintReport';
import Customers from 'components/metricsHeader/customers';
import History from 'components/metricsHeader/history';

const getMetricsHeaderConfig = (path) => {
	if (path.search('/introduction') === 0) {
		return {
			showSprints: false,
			showMetrics: false,
			showTeamAndCustomers: false,
			showHistory: false,
		}
	} else if (path.search('/planning') === 0) {
		return {
			showSprints: false,
			showMetrics: true,
			showTeamAndCustomers: true,
			showHistory: false,
			showBudget: true,
			showSkillMorale: false,
			showCS: false,
			showSprintReport: true
		}
	} else if (path.search('/execution') === 0) {
		return {
			showSprints: true,
			showMetrics: true,
			showTeamAndCustomers: true,
			showHistory: true,
			showBudget: true,
			showSkillMorale: true,
			showCS: true,
			showSprintReport: true
		};
	}
	return {
		showSprints: false,
		showMetrics: false,
		showTeamAndCustomers: true,
		showHistory: true,
	};
}

const MetricsHeader = (props) => {

	const headerConfig = getMetricsHeaderConfig(props.location.pathname);

	const myStyles = getSkin(props.skinGuide);
	return (
		<div
			styleName="metrics-header-container"
			className={css(myStyles.container)}
			style={{
				zIndex: props.uiState.highlightMetricsHeader ? 51 : 'auto'
			}}
		>
			<div styleName="metrics-header-content">
				<div styleName="content-left">
					{headerConfig.showSprints ? <SprintComponent {...props} /> : null}
				</div>
				<div styleName="content-middle">
					{headerConfig.showMetrics ? <AllMetricComponent {...props} headerConfig={headerConfig} /> : null}
					{headerConfig.showMetrics ? <div className={css(myStyles.vericalBar)} styleName="vertical-bar"></div> : null}
				</div>
				<div styleName="content-right">
					{headerConfig.showSprintReport && props.userSprintReports.sprintReportList.length > 0 ? <SprintReport {...props} /> : null}
					{headerConfig.showTeamAndCustomers ? <TeamMembers {...props} /> : null}
					{headerConfig.showTeamAndCustomers ? <Customers {...props} /> : null}
					{headerConfig.showHistory ? <History {...props} /> : null}
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(MetricsHeader, styles);