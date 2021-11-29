import React from 'react';
import { connect } from 'react-redux';
import { setUiState } from 'actions/uiState/actionCreators';
import StoryPopup from 'components/popups/storyPopup';
import updateUserState from 'actions/userState/actionCreators';
import { submitAction } from 'actions/apiAction/submitAction';
import { addStepsToTutorial, startTutorial, pauseTutorial, updateStepNumber } from 'actions/tutorial';

class StoryPopupContainer extends React.Component {

	render() {
		return (
			<StoryPopup {...this.props} />
		);
	}
}

StoryPopupContainer.propTypes = {};

StoryPopupContainer.defaultProps = {};

const mapStateToProps = state => {
	return {
		userEvents: state.userEvents,
		uiState: state.uiState,
		userState: state.userState,
		stories: state.stories,
		userStories: state.userStories,
		features: state.features,
		priorities: state.priorities,
		userBlockers: state.userBlockers,
		actions: state.actions,
		prds: state.prds,
		userPrds: state.userPrds,
		userMetrics: state.userMetrics,
		metrics: state.metrics,
		userActions: state.userActions,
		tutorial: state.tutorial
	};
};

const mapDispatchToProps = dispatch => ({
	setUiState: (payload) => {
		dispatch(setUiState(payload))
	},
	updateUserState: (payload) => {
		dispatch(updateUserState(payload));
	},
	submitAction: (actionOptionId, payload, callback) => {
		dispatch(submitAction(actionOptionId, payload, callback));
	},
	addStepsToTutorial: (steps, type) => {
		dispatch(addStepsToTutorial(steps, type));
	},
	startTutorial: () => {
		dispatch(startTutorial());
	},
	pauseTutorial: () => {
		dispatch(pauseTutorial());
	},
	updateStepNumber: (payload) => {
		dispatch(updateStepNumber(payload));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StoryPopupContainer);
