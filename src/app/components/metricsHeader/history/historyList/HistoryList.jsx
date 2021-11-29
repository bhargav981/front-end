import React, { useState } from 'react';
import styles from './history.module.sass';
// import getSkin from './skin.js';
// import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import _ from "lodash"
import Close from 'svgComponents/close';
import UpArrow from 'svgComponents/upArrow';
import DownArrow from 'svgComponents/downArrow';
import InfoComponent from 'commonComponents/infoComponent';

const metricRenderer = (metrics, allMetrics, getLabel) => {
	// TODO: make metric Id's dynamic
	// console.log(metrics)
	metrics = metrics.filter(
		(me) => [1, 2, 5].includes(me.metricsId) && me.diff != 0
	).sort((metric1, metric2) => (metric1.metricsId - metric2.metricsId));
	// console.log(metrics)
	const met = metrics.map((metric) => {
		const metricName = allMetrics[metric.metricsId][0].name
		const backgroundColor = metric.diff < 0 ? "rgba(255,123,123,0.6)" : "rgba(134,255,123,0.6)";
		const arrow = metric.diff < 0 ? <DownArrow svgColor={"rgba(3,26,32, 0.5)"} /> : <UpArrow svgColor={"rgba(3,26,32, 0.5)"} />;
		return (
			<div styleName="met-container" key={metric.metricId}>
				<div styleName="met-name">{getLabel(metricName)}</div>
				<div styleName="metric" style={{
					backgroundColor
				}}>
					<div styleName="arrow-cont"><div styleName="arrow">{arrow} </div>
						{metric.diff >= 0 ? metric.diff : -metric.diff}
					</div>
				</div>
			</div>
		);
	})

	return met;

}

const blockersRenderer = (blocker, allMetrics, getLabel) => {

	// const met = metricRenderer(blocker.metrics, allMetrics, getLabel)
	return (
		<div styleName="spacer">
			<div key={blocker.id} styleName="blocker">
				<div styleName="header-tag">
					<div styleName="b-hash">{getLabel("label_hash_blocker")}</div>
					<div styleName="sprint-day-tag">
						{getLabel('label_history_sprint_label', '', {
							SPRINT_NUMBER: blocker.sprintNumber,
							DAY_NUMBER: blocker.sprintDay
						})}
					</div>
				</div>
				<div styleName="a-name">{getLabel(blocker.name)}</div>
				{/* <div styleName="e-msg">{getLabel(blocker.description).substring(0, 70)}</div> */}
				{/* <div styleName="met-box">{met}</div>  */}
			</div>

			<div key={blocker.id} styleName="blocker-msg">
				<div styleName="b-msg">{getLabel(blocker.description)}</div>
				{/* <div styleName="met-box">{met}</div>  */}
			</div>
		</div>
	)
}


const eventsRenderer = (event, allMetrics, getLabel) => {

	const met = metricRenderer(event.userMetrics, allMetrics, getLabel)
	return (
		<div styleName="spacer">
			<div key={event.id} styleName="event">
				<div styleName="header-tag">
					<div styleName="e-hash">{getLabel("label_hash_event")}</div>
					<div styleName="sprint-day-tag">
						{getLabel('label_history_sprint_label', '', {
							SPRINT_NUMBER: event.sprintNumber,
							DAY_NUMBER: event.sprintDay
						})}
					</div>
				</div>
				<div styleName="a-name">{getLabel(event.name)}</div>
				<div styleName="e-msg">{getLabel(event.description)}</div>
				<div styleName="met-box met-box-eve">{met}</div>
			</div>
		</div>
	)
}

const actionsRenderer = (userAction, actions, actionOptions, allMetrics, getLabel) => {
	const selectedActionOption = actionOptions.find((actionOption) => {
		return actionOption.id == userAction.actionOptionId
	});

	if (!selectedActionOption) {
		return null;
	}

	const selectedAction = actions.find((action) => {
		return action.id == selectedActionOption.actionId
	});

	const met = metricRenderer(userAction.userMetrics, allMetrics, getLabel)
	return (
		<div styleName="spacer">
			<div key={userAction.id} styleName="action">
				<div styleName="header-tag">
					<div styleName="a-hash">{getLabel("label_hash_action")}</div>
					<div styleName="sprint-day-tag">
						{getLabel('label_history_sprint_label', '', {
							SPRINT_NUMBER: userAction.sprintNumber,
							DAY_NUMBER: userAction.sprintDay
						})}
					</div>
				</div>
				<div styleName="a-name">{getLabel(selectedAction && selectedAction.name)}</div>
				<div styleName="action-option-name">{getLabel(selectedActionOption.name)}</div>
				<div styleName="e-msg">{getLabel(userAction.message)}</div>
				<div styleName="met-box">{met}</div>
			</div>
		</div>
	)
}


