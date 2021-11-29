import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUiState } from 'actions/uiState/actionCreators';

import HistoryList from "./../components/metricsHeader/history/historyList/"

class HistoryListContainer extends React.Component {

	render() {
		return (
			<HistoryList {...this.props}/>
		);
	}
}

HistoryListContainer.propTypes = {};

HistoryListContainer.defaultProps = {};
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
		userSprintReports: state.userSprintReports
	};
};

const mapDispatchToProps = dispatch => ({
	setUiState: (payload) => {
		dispatch(setUiState(payload))
	}
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(HistoryListContainer));
