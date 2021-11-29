import React from 'react';
import { connect } from 'react-redux';
import SprintReport from 'components/sprint/report/sprintReport';
import styles from './sprintReportPopupContainer.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';
import { startSprint } from 'actions/apiAction/startSprint';
import { fetchReportLink } from 'actions/apiAction/report';
import setUserState from 'actions/user/actionCreators';
import { setIsDownloading } from 'actions/report/actionCreators';
import SprintReportPopupHeader from 'commonComponents/sprintReportPopupHeader';
import updateUserState from 'actions/userState/actionCreators';
import { setUiState } from 'actions/uiState/actionCreators';

class SprintReportPopupContainer extends React.Component {

    render() {

        return (
            <div styleName="sprint-report-popup-container">
                <SprintReportPopupHeader {...this.props} />
                <div styleName="sprint-report-popup-header">
                    <SprintReport {...this.props} fromPopup={true} />
                </div>
            </div>
        );
    }
}

SprintReportPopupContainer.propTypes = {};

SprintReportPopupContainer.defaultProps = {};

const mapStateToProps = state => {
    return {
        user: state.user,
        userState: state.userState,
        userDetails: state.userDetails,
        uiState: state.uiState,
        userMetrics: state.userMetrics,
        metrics: state.metrics,
        stories: state.stories,
        userStories: state.userStories,
        userSprintReports: state.userSprintReports,
        report: state.report,
        customers: state.customers,
        priorities: state.priorities,
    };
};

const mapDispatchToProps = dispatch => ({
    setUserState: (payload) => {
        dispatch(setUserState(payload))
    },
    startSprint: (payload, callback) => {
        dispatch(startSprint(payload, callback));
    },
    fetchReportLink: () => {
        dispatch(fetchReportLink());
    },
    setIsDownloading: () => {
        dispatch(setIsDownloading(true))
    },
    updateUserState: (payload) => {
        dispatch(updateUserState(payload));
    },
    setUiState: (payload) => {
        dispatch(setUiState(payload))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(applyWrappers(SprintReportPopupContainer,styles));