const dayContainer = (day, ele, getLabel) => {
	return (
		<div styleName="day" key={day}>
			<div styleName="number">
				{getLabel("label_day_number", "", {
					DAY_NUMBER: day
				})}
			</div>
			<div styleName="circle"></div>
			{ele}
		</div>
	)
}

const Container = (props) => {


	const { actions, userEvents, userActions, getLabel, metrics, userBlockers, setUiState } = props
	const [action, setAction] = useState(false);
	const [event, setEvent] = useState(false);
	const [all, setAll] = useState(true);
	const [blocker, setBlocker] = useState(false);
	let allActions = userActions.userActionsList;
	const allActionOptionsStatic = actions.actionOptionsList;
	const allActionsStatic = actions.actionsList;
	const allEvents = userEvents.userEventsList;
	const allBlockets = userBlockers.blockerList;
	const allMetrics = _.groupBy(metrics.metricsList, (a) => a.metricsId);

	const sortedByday = _.groupBy([...allActions, ...allEvents, ...allBlockets], (a) => a.day);

	let allEle = [];
	for (const key of Object.keys(sortedByday).sort(function (a, b) { return b - a })) {
		const ele = sortedByday[key].map((element) => {

			if (element.actionOptionId && (action || all)) {
				return actionsRenderer(element, allActionsStatic, allActionOptionsStatic, allMetrics, getLabel)
			}

			if (element.eventId && (event || all)) {
				return eventsRenderer(element, allMetrics, getLabel)
			}

			if (element.blockerId && (blocker || all)) {
				return blockersRenderer(element, allMetrics, getLabel)
			}
			if (element.actionResponse) {
				// return eventsRenderer(element, allMetrics, getLabel)
			}
			return null;
		})

		allEle.push(dayContainer(key, ele, getLabel));
	}
	allEle = _.flatten(allEle)

	console.log(props.skinGuide.globalProfiles);

	return (<div styleName="container">
		<div styleName="header">
			<div>{getLabel("label_history_history")}</div>
			<div styleName="close" onClick={(e) => setUiState({
				showOverlay: false,
				overlayComponentType: '',
				highlightDesktopHeader: false,
				highlightMetricsHeader: false,
				overlayComponent: ''
			})}><Close /></div>
		</div>
		<div styleName="filter">
			<div>
				{getLabel("label_history_filter_by")}
			</div>
			<div styleName={'filter-box ' + (all ? "slected" : "")} onClick={() => { setEvent(false); setAction(false); setAll(true) }}>
				{getLabel("label_history_all")}
			</div>
			<div styleName={'filter-box ' + (!all && event ? "slected" : "")} onClick={() => { setEvent(!event); setAll(false) }}>
				<div styleName="filter-name">{getLabel("label_history_event")}</div>
				<InfoComponent
					tooltipText={props.getLabel('label_history_info_event')}
					alignTooltipKey="BOTTOM"
					svgColor={props.skinGuide.globalProfiles.palette.grayColor1}
				/>
			</div>
			<div styleName={'filter-box ' + (!all && action ? "slected" : "")} onClick={() => { setAction(!action); setAll(false) }}>
				<div styleName="filter-name">{getLabel('label_history_actions')}</div>
				<InfoComponent
					tooltipText={props.getLabel('label_history_info_action')}
					alignTooltipKey="BOTTOM"
					svgColor={props.skinGuide.globalProfiles.palette.grayColor1}
				/>
			</div>
			<div styleName={'filter-box ' + (!all && blocker ? "slected" : "")} onClick={() => { setBlocker(!blocker); setAll(false) }}>
				<div styleName="filter-name">{getLabel('label_history_blockers')}</div>
				<InfoComponent
					tooltipText={props.getLabel('label_history_info_blocker')}
					alignTooltipKey="BOTTOM"
					svgColor={props.skinGuide.globalProfiles.palette.grayColor1}
				/>
			</div>
		</div>
		<div styleName="box">
			<div styleName="list">{allEle}</div>
		</div>
	</div>
	);
}

export default applyWrappers(Container, styles);