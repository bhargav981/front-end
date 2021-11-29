import React from 'react';
import styles from './metricComponent.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import UserProfile from 'svgComponents/userProfile';
import InfoComponent from 'commonComponents/infoComponent';
import { checkIfPresent } from 'util/utilFunctions';
import Budget from 'svgComponents/budget';
import Skill from 'svgComponents/skill';
import Morale from 'svgComponents/morale';
import CustSat from 'svgComponents/custSat';

const MetricComponent = (props) => {

	const getMetricImage = () => {
		switch (props.metricType) {
			case 'BUDGET':
				return <Budget />;
			case 'SKILL':
				return <Skill />;
			case 'MORALE':
				return <Morale />;
			case 'CUSTSAT':
				return <CustSat />;
			default:
				return <UserProfile />;
		}
	}

	const myStyles = getSkin(props.skinGuide);
	let showInfo = true;
	if (checkIfPresent(props.showInfo)) {
		showInfo = props.showInfo;
	}
	return (
		<div styleName="metric-container">
			<div styleName="metric-content" className={css(myStyles.metricContent)}>
				<div styleName="metric-name-desc-container">
					<div styleName="metric-name" className={css(myStyles.metricName)}>
						{props.name}
					</div>
					{
						showInfo
							? <InfoComponent
								tooltipText={props.infoText}
								alignTooltipKey="LEFT"
							/>
							: null
					}
				</div>
				<div styleName="metric-image-value-container">
					<div styleName="metric-image">
						{getMetricImage()}
					</div>
					<div styleName="metric-value" className={css(myStyles.metricValue)}>
						{props.value}
					</div>
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(MetricComponent, styles);