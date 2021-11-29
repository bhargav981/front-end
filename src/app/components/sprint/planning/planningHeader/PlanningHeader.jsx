import React from 'react';
import styles from './planningHeader.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import FilledButton from 'commonComponents/buttons/filledButton';
import CustomSelect from 'commonComponents/customSelect';

const PlanningHeader = (props) => {

	const filterFeatureChangeHandler = (value) => {
		props.setFeatureFilter(value);
	}

	const filterStatusChangeHandler = (value) => {
		props.setStatusFilter(value);
	}

	const myStyles = getSkin(props.skinGuide);
	return (
		<div styleName="planning-header-container">
			<div styleName="planning-header-column-container" className={css(myStyles.headerContainer)}>
				<div styleName="name-filter-container">
					<div styleName="sprint-name-container">
						<div styleName="sprint-content">
							<div className={css(myStyles.phaseName)} styleName="sprint-phase-name">{props.getLabel('label_sprint_planning')}</div>
							<div className={css(myStyles.verticalBar)} styleName="vertical-bar"></div>
							<div className={css(myStyles.sprintNumber)} styleName="sprint-number">{props.getLabel('label_planning_sprint_number', '', { SPRINT_NUM: props.userState.currentSprintNumber })}</div>
						</div>
						<div className={css(myStyles.sprintDesc)} styleName="sprint-desc">
							{props.getLabel('label_select_tasks')}
						</div>
					</div>
					<div styleName="filter-container">
						<div styleName="each-filter">
							<CustomSelect
								optionList={props.filterFeatureArray}
								heading={props.getLabel('label_filter_by_feature_heading')}
								optionHeading={props.getLabel('label_filter_by_feature_heading')}
								onChangeHandler={filterFeatureChangeHandler}
							/>
						</div>
						<div styleName="each-filter">
							<CustomSelect
								optionList={props.filterStatusArray}
								heading={props.getLabel('label_filter_by_status_heading')}
								optionHeading={props.getLabel('label_filter_by_status_heading')}
								onChangeHandler={filterStatusChangeHandler}
							/>
						</div>
					</div>
				</div>
				<div styleName="task-details-container">
					<div styleName="task-number-container">
						<div className={css(myStyles.taskNumber)} styleName="task-number">{props.getLabel('label_tasks_selected', '', { TASK_COUNT: props.taskCount })}</div>
						<div className={css(myStyles.spNumber)} styleName="sp-number">{props.getLabel('label_story_points')} | {props.storyPointCount}</div>
					</div>
					<div className={css(myStyles.taskVerticalBar)} styleName="task-vertical-bar"></div>
					<div styleName="add-task-button-container">
						<FilledButton
							textLabel={props.getLabel('label_add_tasks_to_sprint')}
							disableButton={props.taskCount === 0 || props.storyPointCount === 0}
							clickFunction={props.onClickAddTaskToSprint}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(PlanningHeader, styles);