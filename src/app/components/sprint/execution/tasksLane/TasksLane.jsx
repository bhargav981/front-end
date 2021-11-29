import React from 'react';
import styles from './tasksLane.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import TaskCard from 'commonComponents/taskCard';
import { checkIfPresent } from 'util/utilFunctions';
import InfoComponent from 'commonComponents/infoComponent';

const TasksLane = (props) => {

	const myStyles = getSkin(props.skinGuide);


	const renderCards = (taskList, myStyles) => {
		return taskList.map((eachTask) => {
			return (
				<TaskCard
					priorities={props.priorities}
					statuses={props.statuses}
					{...eachTask}
					cardState={props.cardState}
					{...props}
				/>
			);
		});
	}

	let showAutoFill = false;
	if (checkIfPresent(props.showAutoFill)) {
		showAutoFill = props.showAutoFill;
	}

	return (
		<div styleName="lane-container">
			<div styleName="heading-container">
				<div className={css(myStyles.laneHeading)} styleName="lane-heading">{props.heading}</div>
				{
					showAutoFill
						? 
						<div styleName="auto-fill-container">
						<div className={css(myStyles.autoFill)} styleName="autofill-button" onClick={props.onClickAutoFill}>
							<div styleName="auto-fill-text">{props.getLabel('label_auto_fill')}</div>
						</div>
						<InfoComponent
								tooltipText={props.getLabel('label_autofill_helptext')}
								alignTooltipKey="BOTTOM"
								svgColor={props.skinGuide.globalProfiles.palette.grayColor4}
							/>
						</div>
						: null
				}
				<div className={css(myStyles.laneCount)} styleName="lane-count">{`${props.taskList.length} ${props.getLabel('label_item')}`}</div>
			</div>
			<div styleName="content-container">
				{renderCards(props.taskList, myStyles)}
			</div>
		</div>
	);
}

export default applyWrappers(TasksLane, styles);