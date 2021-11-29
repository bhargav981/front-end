import React from 'react';
import { connect } from 'react-redux';
import SprintExecutionComponent from 'components/sprint/execution/sprintExecutionComponent';
import { submitAction } from 'actions/apiAction/submitAction';
import { setPriorityForTasks } from 'actions/apiAction/setPriorityForTasks';
import { updateUserTasksAction } from 'actions/stories/actionCreators';
import { setUiState } from 'actions/uiState/actionCreators';
import updateUserState from 'actions/userState/actionCreators';
import { addStepsToTutorial, startTutorial, pauseTutorial, updateStepNumber, endTutorial, stopBlockerTutorial } from 'actions/tutorial';
import tutorialSequence from 'constants/tutorialSequence';
import MetricsHeaderContainer from 'containers/MetricsHeaderContainer';
import { endSprint } from 'actions/apiAction/endSprint';
import updateRoute from 'util/webAppRoutes/updateRoute';

class SprintExecutionContainer extends React.Component {

    componentDidMount() {
        // Start tutorial for sprint planning phase 
        const { userState } = this.props
        const currentSprintNumber = userState.currentSprintNumber || 1;
        if(userState.currentSprintState == 4)
            updateRoute({ route: `/execution/sprint/${currentSprintNumber}/report` });

        if (userState.currentSprintNumber === 1 && userState.currentSprintState === 3 && userState.currentSprintDay === 2) {
            const   step1Text = this.getLabel('label_tut_sprint_exec_step_1'),
                    step2Text = this.getLabel('label_tut_sprint_exec_step_2'),
                    cponame = this.getLabel('label_cpo_name'),
                    cpotitle = this.getLabel('label_cpo_pos'),
                    tutorialImage = 'https://webassets.knolskape.com/misc/sindhu_anandhakrishnan/2019/07/22/35/cpo.svg'
            // tutorialImage = this.props.teamMembers.teamList.find(item => item.role === 'cpo').avatar
            // Hardcoding image link for now
            this.props.addStepsToTutorial(
                tutorialSequence.getSprintExecutionSteps(step1Text, step2Text, cponame, cpotitle, tutorialImage),
                'sprintExecutionScreen'
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

    componentWillReceiveProps(nextProps) {
        if (this.props.uiState.showOverlay === true && nextProps.uiState.showOverlay === false && nextProps.userBlockers.isBlockerTutorialReady === true) {
            const step1Text = this.getLabel('label_tut_blocker_step_1')
            this.props.addStepsToTutorial(
                tutorialSequence.getBlockerSteps(step1Text),
                'blockerAction'
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
            }, 100)
        }
    }

    render() {
        return [
            <MetricsHeaderContainer />,
            <SprintExecutionComponent {...this.props} />
        ];
    }
}

SprintExecutionContainer.propTypes = {};

SprintExecutionContainer.defaultProps = {};

const mapStateToProps = state => {
    return {
        labels: state.labels.labelsList,
        user: state.user,
        stories: state.stories,
        userStories: state.userStories,
        actions: state.actions,
        features: state.features,
        priorities: state.priorities,
        statuses: state.statuses,
        userState: state.userState,
        userBlockers: state.userBlockers,
        uiState: state.uiState,
        prds: state.prds,
        userPrds: state.userPrds,
        tutorial: state.tutorial,
        userMetrics: state.userMetrics,
        metrics: state.metrics,
        userActions: state.userActions,
        teamMembers: state.teamMembers,
    };
};

const mapDispatchToProps = dispatch => ({
    submitAction: (actionOptionId, payload, callback) => {
        dispatch(submitAction(actionOptionId, payload, callback));
    },
    updateUserTasksAction: (payload) => {
        dispatch(updateUserTasksAction(payload));
    },
    setPriorityForTasks: (payload, callback) => {
        dispatch(setPriorityForTasks(payload, callback));
    },
    setUiState: (payload) => {
        dispatch(setUiState(payload))
    },
    updateUserState: (payload) => {
        dispatch(updateUserState(payload));
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
    endTutorial: () => {
        dispatch(endTutorial());
    },
    stopBlockerTutorial: () => {
        dispatch(stopBlockerTutorial());
    },
    endSprint: (payload, callback) => {
        dispatch(endSprint(payload, callback));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SprintExecutionContainer);
