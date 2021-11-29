import React, { useState, useEffect, useRef } from 'react';
import styles from './allMetricComponent.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import MetricComponent from 'components/metricsHeader/metricComponent';
import { getUserMetricsForMetricsKey } from 'util/utilFunctions';
import DownArrow from 'svgComponents/downArrow';
import { hexToRgbA } from 'util/styleUtil';
import _ from 'lodash';

const AllMetricComponent = (props) => {

	const [showSkillMoralePopover, setShowSkillMoralePopover] = useState(false);

	const myRef = useRef(null);

	useEffect(() => {
		if (showSkillMoralePopover) {
			document.addEventListener('mousedown', handleClick, false);
		} else {
			document.removeEventListener('mousedown', handleClick, false);
		}
		return () => {
			document.removeEventListener('mousedown', handleClick, false);
		}
	});

	const handleClick = (e) => {
		if (myRef.current.contains(e.target)) {
			//do nothing
			return;
		}
		setShowSkillMoralePopover(false);
	}

	const getMetricsvalue = (key, defaultValue = 0) => {
		const individualUserMetrics = getUserMetricsForMetricsKey(
			props.metrics.metricsList,
			props.userMetrics.userMetricsList,
			key
		);

		if (individualUserMetrics) {
			return individualUserMetrics.value;
		}

		return defaultValue;
	}

	const renderSkillMoralePopover = () => {
		const teamList = props.teamMembers.teamList;
		const roleList = _.groupBy(teamList, 'role');
		const skillMoraleDivs = Object.keys(roleList).map((eachRole) => {
			let skillTotal = 0;
			let moraleTotal = 0;
			let skillCount = 0;
			let moraleCount = 0;
			roleList[eachRole].map((eachActor) => {
				skillTotal = skillTotal + eachActor.skill;
				moraleTotal = moraleTotal + eachActor.morale;

				skillCount = skillCount + 1;
				moraleCount = moraleCount + 1;
				return 1;
			});
			return [
				<div className={css(myStyles.roleHeading)} styleName="role-header">{props.getLabel(`label_role_${eachRole}`)}</div>,
				<div styleName="role-metrics-container">
					<MetricComponent
						{...props}
						name={props.getLabel('label_skill')}
						value={`${Math.round(skillTotal / skillCount)}%`}
						metricType="SKILL"
						showInfo={false}
					/>
					<MetricComponent
						{...props}
						name={props.getLabel('label_morale')}
						value={`${Math.round(moraleTotal / moraleCount)}%`}
						metricType="MORALE"
						showInfo={false}
					/>
				</div>
			];
		});

		return (
			<div className={css(myStyles.popoverContainer)} styleName="skill-morale-popover" ref={myRef}>
				{skillMoraleDivs}
			</div>
		);
	}

	const teamSkill = `${getMetricsvalue('SKILL')}%`;
	const teamMorale = `${getMetricsvalue('MORALE')}%`;
	const customerSatisfaction = `${getMetricsvalue('CS')}%`;
	const budget = `$${getMetricsvalue('BUDGET')}`;

	const myStyles = getSkin(props.skinGuide);
	const skin = props.skinGuide.globalProfiles.palette
	return (
		<div styleName="all-metrics-container" className="metric-tutorial" >
			{
				props.headerConfig.showBudget
					? <MetricComponent
						{...props}
						name={props.getLabel('label_budget')}
						value={budget}
						metricType="BUDGET"
						infoText={props.getLabel('label_budget_tooltip_text')}
					/>
					: null
			}
			{
				props.headerConfig.showSkillMorale
					? <div className={css(myStyles.metricBorder)} styleName="metric-border skill-morale-metric">
						<MetricComponent
							{...props}
							name={props.getLabel('label_team_skill')}
							value={teamSkill}
							metricType="SKILL"
							infoText={props.getLabel('label_skill_tooltip_text')}
						/>
						<MetricComponent
							{...props}
							name={props.getLabel('label_team_morale')}
							value={teamMorale}
							metricType="MORALE"
							infoText={props.getLabel('label_morale_tooltip_text')}
						/>
						<div styleName="arrow-container" className={css(myStyles.arrowContainer)}
							onClick={() => {
								setShowSkillMoralePopover(!showSkillMoralePopover);
							}}
						>
							<div styleName="down-arrow">
								<DownArrow svgColor={hexToRgbA(skin.primaryColor, 1)} />
							</div>
						</div>
						{
							showSkillMoralePopover
								? renderSkillMoralePopover()
								: null
						}
					</div>
					: null
			}
			{
				props.headerConfig.showCS
					? <div className={css(myStyles.metricBorder)} styleName="metric-border">
						<MetricComponent
							{...props}
							name={props.getLabel('label_csat')}
							value={customerSatisfaction}
							metricType="CUSTSAT"
							infoText={props.getLabel('label_csat_tooltip_text')}
						/>
					</div>
					: null
			}
		</div>
	);
}

export default applyWrappers(AllMetricComponent, styles);