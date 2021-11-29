import React, { useState } from 'react';
import styles from './sprintReport.module.sass';
import getSkin from './skin.js';
import applyWrappers from 'wrappers/ComponentWrapper';
import Tabs from './tabs/index';
import Metrics from './metric/Metric';
import Stories from './stories/'
import Comments from "./cust/";
import Completion from "./completion/";
import { css } from 'aphrodite/no-important';
import GameComplete from 'svgComponents/gameComplete';
import WalkthroughTabs from 'commonComponents/walkthrough/walkthroughTabs';
import { walkthroughTabsList } from 'config/walkthrough';
import {
	showFeedbackFormWithoutPopup,
} from 'util/feedback';
import HollowButton from 'commonComponents/buttons/hollowButton';
import { getUserMetricsForMetricsKey } from 'util/utilFunctions';
import History from 'components/metricsHeader/history';
import InfoComponent from 'commonComponents/infoComponent';
import SendEmailReport from 'commonComponents/sendEmailReport';

const downloadReport = (props) => {
	props.setIsDownloading(true);
	props.fetchReportLink();
}

const SprintReport = (props) => {
	console.log("tutorial", props.tutorial);

	const renderWalkthroughTabs = () => {
		if (isGameCompleted) {
			return (
				<div styleName="walkthrough-tabs-container">
					<WalkthroughTabs walkthroughTabsList={updatedWalkthroughTabsList} />
				</div>
			);
		}
		return null;
	}

	const setFeedbackCompleted = () => {
		props.setUserState({
			isFeedbackSubmitInProgress: false,
			isKfeedbackSubmitted: true
		});
	}

	const onClickFeedback = () => {
		props.setUserState({
			isFeedbackSubmitInProgress: true
		});
		showFeedbackFormWithoutPopup(setFeedbackCompleted);
	}

	const mvpUserMetrics = getUserMetricsForMetricsKey(
		props.metrics.metricsList,
		props.userMetrics.userMetricsList,
		'MVP'
	);

	const updatedWalkthroughTabsList = walkthroughTabsList.map(walkthroughTab => {
		if (walkthroughTab.key === 'launch') {
			return {
				...walkthroughTab,
				isSelected: true
			};
		}
		return {
			...walkthroughTab,
			isSelected: false
		};
	});


	const myStyles = getSkin(props.skinGuide);
	const { userState, metrics, userSprintReports, getLabel, stories, report, fromPopup, customers } = props;
	const { isGameCompleted } = userState;

	if (userSprintReports.sprintReportList.length === 0) {
		return (
			<div styleName="master" style={
				{
					'height': `calc(100% - ${isGameCompleted || fromPopup ? 0 : 80}px)`
				}
			}>
				<div styleName="sprint-report-container">
					<div styleName={fromPopup ? "sprint-report-popup-content-container" : "sprint-report-content-container"}>
						{renderWalkthroughTabs()}
						{
							isGameCompleted
								? <div styleName="sprint-report-component game-completed">
									<div styleName="img">
										<GameComplete />
									</div>
									<div styleName="content">
										<div styleName="title">
											{
												mvpUserMetrics.value === 100
													? getLabel("label_report_congrats_mvp_achieved")
													: getLabel("label_report_congrats_days_over")
											}
										</div>
										<div styleName="ms">
											{
												mvpUserMetrics.value === 100
													? getLabel("label_report_productcustfit_achieved")
													: getLabel("label_report_days_over")
											}
										</div>

										<div styleName="buttons-container">
											{
												props.user.isKfeedbackInitialized === true && props.user.isKfeedbackSubmitted === false
													? <div styleName="single-button-container">
														<HollowButton
															textLabel={props.user.isFeedbackSubmitInProgress ? props.getLabel('label_give_feedback_loading') : props.getLabel('label_give_feedback')}
															clickFunction={props.user.isFeedbackSubmitInProgress ? null : onClickFeedback}
															disableButton={props.user.isFeedbackSubmitInProgress}
															removeShadow={true}
															buttonStyle={{
																background: 'transparent',
																borderColor: 'white'
															}}
															buttonTextStyle={{
																fontWeight: 600,
																color: 'white'
															}}
														/>
													</div>
													: null
											}
											<div styleName="single-button-container">
												<HollowButton
													textLabel={report.isReportDownloading ? getLabel("label_report_downloading") : getLabel("label_report_download")}
													clickFunction={report.isReportDownloading ? null : () => { downloadReport(props) }}
													disableButton={props.user.isKfeedbackSubmitted === false}
													removeShadow={true}
												/>
												{
													props.user.isKfeedbackSubmitted === true
														? null
														: <div className={css(myStyles.helpTextReport)} styleName="help-text-report">{props.getLabel('label_provide_feedback_for_report')}</div>
												}
											</div>
											{
												props.user.isKfeedbackSubmitted === true
													? <SendEmailReport {...props} />
													: null
											}
										</div>

									</div>
								</div>
								: null
						}
					</div>
				</div>
			</div>
		);
	}

	var totalSprints
	if (fromPopup) {
		totalSprints = props.userState.currentSprintNumber - 1
	} else {
		totalSprints = props.userState.currentSprintNumber
	}

	const [selected, setSelected] = useState(!fromPopup ? props.userState.currentSprintNumber : 1);


	let sprintReport = userSprintReports.sprintReportList.find((eachReport) => {
		return eachReport.sprintNumber === selected;
	});

	if(!sprintReport){
		let len = userSprintReports.sprintReportList.length
		sprintReport = userSprintReports.sprintReportList[len-1]
		setSelected(sprintReport.sprintNumber)
	}

	const messagesReport = sprintReport.reportSpeak.reportSpeakMessageArray.map((block) => getLabel(block.metricMessage));

	const reportStories = sprintReport.reportStories;

	const sprinStories = reportStories.map((us) => {
		const st = stories.storyList.find((str) => str.id === us.storyId);
		return { ...st, ...us }
	});

	const notCompletedSprintStories = sprinStories.filter((story) => story.storyStatus != 4);

	return (
		<div styleName="master" style={
			{
				'height': `calc(100% - ${isGameCompleted || fromPopup ? 0 : 80}px)`
			}
		}>
			<div styleName="sprint-report-container">
				<div styleName={fromPopup ? "sprint-report-popup-content-container" : "sprint-report-content-container"}>
					{renderWalkthroughTabs()}
					{
						isGameCompleted
							? <div styleName="sprint-report-component game-completed">
								<div styleName="img">
									<GameComplete />
								</div>
								<div styleName="content">
									<div styleName="title">
										{
											mvpUserMetrics.value == 100
												? getLabel("label_report_congrats_mvp_achieved")
												: getLabel("label_report_congrats_days_over")
										}
									</div>
									<div styleName="ms">
										{
											mvpUserMetrics.value == 100
												? getLabel("label_report_productcustfit_achieved")
												: getLabel("label_report_days_over")
										}
									</div>

									<div styleName="buttons-container">
										{
											props.userState.isFeedbackEnabled == true && props.user.isKfeedbackInitialized == true && props.user.isKfeedbackSubmitted == false
												? <div styleName="single-button-container">
													<HollowButton
														textLabel={props.user.isFeedbackSubmitInProgress ? props.getLabel('label_give_feedback_loading') : props.getLabel('label_give_feedback')}
														clickFunction={props.user.isFeedbackSubmitInProgress ? null : onClickFeedback}
														disableButton={props.user.isFeedbackSubmitInProgress}
														removeShadow={true}
														buttonStyle={{
															background: 'transparent',
															borderColor: 'white'
														}}
														buttonTextStyle={{
															fontWeight: 600,
															color: 'white'
														}}
													/>
												</div>
												: null
										}
										{
											props.userState.isFinalReportEnabled
												? <div styleName="single-button-container">
													<HollowButton
														textLabel={report.isReportDownloading ? getLabel("label_report_downloading") : getLabel("label_report_download")}
														clickFunction={report.isReportDownloading ? null : () => { downloadReport(props) }}
														disableButton={props.userState.isFeedbackEnabled == true && props.user.isKfeedbackSubmitted == false}
														removeShadow={true}
													/>
													{
														props.user.isKfeedbackSubmitted == true || props.userState.isFeedbackEnabled == false
															? null
															: <div className={css(myStyles.helpTextReport)} styleName="help-text-report">{props.getLabel('label_provide_feedback_for_report')}</div>
													}
												</div>
												: null
										}

										{
											props.userState.isFinalReportEnabled && (props.user.isKfeedbackSubmitted === true || props.userState.isFeedbackEnabled == false)
												? <SendEmailReport {...props} />
												: null
										}
									</div>

								</div>
							</div>
							: null
					}
					<div styleName="tabs">
						<Tabs sprintCount={totalSprints} selected={selected} setSelected={setSelected} getLabel={getLabel} />
						{
							!fromPopup
								? <History {...props} height="40px" />
								: null
						}
					</div>
					<div styleName="text">
						<div>{getLabel('label_sprint_report_main_heading')}</div>
						<div>
							{`${getLabel(sprintReport.reportSpeak.heading, "", { SPRINT_NUMBER: selected })} ${messagesReport.join(" ")}`}
						</div>
					</div>

					<div styleName="info">
						<div styleName="metrics">
							<div styleName="met-name">{getLabel("label_report_metrics")}</div>
							<Metrics sprintReport={sprintReport} userMetrics={sprintReport.reportMetrics} userState={userState} metrics={metrics} selected={selected} getLabel={getLabel} />
						</div>
						<div styleName="task">
							<div styleName="task-row">
								<div styleName="task-graph unfinshed-task oa">
									<div styleName="heading">
										{getLabel("label_report_task_completion")}
									</div>
									<Completion sprinStories={sprinStories} getLabel={getLabel} />
								</div>
								{
									notCompletedSprintStories.length > 0
										? <div styleName="unfinshed-task">
											<div styleName="heading">
												<div styleName="heading-text">
													{getLabel("label_report_unfinished_tasks")}
												</div>
												<InfoComponent
													tooltipText={props.getLabel('label_unfinished_tasks_help_text')}
													alignTooltipKey="BOTTOM"
													svgColor={props.skinGuide.globalProfiles.palette.grayColor4}
												/>
											</div>

											<Stories sprinStories={notCompletedSprintStories} getLabel={getLabel} {...props} />
										</div>
										: null
								}
							</div>
							<div styleName="customers-speak">
								<Comments sprintReport={sprintReport}
									selected={selected} getLabel={getLabel} customers={customers} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(SprintReport, styles);