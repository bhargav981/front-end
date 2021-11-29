import React from 'react';
import { connect } from 'react-redux';
import SprintPlanningComponent from 'components/sprint/planning/sprintPlanningComponent';
import { addTasksToSprint } from 'actions/apiAction/addTasksToSprint';
import updateUserState from 'actions/userState/actionCreators';
import { setUiState } from 'actions/uiState/actionCreators';
import { addStepsToTutorial, startTutorial, pauseTutorial, updateStepNumber, endTutorial, stopBlockerTutorial } from 'actions/tutorial';
import tutorialSequence from 'constants/tutorialSequence';
import MetricsHeaderContainer from 'containers/MetricsHeaderContainer';
import { updateUserTasksAction } from 'actions/stories/actionCreators';
import updateRoute from 'util/webAppRoutes/updateRoute';

class SprintPlanningContainer extends React.Component {

    componentDidMount() {
        // Start tutorial for sprint planning phase 
        const { userState } = this.props
        const currentSprintNumber = userState.currentSprintNumber || 1;
        if(userState.currentSprintState == 2 || userState.currentSprintState == 3)
            updateRoute({ route: `/execution/sprint/${currentSprintNumber}/execution` });


        if (userState.currentSprintNumber === 1 && userState.currentSprintDay === 1) {
            const step1Text = this.getLabel('label_tut_sprint_plan_step_1'),
                step2Text = this.getLabel('label_tut_sprint_plan_step_2'),
                step3Text = this.getLabel('label_tut_sprint_plan_step_3'),
                cponame = this.getLabel('label_cpo_name'),
                cpotitle = this.getLabel('label_cpo_pos'),
                tutorialImage = 'https://webassets.knolskape.com/misc/sindhu_anandhakrishnan/2019/07/22/35/cpo.svg',
                stepMetricsTutorial = this.getLabel('label_tut_sprint_plan_metrics'),
                stepMVPTutorial = this.getLabel('label_tut_sprint_plan_mvp');
            // tutorialImage = this.props.teamMembers.teamList.find(item => item.role === 'cpo').avatar
            // Hardcoding image link for now
            this.props.addStepsToTutorial(
                tutorialSequence.getSprintPlanningSteps(step1Text, step2Text, step3Text, stepMetricsTutorial, stepMVPTutorial, cponame, cpotitle, tutorialImage),
                'sprintPlanningScreen'
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
        if (userState.currentSprintNumber === 5 && userState.currentSprintDay === 1) {
            const step1Text = this.getLabel('label_final_sprint_sim_progress_help'),
                step2Text = this.getLabel('label_final_sprint_less_days_help'),
                cponame = this.getLabel('label_cpo_name'),
                cpotitle = this.getLabel('label_cpo_pos'),
                tutorialImage = 'https://webassets.knolskape.com/misc/sindhu_anandhakrishnan/2019/07/22/35/cpo.svg'
            // tutorialImage = this.props.teamMembers.teamList.find(item => item.role === 'cpo').avatar
            // Hardcoding image link for now
            this.props.addStepsToTutorial(
                tutorialSequence.getSprintPlanningFinalSprintSteps(step1Text, step2Text, cponame, cpotitle, tutorialImage),
                'sprintPlanningFinalScreen'
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

    render() {
        return [
            <MetricsHeaderContainer />,
            <SprintPlanningComponent {...this.props} />
        ];
    }
}

SprintPlanningContainer.propTypes = {};

SprintPlanningContainer.defaultProps = {};

const mapStateToProps = state => {
    return {
        labels: state.labels.labelsList,
        user: state.user,
        stories: state.stories,
        userStories: state.userStories,
        features: state.features,
        priorities: state.priorities,
        statuses: state.statuses,
        userState: state.userState,
        uiState: state.uiState,
        tutorial: state.tutorial,
        teamMembers: state.teamMembers,
    };
};

const mapDispatchToProps = dispatch => ({
    addTasksToSprint: (payload, callback) => {
        dispatch(addTasksToSprint(payload, callback));
    },
    updateUserState: (payload) => {
        dispatch(updateUserState(payload));
    },
    setUiState: (payload) => {
        dispatch(setUiState(payload))
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
    updateUserTasksAction: (payload) => {
        dispatch(updateUserTasksAction(payload));
    },
    stopBlockerTutorial: () => {
        dispatch(stopBlockerTutorial());
    },
    endTutorial: () => {
        dispatch(endTutorial());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SprintPlanningContainer);
