import React from 'react';
import styles from './sprintMetrics.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import RightArrow from 'svgComponents/rightArrow';

const SprintMetrics = (props) => {

	// let effort = props.latestActionOption.effort;

	// if (props.latestUserActionResponse.actionOptionId === actionOptionIds.UPDATE_PRD) {
	// 	const latestPrdId = props.userPrds.selectedPrdId;

	// 	const latestPrd = props.prds.prdsList.filter(
	// 		prd => prd.id === latestPrdId
	// 	)[0];

	// 	if (latestPrd) {
	// 		effort = latestPrd.effort
	// 	}
	// }

	const totalDays = props.userState.totalDaysInSprint;
	const currentDay = props.userState.currentSprintDay;
	const previousDay = props.latestUserActionResponse.sprintDay || 1;
	// const previousDay = currentDay - effort;

	const myStyles = getSkin(props.skinGuide);

	const renderSprintDayBlocks = () => {
		const sprintDayBlocks = [];

		for (let day = 1; day <= totalDays; day++) {
			let opacity = 1;

			if (day > previousDay && day <= currentDay) {
				opacity = 0.5 - 0.2 * (day - 1 - previousDay);
			}

			if (opacity < 0.1) {
				opacity = 0.1
			}

			let sprintBlockStyle = 'sprint-block';

			if (day === currentDay) {
				sprintBlockStyle += ' current-sprint-block'
			}

			let sprintBlockClass = 'sprintBlock';

			if (day > currentDay) {
				sprintBlockClass = 'upcomingSprintBlock';
			}

			const sprintDayBlock = (
				<div
					className={css(myStyles[sprintBlockClass])}
					styleName={sprintBlockStyle}
					style={{ opacity }}
				></div>
			);
			sprintDayBlocks.push(sprintDayBlock)
		}

		return sprintDayBlocks;
	}

	const renderDayProgress = () => {
		if (currentDay > totalDays) {
			return <div className={css(myStyles.currentDay)}>{props.getLabel('label_sprint_end')}</div>
		}
		return (
			<div styleName="sprint-day-container">
				<div className={css(myStyles.previousDay)}>{props.getLabel('label_day_number','',{DAY_NUMBER:previousDay})}</div>
				<div styleName="right-arrow">
					<RightArrow />
				</div>
				<div className={css(myStyles.currentDay)}>{props.getLabel('label_day_number','',{DAY_NUMBER:currentDay})}</div>
			</div>
		);
	}

	return (
		<div styleName="left-metric-container" className={css(myStyles.leftMetricContainer)}>
			{renderDayProgress()}
			<div styleName="sprint-blocks-container">
				{renderSprintDayBlocks()}
			</div>
		</div>
	);
}

export default applyWrappers(SprintMetrics, styles);