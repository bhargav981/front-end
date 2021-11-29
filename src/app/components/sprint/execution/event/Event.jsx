import React from 'react';
import styles from './event.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import Close from 'svgComponents/close';
import { hexToRgbA } from 'util/styleUtil';
import IncrementArrow from 'svgComponents/incrementArrow';
import DecrementArrow from 'svgComponents/decrementArrow';
import FlagIcon from 'svgComponents/flagIcon';
import metricsKeyMapping from 'config/metrics';

const Event = (props) => {

	const myStyles = getSkin(props.skinGuide);

	const { userEventsList, eventsToBeShownCount } = props.userEvents;

	const latestEvent = userEventsList[userEventsList.length - eventsToBeShownCount];

	if (!latestEvent) {
		return (
			<div className={css(myStyles.container, myStyles.responseMessage)} styleName="container">
				No new event
			</div>
		);
	}

	let overallImpact = 0;
	latestEvent.userMetrics.map(userMetric => {
		overallImpact += userMetric.diff;
		return 1;
	});

	let eventType = 'neutral';
	if (overallImpact > 0) {
		eventType = 'positive';
	}
	else if (overallImpact < 0) {
		eventType = 'negative';
	}

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

	const renderGameMetrics = (title, value, changeValue, changeType) => {
		return (
			<div className={css(myStyles.leftMetricContainer)} styleName="left-metric-container">
				<div className={css(myStyles.metricTitle)} styleName="metric-title">{title}</div>
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

	const renderMetrics = () => {
		let skillMetric = null;
		let moraleMetric = null;
		let csMetric = null;

		latestEvent.userMetrics.map(userMetric => {
			const individualMetric = props.metrics.metricsList.filter(
				metric => metric.metricsId === userMetric.metricsId
			)[0];

			if (individualMetric.key === metricsKeyMapping['SKILL']) {
				skillMetric = renderGameMetrics(
					props.getLabel('label_skill'),
					`${userMetric.value}%`,
					`${userMetric.diff >= 0 ? userMetric.diff : -userMetric.diff}`,
					userMetric.diff > 0 ? 'positive' : userMetric.diff < 0 ? 'negative' : 'neutral'
				);
			}

			if (individualMetric.key === metricsKeyMapping['MORALE']) {
				moraleMetric = renderGameMetrics(
					props.getLabel('label_morale'),
					`${userMetric.value}%`,
					`${userMetric.diff >= 0 ? userMetric.diff : -userMetric.diff}`,
					userMetric.diff > 0 ? 'positive' : userMetric.diff < 0 ? 'negative' : 'neutral'
				);
			}

			if (individualMetric.key === metricsKeyMapping['CS']) {
				csMetric = renderGameMetrics(
					props.getLabel('label_csat'),
					`${userMetric.value}%`,
					`${userMetric.diff >= 0 ? userMetric.diff : -userMetric.diff}`,
					userMetric.diff > 0 ? 'positive' : userMetric.diff < 0 ? 'negative' : 'neutral'
				);
			}

			return null;
		});

		return [skillMetric, moraleMetric, csMetric];
	}

	const closeActionResponse = () => {
		const updatedEventsToBeShownCount = eventsToBeShownCount - 1;

		if (updatedEventsToBeShownCount === 0) {
			if (props.uiState.showReplanSprintPopup) {
				props.setUiState({
					showOverlay: true,
					highlightDesktopHeader: true,
					highlightMetricsHeader: false,
					overlayComponentType: 'CENTER',
					overlayComponent: 'REPLAN_SPRINT_HELP_POPUP'
				});
			} else {
				props.setUiState({
					showOverlay: false,
					overlayComponentType: '',
					highlightDesktopHeader: false,
					highlightMetricsHeader: false,
					overlayComponent: ''
				});
			}
		}

		props.updateEventsToBeShownCount(updatedEventsToBeShownCount);
	}

	let imageKey = 'neutral_event_response';
	let containerClass = css(myStyles.container);
	if (eventType === 'negative') {
		imageKey = 'negative_event_response';
		containerClass = css(myStyles.container, myStyles.negativeContainer);
	}
	else if (eventType === 'positive') {
		imageKey = 'positive_event_response';
		containerClass = css(myStyles.container, myStyles.positiveContainer);
	}

	return (
		<div className={containerClass} styleName="container">
			<div styleName="image-container">
				<img alt={imageKey} src={props.getImage(imageKey)} styleName="image" />
			</div>
			<div className={css(myStyles.responseContainer)} styleName="response-container">
				<div className={css(myStyles.title)}>
					{props.getLabel(latestEvent.name)}
				</div>
				<div className={css(myStyles.responseMessage)} styleName="response-message">
					{props.getLabel(latestEvent.description)}
				</div>
				<div className={css(myStyles.personName)} styleName="person-name">
					{`- ${props.getLabel('label_cpo_name')}, ${props.getLabel('label_cpo_pos')}`}
				</div>
				<div styleName="metrics-container">
					{renderMetrics()}
				</div>
			</div>
			<div
				styleName="close-container"
				onClick={closeActionResponse}
			>
				<Close
					backgroundColor={hexToRgbA(
						props.skinGuide.globalProfiles.palette.primaryColor,
						0.5
					)}
				/>
			</div>
		</div>
	);
}

export default applyWrappers(Event, styles);