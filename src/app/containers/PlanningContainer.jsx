import React from 'react';
import { connect } from 'react-redux';
import Planning from 'components/planning';
import { setUserPrd } from 'actions/prds/actionCreators';
import { postPlanningCompleted } from 'actions/apiAction/postPlanningCompleted';
import { postSelectedPrd } from 'actions/apiAction/postSelectedPrd';
import { updateCurrentPhase } from 'actions/apiAction/updateCurrentPhase';
import { startSprint } from 'actions/apiAction/startSprint';
import { setUiState } from 'actions/uiState/actionCreators';
import { setWalkthroughState } from 'actions/walkthrough/actionCreators';
import { addStepsToTutorial, startTutorial, pauseTutorial } from 'actions/tutorial';
import tutorialSequence from 'constants/tutorialSequence';
import MetricsHeaderContainer from 'containers/MetricsHeaderContainer'
import updateRoute from 'util/webAppRoutes/updateRoute';
import { getUserName } from 'util/utilFunctions';

class PlanningContainer extends React.Component {
    componentDidMount() {
        let currentSprintNumber = this.props.userState.currentSprintNumber || 1;
        if (this.props.userState.isGameCompleted) {
            currentSprintNumber = currentSprintNumber == 1 ? 2 : currentSprintNumber
            updateRoute({ route: `/execution/sprint/${currentSprintNumber - 1}/report` })
        }
        // Start tutorial for planning phase
        if (this.props.uiState.currentPlanningPhaseState === this.props.uiState.planningPhaseStates[0]) {
            const   step1Text = this.getLabel('label_tut_sim_plan_step_1', '', { USER_NAME: getUserName(this.props.userDetails) }),
                    step1Header = this.getLabel('label_kyt_title'),
                    step2Text = this.getLabel('label_tut_sim_plan_step_2', '', { USER_NAME: getUserName(this.props.userDetails) }),
                    step2Header = this.getLabel('label_kyc_title'),
                    tutorialImage = 'https://webassets.knolskape.com/misc/sindhu_anandhakrishnan/2019/07/22/35/cpo.svg',
                    cponame = this.getLabel('label_cpo_name'),
                    cpotitle = this.getLabel('label_cpo_pos')
            // tutorialImage = this.props.teamMembers.teamList.find(item => item.role === 'cpo').avatar
            // Hardcoding image link for now
            this.props.addStepsToTutorial(
                tutorialSequence.getSimPlanningSteps(step1Header, step1Text, step2Header, step2Text, cponame, cpotitle, tutorialImage),
                'planningScreen'
            )
            setTimeout(() => {
                this.props.setUiState({
                    showOverlay: false,
                    overlayComponentType: '',
                    highlightDesktopHeader: false,
                    highlightMetricsHeader: false,
                    overlayComponent: ''
                });
                this.props.startTutorial();
            }, 1000)
        } else {
            this.props.pauseTutorial();
        }
    }

    componentWillReceiveProps(nextProps) {
        let currentSprintNumber = nextProps.userState.currentSprintNumber || 1;
        if (nextProps.userState.isGameCompleted) {
            currentSprintNumber = currentSprintNumber == 1 ? 2 : currentSprintNumber 
            updateRoute({ route: `/execution/sprint/${currentSprintNumber - 1}/report` })
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
        // console.log('in planning container', this.props);

        return (
            <div style={{ width: '100%', height: '100%' }}>
                <MetricsHeaderContainer {...this.props} />
                <Planning {...this.props} />
            </div>
        );
    }
}

PlanningContainer.propTypes = {};

PlanningContainer.defaultProps = {};

const mapStateToProps = state => {
    return {
        labels: state.labels.labelsList,
        user: state.user,
        features: state.features,
        prds: state.prds,
        userPrds: state.userPrds,
        userState: state.userState,
        uiState: state.uiState,
        walkthrough: state.walkthrough,
        tutorial: state.tutorial,
        teamMembers: state.teamMembers,
        userDetails: state.userDetails
    };
};

const mapDispatchToProps = dispatch => ({
    setUserPrd: (selectedPrdId) => {
        dispatch(setUserPrd(selectedPrdId))
    },
    postPlanningCompleted: (payload, callback) => {
        dispatch(postPlanningCompleted(payload, callback));
    },
    postSelectedPrd: (payload, callback) => {
        dispatch(postSelectedPrd(payload, callback));
    },
    updateCurrentPhase: (payload, callback) => {
        dispatch(updateCurrentPhase(payload, callback));
    },
    startSprint: (payload, callback) => {
        dispatch(startSprint(payload, callback));
    },
    setUiState: (payload) => {
        dispatch(setUiState(payload))
    },
    setWalkthroughState: (walkthroughState) => {
        dispatch(setWalkthroughState(walkthroughState));
    },
    addStepsToTutorial: (steps, type) => {
        dispatch(addStepsToTutorial(steps, type));
    },
    startTutorial: () => {
        dispatch(startTutorial());
    },
    pauseTutorial: () => {
        dispatch(pauseTutorial());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlanningContainer);
