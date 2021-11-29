import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import MetricsHeader from 'components/metricsHeader/metricsHeader';
import { setUiState } from 'actions/uiState/actionCreators';
import { startTutorial, pauseTutorial, updateStepNumber } from 'actions/tutorial';
import { postMailReport } from 'actions/apiAction/mailReport';

class MetricsHeaderContainer extends React.Component {

	render() {
		return (
			<div
				style={{
					width: '100%',
					height: '74px'
				}}
			>
				<MetricsHeader
					{...this.props}
				/>
			</div>
		);
	}
}

MetricsHeaderContainer.propTypes = {};

MetricsHeaderContainer.defaultProps = {};
// Ashok
const mapStateToProps = state => {
	return {
		user: state.user,
		userState: state.userState,
		customers: state.customers,
		teamMembers: state.teamMembers,
		userMetrics: state.userMetrics,
		metrics: state.metrics,
		uiState: state.uiState,
		tutorial: state.tutorial,
		actions: state.actions,
		userEvents: state.userEvents,
		userActions: state.userActions,
		userBlockers: state.userBlockers,
		userSprintReports: state.userSprintReports,
		userDetails: state.userDetails
	};
};

const mapDispatchToProps = dispatch => ({
	setUiState: (payload) => {
		dispatch(setUiState(payload))
	},
	startTutorial: () => {
		dispatch(startTutorial())
	},
	pauseTutorial: (payload) => {
		dispatch(pauseTutorial(payload))
	},
	updateStepNumber: (payload) => {
		dispatch(updateStepNumber(payload))
	},
	postMailReport: (payload, callback) => {
		dispatch(postMailReport(payload, callback))
	}
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(MetricsHeaderContainer));
