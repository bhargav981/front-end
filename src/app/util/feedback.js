// import {feedbackConfig, feedbackOptionsConfig} from 'config/feedback/config.js';
import Feedback from 'kfeedback';
import environment from 'util/environment';

const feedbackConfig = {
    'sim': 'agilesim', 		//service name
    'survey': environment.REACT_APP_FEEDBACK_SURVEY,
    // 'env': 'test',
    'env': environment.REACT_APP_FEEDBACK_ENV,		// same as environment used for commondb
    'isSurveyMandatory': true
};

const feedbackOptionsConfig = {
    headerTitle: "Feedback",
    headerColor: "linear-gradient(91.43deg, #232882 0%, #FF1E50 100%)",
    headerTitleColor: '#FFFFFF'
};


let feedback;
/**
 * [initializeFeedback initializes the feedback wrapper]
 * @param  {String} deploymentType [deployment type of the application]
 * @param  {Number} userId         [commomDB user license id]
 * @param  {Number} [groupId=null] [commomDB group id ]
 */
const initializeFeedback = (deploymentType, userId, groupId = null, callback) => {
    
	if (!window.feedback) {

        const settings = feedbackOptionsConfig;

		window.feedback = window.feedback ?
							window.feedback :
							new Feedback(feedbackConfig, callback, settings);

		feedback = window.feedback;

		if (deploymentType === 'commonDB') {
			feedback.setCommonDBDetails({
				uliId: userId,
				groupId: groupId
			});
		}

		feedback.prepareForm();
	}
};

/**
 * [showFeedbackFormWithoutPopup displays feeback component if feedback is not submitted]
 * @param  {Function} callback [callback function if feedback is already completed]
 */
const showFeedbackFormWithoutPopup = (callback) => {

	feedback.onReady(() => {

		// display feedback component if feedback questions are fetched and feedback is not completed
		if (feedback.isFeedbackCompleted() === false && feedback.isFeedbackFetched() === true) {
			feedback.showFeedbackForm();
		}

		// if any service of the feedback component failed
		if (feedback.hasAnyServiceFalied() === true) {
			feedback.feedbackFetchIssue();
		}

		// if feedback is already completed
		if (feedback.isFeedbackCompleted() === true) {
			feedback.alreadyFeedbackGivenPopup();
			if (callback) {
				callback();
			}
		}
	});

};

const checkIfFeedbackIsCompleted = (callback) => {
	console.log('in checkIfFeedbackIsCompleted');
	feedback.onReady(() => {
		if (feedback.isFeedbackCompleted()) {
			console.log('in if ', feedback);
			if (callback) {
				console.log(' in if callback');
				callback();
			}
		}
	});
};

export {
	initializeFeedback,
	showFeedbackFormWithoutPopup,
	checkIfFeedbackIsCompleted
};
