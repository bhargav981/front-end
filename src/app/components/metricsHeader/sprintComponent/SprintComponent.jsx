import React from 'react';
import styles from './sprintComponent.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import InfoComponent from 'commonComponents/infoComponent';

const SprintComponent = (props) => {

	const { currentSprintDay, currentSprintNumber, totalDaysInSprint } = props.userState;
	const myStyles = getSkin(props.skinGuide);

	const renderProgress = () => {
		const dayDivs = [];
		for (let day = 1; day <= totalDaysInSprint; day++) {

			if (day < currentSprintDay) {
				dayDivs.push(
					<div key={`sp-progress-${day}`} className={css(myStyles.completedDay)} styleName="sprint-day"></div>
				);
			} else if (day === currentSprintDay) {
				dayDivs.push(
					<div key={`sp-progress-${day}`} className={css(myStyles.currentDay)} styleName="sprint-current-day"></div>
				);
			} else {
				dayDivs.push(
					<div key={`sp-progress-${day}`} className={css(myStyles.notCompletedDay)} styleName="sprint-day"></div>
				);
			}
		}

		return dayDivs;
	}

	return (
		<div styleName="sprint-container">
			<div styleName="sprint-content" className={css(myStyles.sprintContent)}>
				<div styleName="sprint-name-desc-container">
					<div styleName="sprint-name" className={css(myStyles.sprintName)}>
						{`Sprint ${currentSprintNumber}`}
					</div>
					<InfoComponent
						tooltipText={props.getLabel('label_sprint_help_text')}
						alignTooltipKey="RIGHT"
					/>
				</div>
				<div styleName="sprint-day-progress-container">
					<div styleName="sprint-day-container" className={css(myStyles.dayClass)}>
						{props.getLabel('label_day_number','',{DAY_NUMBER:currentSprintDay})}
					</div>
					<div styleName="sprint-progress-container">
						{renderProgress()}
					</div>
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(SprintComponent, styles);