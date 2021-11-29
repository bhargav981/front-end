import React from 'react';
import styles from './metric.module.sass';
// import getSkin from './skin.js';
// import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import { getUserMetricsForMetricsKey } from 'util/utilFunctions';
import UpArrow from 'svgComponents/upArrow';
import DownArrow from 'svgComponents/downArrow';
import InfoComponent from 'commonComponents/infoComponent';
import { checkIfPresent, roundValue } from 'util/utilFunctions';

const Metric = (props) => {
	// const {mvp, teamMorale,teamSkill,customerSatisfaction,budget, quality} = props.userMetrics;
	const { userState, metrics, userMetrics, selected, getLabel } = props;
	const big = (name, met, defaultMetrics) => {
		// const change = getChange(met)
		const maxWidht = 380;
		const nowWidth = (met.currentSprintValue / 100) * maxWidht;
		const arrow = met.changeInMetricValue < 0
			? <DownArrow svgColor={"#D63228"} />
			: <UpArrow svgColor={met.changeInMetricValue == 0 ? "rgba(0, 0, 0, 0.4)" : "#36B496"} />;
		const desc = defaultMetrics.find((m) => m.metricsId == met.metricsId).description;
		return (
			<div styleName="big">
				<div styleName="name-container">
					<div styleName="name">
						{props.getLabel('label_mvp_alignment')}
					</div>
					<InfoComponent
						tooltipText={props.getLabel(desc)}
						alignTooltipKey="RIGHT"
					/>
				</div>
				<div styleName="completion">
					{roundValue(met.currentSprintValue, 1)}%
				</div>
				<div styleName="b-change">
					<div styleName="arrow">
						{arrow}
					</div>
					{`${roundValue(met.changeInMetricValue, 1)} ${getLabel("label_report_in_sprint")} ${selected}`}
				</div>
				<div styleName="graph-box">
					<div styleName="graph"></div>
					<div styleName="graph-overlay" style={{ width: nowWidth }}></div>
				</div>
			</div>
		)
	}

	const getClassForMetric = (changeInMetricValue, borderColorChangeFlag) => {
		if(!borderColorChangeFlag) {
			return "small";
		}
		if(changeInMetricValue < 50) {
			return "small border-red";
		} else if (changeInMetricValue >= 50) {
			return "small border-green";
		}
		return "small";
	}

	const small = (name, met, metricsBottom, postText, ceil, defaultMetrics, borderColorChangeFlag, divId) => {
		// const change = getChange(met)
		const arrow = met.changeInMetricValue < 0
			? <DownArrow svgColor={"#D63228"} />
			: <UpArrow svgColor={met.changeInMetricValue == 0 ? "rgba(0, 0, 0, 0.4)" : "#36B496"} />;
		const metric = defaultMetrics.find((m) => m.metricsId == met.metricsId);
		
		return (
			<div id={divId} styleName={metricsBottom ? "small mb" : getClassForMetric(met.currentSprintValue, borderColorChangeFlag)}>
				<div styleName="name-container">
				<div styleName="name">
						{props.getLabel(metric.name)}
					</div>
					<InfoComponent
						tooltipText={props.getLabel(metric.description)}
						alignTooltipKey="RIGHT"
					/>
				</div>
				{
					checkIfPresent(met.currentSprintValue)
						? <div styleName="completion">
							{met.currentSprintValue && ceil ? Math.ceil((met.currentSprintValue)) : roundValue(met.currentSprintValue, 1)}{postText}
						</div>
						: null
				}

				{
					metricsBottom
						? <div styleName="b-change">
							<div styleName="arrow">
								{arrow}
							</div>
							{`${Math.abs(Math.floor(met.changeInMetricValue))} ${getLabel("label_report_in_sprint")} ${selected}`}
						</div>
						: null
							// (
							// 	<div styleName="b-change-small">
							// 		<div styleName="arrow-small">
							// 			{arrow}
							// 		</div>
							// 		{Math.abs(Math.floor(met.changeInMetricValue))}
							// 	</div>
							// )
				}
			</div>
		)
	}


	const resource = (name, label, pre, score, post, helpText) => {
		return (
			<div styleName="re-box">
				<div styleName="re-name-container">
					<div styleName="re-name">
						{props.getLabel(label)}   
					</div>
					<InfoComponent
						tooltipText={props.getLabel(helpText)}
						alignTooltipKey="RIGHT"
					/>
				</div>
				<div styleName="re-completion">
					{pre}{score}{post}
				</div>
			</div>
		)
	}
	const getMetricsvalue = (key, defaultValue = 0) => {
		const individualUserMetrics = getUserMetricsForMetricsKey(
			metrics.metricsList,
			userMetrics,
			key
		);

		if (individualUserMetrics) {
			return individualUserMetrics;
		}

		return {};
	}

	const teamMorale = getMetricsvalue('MORALE');
	const customerSatisfaction = getMetricsvalue('CS')
	const budget = getMetricsvalue('BUDGET')
	const teamSkill = getMetricsvalue('SKILL')
	const mvp = getMetricsvalue('MVP')
	const velocity = getMetricsvalue('VELOCITY')
	const accuracy = getMetricsvalue('ACCURACY')
	const efficiency = getMetricsvalue('EFFICIENCY')
	let daysRemaining = userState.totalDays - userState.currentDay;
	daysRemaining = daysRemaining < 0 ? 0 : daysRemaining;
	let daysRemainingAtSprint = props.sprintReport.firstSprintDay + userState.totalDaysInSprint >= userState.totalDays
		? 0
		: userState.totalDays - (props.sprintReport.firstSprintDay + userState.totalDaysInSprint);

	return (
		<div>
			<div styleName="big-box">
				{big("Product-customer fit", mvp, metrics.metricsList)}
			</div>
			<div styleName="small-boxes">
				{small("Velocity", velocity, false, "", true, metrics.metricsList, false, "metric-velocity")}
				{small("Accuracy", accuracy, false, "%", false, metrics.metricsList, true, "metric-accuracy")}
				{small("Efficiency", efficiency, false, "%", false, metrics.metricsList, true, "metric-efficiency")}
			</div>
			<div styleName="small-boxes">
				{small("Team Skill", teamSkill, true, "%", false, metrics.metricsList, false, "metric-skill")}
				{small("Team Morale", teamMorale, true, "%", false, metrics.metricsList, false, "metric-morale")}
				{small("Cust. Focus", customerSatisfaction, true, "%", false, metrics.metricsList, false, "metric-cust")}
			</div>
			<div styleName="met-name">{getLabel("label_resources")}</div>
			<div styleName="small-boxes">
				{resource("DAYS REMAINING", "label_days_remaining", "", daysRemainingAtSprint, ` ${getLabel("label_report_days")}`, 'label_report_daysremaining_helptext')}
				{resource("Budget remaining", "label_budget_remaining", "$", budget.currentSprintValue, "", 'label_report_budget_helptext')}
			</div>

		</div>
	)
}

export default applyWrappers(Metric, styles);