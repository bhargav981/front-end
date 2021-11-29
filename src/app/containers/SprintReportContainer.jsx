import React from 'react';
import { connect } from 'react-redux';
import SprintFooter from 'components/sprint/report/sprintFooter';
import SprintReport from 'components/sprint/report/sprintReport';
import { startSprint } from 'actions/apiAction/startSprint';
import { fetchReportLink } from 'actions/apiAction/report';
import setUserState from 'actions/user/actionCreators';
import { setIsDownloading } from 'actions/report/actionCreators';
import { setUiState } from 'actions/uiState/actionCreators';
import { postMailReport } from 'actions/apiAction/mailReport';
import { addStepsToTutorial, startTutorial, pauseTutorial, updateStepNumber } from 'actions/tutorial';
import tutorialSequence from 'constants/tutorialSequence';
import updateRoute from 'util/webAppRoutes/updateRoute';

class SprintReportContainer extends React.Component {

    componentDidMount() {
        // Start tutorial for sprint report phase 
        const { userState } = this.props
        const currentSprintNumber = userState.currentSprintNumber || 1;   
        if(userState.currentSprintState == 1)
            updateRoute({ route: `/execution/sprint/${currentSprintNumber}/planning` });

        if (userState.currentSprintNumber === 1) {
            const step1Text = this.getLabel('label_tut_sprint_report_velocity'),
                step2Text = this.getLabel('label_tut_sprint_report_accuracy'),
                step3Text = this.getLabel('label_tut_sprint_report_efficiency'),
                step4Text = this.getLabel('label_tut_sprint_report_mvp'),
                cponame = this.getLabel('label_cpo_name'),
                cpotitle = this.getLabel('label_cpo_pos'),
                tutorialImage = 'https://webassets.knolskape.com/misc/sindhu_anandhakrishnan/2019/07/22/35/cpo.svg';
            // Hardcoding image link for now
            this.props.addStepsToTutorial(
                tutorialSequence.getSprintReportSteps(step1Text, step2Text, step3Text, step4Text, cponame, cpotitle, tutorialImage),
                'sprintReportScreen'
            )
            setTimeout(() => {
                this.props.updateStepNumber(0);
                this.props.setUiState({
                    showOverlay: false,
                    overlayComponentType: '',
                    highlightDesktopHeader: false,
                    highlightMetricsHeader: false,
                    overlayComponent: ''
                });
                this.props.startTutorial();
            }, 1000)
        }
    }

    getLabel = (key, defaultValue = "", vars = {}) => {
        const { labels } = this.props
        if (defaultValue === "") {
            defaultValue = key;
        }
        let label = defaultValue;
        if (labels !== undefined && labels[key] !== undefined) {
            label = labels[key];
        }
        if (key === null || key === undefined) {
            label = defaultValue;
        }
        for (var varKey in vars) {
            if (vars.hasOwnProperty(varKey)) {
                label = label.replace(new RegExp(`%{${varKey}}`, 'g'), vars[varKey]);
            }
        }
        return label;
    }

    disableFooterCondition = () => {
        return (
            this.props.userState.isGameCompleted === true
            || this.props.userState.daysCompleted === true
            || this.props.userState.timeCompleted === true
        );
    }

    render() {

        return [
            <SprintReport {...this.props} />,
            this.disableFooterCondition() ? null : <SprintFooter {...this.props} />
        ];
    }
}

SprintReportContainer.propTypes = {};

SprintReportContainer.defaultProps = {};

const mapStateToProps = state => {
    return {
        labels: state.labels.labelsList,
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
        teamMembers: state.teamMembers,
        userEvents: state.userEvents,
        userActions: state.userActions,
        userBlockers: state.userBlockers,
        tutorial: state.tutorial,
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
    setUiState: (payload) => {
        dispatch(setUiState(payload))
    },
    postMailReport: (payload, callback) => {
        dispatch(postMailReport(payload, callback))
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
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SprintReportContainer);
