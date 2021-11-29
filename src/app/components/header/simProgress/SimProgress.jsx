import React from 'react';
import styles from './simProgress.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import HeaderSeparation from 'components/header/headerSeparation';

const SimProgress = (props) => {
	const currentDay = props.userState.currentDay;
	const totalDays = props.userState.totalDays;

	const renderProgress = (currentDay, totalDays, myStyles) => {
		const dayDivs = [];
		for (let day = 1; day <= totalDays; day++) {
			let dayClassName = "middle-days-container"
			if (day === 1 || day === totalDays) {
				dayClassName = "end-days-container"
			}

			if (day === currentDay) {
				dayClassName = "current-days-container"
			}

			if (day < currentDay) {
				dayDivs.push(
					<div key={`progress-${day}`} className={css(myStyles.completedDay)} styleName={dayClassName}></div>
				);
			} else if (day === currentDay) {
				dayDivs.push(
					<div key={`progress-${day}`} className={css(myStyles.currentDay)} styleName={dayClassName}></div>
				);
			} else {
				dayDivs.push(
					<div key={`progress-${day}`} className={css(myStyles.notCompletedDay)} styleName={dayClassName}></div>
				);
			}
		}

		return dayDivs;
	}

	const renderDayTag = (currentDay, myStyles) => {

		let leftValue = (currentDay * 3) - 23;
		if (leftValue < 2) {
			leftValue = 2;
		} else if (leftValue > ((totalDays * 3) - 45)) {
			leftValue = (totalDays * 3) - 47;
		}

		return (
			<div
				styleName="day-tag-container"
				className={css(myStyles.dayTag)}
				style={{
					top: '-12px',
					left: `${leftValue}px`
				}}
			>
				{props.getLabel('label_day_number',"", {DAY_NUMBER:currentDay > totalDays ? totalDays : currentDay}) }
			</div>
		);
	}

	const myStyles = getSkin(props.skinGuide);
	return (
		<div id="sim-progress" styleName="sim-progress-container">
			<div styleName="sim-progress-content">
				<div styleName="progress-start-text" className={css(myStyles.progressStartText)}>
					{props.getLabel('label_sim_progress_start')}
				</div>
				<div styleName="progress-container">
					{renderProgress(currentDay, totalDays, myStyles)}
					{renderDayTag(currentDay, myStyles)}
				</div>
				<div styleName="progress-end-text" className={css(myStyles.progressEndText)}>
					{/* {(totalDays - currentDay) < 0 ? 0 : (totalDays - currentDay)} days to DEADLINE */}
					{props.getLabel('label_sim_progress_deadline', '', {
						DAYS: (totalDays - currentDay) < 0 ? 0 : (totalDays - currentDay)
					})}
				</div>
			</div>
			<HeaderSeparation />
		</div>
	);
}

export default applyWrappers(SimProgress, styles);