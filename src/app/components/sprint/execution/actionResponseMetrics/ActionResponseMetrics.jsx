import React from 'react';
import styles from './actionResponseMetrics.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import IncrementArrow from 'svgComponents/incrementArrow';
import DecrementArrow from 'svgComponents/decrementArrow';
import FlagIcon from 'svgComponents/flagIcon';
import SprintMetrics from './sprintMetrics';
import { getUserMetricsForMetricsKey } from 'util/utilFunctions';

const ActionResponseMetrics = (props) => {

	const getGlobalMetricsValue = (key, defaultValue = 0, defaultDiff = 0) => {
		const individualUserMetrics = getUserMetricsForMetricsKey(
			props.metrics.metricsList,
			props.userMetrics.userMetricsList,
			key
		);

		let value = defaultValue;
		let diff = defaultDiff;

		if (individualUserMetrics) {
			value = individualUserMetrics.value;
			diff = individualUserMetrics.diff || defaultDiff;
		}

		return { value, diff };
	}

	const getMetricsvalue = (key, defaultValue = 0, defaultDiff = 0) => {
		const individualUserMetrics = getUserMetricsForMetricsKey(
			props.metrics.metricsList,
			props.latestUserActionResponse.userMetrics,
			key
		);

		let value = defaultValue;
		let diff = defaultDiff;

		if (individualUserMetrics) {
			value = individualUserMetrics.value;
			diff = individualUserMetrics.diff || defaultDiff;
		}

		return { value, diff };
	}

	const skillDefaultValue = getGlobalMetricsValue('SKILL').value;
	const skillMetricsValue = getMetricsvalue('SKILL', skillDefaultValue);
	const teamSkill = skillMetricsValue.value;
	const teamSkillDiff = skillMetricsValue.diff;

	const moraleDefaultValue = getGlobalMetricsValue('MORALE').value;
	const moraleMetricsValue = getMetricsvalue('MORALE', moraleDefaultValue);
	const teamMorale = moraleMetricsValue.value;
	const teamMoraleDiff = moraleMetricsValue.diff;

	const cSatDefaultValue = getGlobalMetricsValue('CS').value;
	const cSatMetricsValue = getMetricsvalue('CS', cSatDefaultValue);
	const cSat = cSatMetricsValue.value;
	const cSatDiff = cSatMetricsValue.diff;

	const mvpMetricsValue = getGlobalMetricsValue('MVP');
	const mvpValue = mvpMetricsValue.value;

	const budgetDefaultValue = getGlobalMetricsValue('BUDGET').value;
	const budgetDefaultDiff = getGlobalMetricsValue('BUDGET').diff;
	const budgetMetricsValue = getMetricsvalue('BUDGET', budgetDefaultValue, budgetDefaultDiff);
	const budget = budgetMetricsValue.value;
	const budgetDiff = budgetMetricsValue.diff;

	const totalDays = props.userState.totalDays;
	const daysRemaining = totalDays - props.userState.currentDay;
	const previousDay = props.latestUserActionResponse.sprintDay || 1;
	const daysRemainingDiff = props.userState.currentSprintDay - previousDay;

	const myStyles = getSkin(props.skinGuide);

	const getTagBGClass = (changeType) => {
		switch (changeType) {
			case 'positive':
				return 'greenTag';

			case 'negative':
				return 'redTag';

			default:
				return 'greenTag';
		}
	}

	const renderArrow = (changeType) => {
		switch (changeType) {
			case 'positive':
				return (
					<div styleName="arrow-container">
						<IncrementArrow />
					</div>
				);

			case 'negative':
				return (
					<div styleName="arrow-container">
						<DecrementArrow />
					</div>
				);

			default:
				return null;
		}
	}

	const renderMVP = (title, value) => {
		return (
			<div className={css(myStyles.leftMetricContainer)} styleName="left-metric-container">
				<div styleName="mvp-title-value-container">
					<div className={css(myStyles.metricTitle)} styleName="metric-title">{props.getLabel(title)}</div>
					<div className={css(myStyles.metricValue)} styleName="mvp-value">{value}</div>
				</div>
				<div styleName="left-metrics-value-change-container">
					<div styleName="sim-mvp-progress-bar-container" className={css(myStyles.mvpProgressBarContainer)}>
						<div
							style={{
								width: `${value}`
							}}
							styleName="sim-mvp-progress-bar"
							className={css(myStyles.mvpProgressBar)}
						></div>
					</div>
				</div>
			</div>
		);
	}

	const renderTag = (changeValue, changeType) => {
		if (changeType == 'neutral') {
			return null;
		}

		const tagBGClass = getTagBGClass(changeType);

		return (
			<div
				className={css(myStyles.metricChange, myStyles[tagBGClass])}
				styleName="metrics-change"
			>
				{renderArrow(changeType)}
				<span>{changeValue}</span>
			</div>
		);
	}

	const renderRightMetrics = (title, value, changeValue, changeType) => {
		return (
			<div className={css(myStyles.rightMetricLeftBorder)} styleName="right-metric-container">
				<div className={css(myStyles.metricTitle)} styleName="metric-title">{props.getLabel(title)}</div>
				<div styleName="right-metrics-value-change-container">
					<div className={css(myStyles.metricValue)} styleName="metrics-value">{value}</div>
					{renderTag(changeValue, changeType)}
				</div>
			</div>
		);
	}

	const renderGameMetrics = (title, value, changeValue, changeType, rightBorder = false) => {
		return (
			<div className={rightBorder ? css(myStyles.gameMetricContainerRightBorder) : css(myStyles.gameMetricContainer)} styleName="game-metric-container">
				<div className={css(myStyles.metricTitle)} styleName="metric-title">{props.getLabel(title)}</div>
				<div styleName="left-metrics-value-change-container">
					<div styleName="metrics-image">
						<FlagIcon />
					</div>
					<div className={css(myStyles.metricValue)} styleName="metrics-value">{value}</div>
					{renderTag(changeValue, changeType)}
				</div>
			</div>
		);
	}

	const renderBottomMetrics = () => {
		return ([
			renderMVP(
				'label_mvp_alignment',
				`${mvpValue}%`
			),
			renderRightMetrics(
				'label_budget_remaining',
				`$${budget}`,
				`$${budgetDiff >= 0 ? budgetDiff : -budgetDiff}`,
				budgetDiff > 0 ? 'positive' : budgetDiff < 0 ? 'negative' : 'neutral'
			),
			renderRightMetrics(
				'label_days_remaining',
				`${props.getLabel('label_number_days',"",{DAY_NUMBER:daysRemaining})}`,
				`${props.getLabel('label_number_days',"",{DAY_NUMBER:daysRemainingDiff})}`,
				'negative'
			)
		]);
	}

	const renderTopMetrics = () => {
		return ([
			<SprintMetrics
				latestActionOption={props.latestActionOption}
				latestUserActionResponse={props.latestUserActionResponse}
				userState={props.userState}
				prds={props.prds}
				userPrds={props.userPrds}
			/>,
			<div className={css(myStyles.gameMetricsContainer)} styleName="game-metrics-container">
				{renderGameMetrics(
					'label_team_skill',
					`${teamSkill}%`,
					`${teamSkillDiff >= 0 ? teamSkillDiff : -teamSkillDiff}`,
					teamSkillDiff > 0 ? 'positive' : teamSkillDiff < 0 ? 'negative' : 'neutral',
					true
				)}
				{renderGameMetrics(
					'label_team_morale',
					`${teamMorale}%`,
					`${teamMoraleDiff >= 0 ? teamMoraleDiff : -teamMoraleDiff}`,
					teamMoraleDiff > 0 ? 'positive' : teamMoraleDiff < 0 ? 'negative' : 'neutral',
					true
				)}
				{renderGameMetrics(
					'label_csat',
					`${cSat}%`,
					`${cSatDiff >= 0 ? cSatDiff : -cSatDiff}`,
					cSatDiff > 0 ? 'positive' : cSatDiff < 0 ? 'negative' : 'neutral',
					false
				)}
			</div>
		]);
	}

	return (
		<div styleName="metrics-container">
			<div className={css(myStyles.leftMetricsContainer)} styleName="top-metrics-container">
				{renderTopMetrics()}
			</div>
			<div styleName="bottom-metrics-container">
				<div className={css(myStyles.bottomMetricsWrapper)} styleName="bottom-metrics-wrapper">
					{renderBottomMetrics()}
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(ActionResponseMetrics, styles);