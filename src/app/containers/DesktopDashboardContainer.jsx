import React from 'react';
import { connect } from 'react-redux';
import Loader from 'svgComponents/loader';
import DesktopHeader from 'components/header/desktopHeader';
import DesktopFooter from 'components/footer/desktopFooter';
import DesktopRouter from 'router/DesktopRouter';
import Tutorial from 'components/tutorial';
import initializeFreshdesk from 'util/freshdesk';
import initializeSentry from 'util/sentry';
import {
    appFreshdeskEnabled,
    appSentryEnabled,
    appKfeedbackEnabled
} from 'util/appVariables';
import {
    checkIfPresent
} from 'util/utilFunctions';
import {
    initializeFeedback,
    checkIfFeedbackIsCompleted
} from 'util/feedback';
import { setUiState } from 'actions/uiState/actionCreators';
import { updateUserStories } from 'actions/stories/actionCreators';
import setUserState from 'actions/user/actionCreators';
import { fetchStoryline } from 'actions/apiAction/fetchStoryline';
import updateRoute from 'util/webAppRoutes/updateRoute';
import Overlay from 'commonComponents/overlay';
import { endSprint } from 'actions/apiAction/endSprint';
import { replanSprint } from 'actions/apiAction/replanSprint';
import updateUserState from 'actions/userState/actionCreators';
import { postGameCompleted } from 'actions/apiAction/postGameCompleted';
import { postUserTimer } from 'actions/apiAction/postUserTimer';
import { getUserMetricsForMetricsKey } from 'util/utilFunctions';
import WalkthroughManager from 'commonComponents/walkthrough/walkthroughManager';
import { setWalkthroughState } from 'actions/walkthrough/actionCreators';
import { submitAction } from 'actions/apiAction/submitAction';
import { startTutorial, pauseTutorial, endTutorial, updateStepNumber } from 'actions/tutorial';
import { addTasksToSprint } from 'actions/apiAction/addTasksToSprint';
import analyticsUtil from 'util/segmentUtil';

class DesktopDashboardContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate(prevProps) {
        this.initializeExternalDependencies(this.props);
        this.checkSimCondition(this.props);
        return;
    }

    componentWillMount() {
        this.checkAndRedirectToIntroduction(this.props);
        this.checkSimCondition(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.checkAndRedirectToIntroduction(nextProps);
    }

    checkAndRedirectToIntroduction = (props) => {
        if (props.location.pathname === '/') {
            updateRoute({ route: '/introduction' });
        }
    }

    checkLoadingCondition = (props) => {
        return (
            !props.user.userDataFetched
            || !props.userState.userStateDataFetched
            || !props.userDetails.userDetailsDataFetched
        );
    }

    checkSimCondition = (props) => {
        const mvpUserMetrics = getUserMetricsForMetricsKey(
            props.metrics.metricsList,
            props.userMetrics.userMetricsList,
            'MVP'
        );
        if (
            checkIfPresent(mvpUserMetrics)
            && mvpUserMetrics.value >= 100
            && props.uiState.showOverlay === false
            && props.userState.isGameCompleted === false
            && props.userState.mvpAchieved === false
        ) {
            props.updateUserState({
                mvpAchieved: true
            });
            this.launchProductConfirmation(props);
        }
        if (
            checkIfPresent(props.userState.currentDay)
            && props.userState.currentDay >= props.userState.totalDays
            && props.uiState.showOverlay === false
            && props.userState.isGameCompleted === false
            && props.userState.daysCompleted === false
        ) {
            props.updateUserState({
                daysCompleted: true
            });
            this.launchProductConfirmation(props);
        }
        if (
            props.userState.timeCompleted
            && props.uiState.showOverlay === false
            && props.userState.isGameCompleted === false
            && props.userState.simTimeCompleted === false
        ) {
            props.updateUserState({
                simTimeCompleted: true
            });
            props.endTutorial();
            this.launchProductConfirmation(props);
        }
    }

    launchProductConfirmation = (props) => {
        if (!props.userState.isGameCompleted && props.uiState.showOverlay === false) {
            props.setUiState({
                showOverlay: true,
                overlayComponentType: 'CENTER',
                highlightDesktopHeader: true,
                highlightMetricsHeader: false,
                overlayComponent: 'PRODUCT_LAUNCH_CONFIRMATION',
                showOverlayOverWalkthrough: true
            });
        }
    }

    startSentryInitialization = (props) => {
        const sentryScopeObj = {
            "emailId": props.userDetails.email,
            "groupId": props.userDetails.groupId,
            "firstName": props.userDetails.firstName,
            "lastName": props.userDetails.lastName,
            "uliId": props.userDetails.uliId,
        };

        initializeSentry(sentryScopeObj);
        this.props.setUserState({
            isSentryInitialized: true
        });
    }

    startFreshdeskInitialization = (props) => {
        const emailID = checkIfPresent(props.userDetails.email)
            ? props.userDetails.email
            : '';

        initializeFreshdesk(emailID);
        this.props.setUserState({
            isFreshdeskInitialized: true
        });
    }

    startKfeedbackInitialization = (props) => {
        const uliId = this.props.userDetails.uliId;
        const grpId = this.props.userDetails.groupId;

        if (checkIfPresent(uliId) && checkIfPresent(grpId)) {
            initializeFeedback('commonDB', uliId,
                grpId, this.setFeedbackCompleted);
        }
        checkIfFeedbackIsCompleted(this.setFeedbackCompleted);
        this.props.setUserState({
            isKfeedbackInitialized: true
        });
    }

    setFeedbackCompleted = () => {
        this.props.setUserState({
            isFeedbackSubmitInProgress: false,
            isKfeedbackSubmitted: true
        })
    }

    componentDidMount() {
        this.props.fetchStoryline();
        this.initializeExternalDependencies(this.props);
        return;
    }

    initializeExternalDependencies = (props) => {
        if (!this.checkLoadingCondition(props)) {
            if (appFreshdeskEnabled() && !this.props.user.isFreshdeskInitialized && this.props.userState.returnType.toLowerCase() == 'normal') {
                this.startFreshdeskInitialization(props)
                // console.log("Freshdesk has been initialized");
            }
            if (appSentryEnabled() && !this.props.user.isSentryInitialized) {
                this.startSentryInitialization(this.props);
                console.log("Sentry has been initialized");
            }
            if (appKfeedbackEnabled() && !this.props.user.isKfeedbackInitialized) {
                this.startKfeedbackInitialization();
                // console.log("Kfeedback is initialized and status is checked");
            }
        }
    }

    render() {
        let baseRouterContainerStyle = {
            width: '100%',
            height: 'calc(100% - 60px)'
        }

        if (this.props.uiState.showOverlay) {
            baseRouterContainerStyle = {
                ...baseRouterContainerStyle,
                filter: 'blur(3px)'
            };
        }

        if (this.checkLoadingCondition(this.props)) {
            return (
                <div className="base-app-box flex-box-center">
                    <Loader fillColor="#d8d8d8" />
                </div>
            );
        }

        if (
            this.props.walkthrough.walkthroughState !== null
            && (
                this.props.uiState.showOverlay === false
                || this.props.uiState.showOverlayOverWalkthrough === true
            )
        ) {
            return (
                <div className="base-app-box">
                    <DesktopHeader
                        {...this.props}
                    />
                    <div style={baseRouterContainerStyle}>
                        <WalkthroughManager {...this.props} />
                    </div>
                    {
                        this.props.uiState.showOverlay
                            ? <Overlay {...this.props} />
                            : null
                    }
                    <DesktopFooter
                        {...this.props}
                    />
                </div>
            );
        }

        return (
            <div className="base-app-box">
                <DesktopHeader
                    {...this.props}
                />
                <div style={baseRouterContainerStyle}>
                    <DesktopRouter />
                </div>
                <Tutorial
                    {...this.props}
                    tutorial={this.props.tutorial}
                    pauseTutorial={this.props.pauseTutorial}
                    updateStepNumber={this.props.updateStepNumber}
                    endTutorial={this.props.endTutorial}
                />
                {
                    this.props.uiState.showOverlay
                        ? <Overlay {...this.props} />
                        : null
                }
                <DesktopFooter
                    {...this.props}
                />
            </div>
        );
    }
}

DesktopDashboardContainer.propTypes = {};

DesktopDashboardContainer.defaultProps = {};

const mapStateToProps = state => {
    // console.log(state);

    return {
        user: state.user,
        firebase: state.firebase,
        userMetrics: state.userMetrics,
        metrics: state.metrics,
        uiState: state.uiState,
        userState: state.userState,
        userDetails: state.userDetails,
        walkthrough: state.walkthrough,
        tutorial: state.tutorial,
        teamMembers: state.teamMembers,
        customers: state.customers,
        labels: state.labels,
        storylineIntro: state.storylineIntro,
        userStories: state.userStories,
        priorities: state.priorities,
    }
};

const mapDispatchToProps = dispatch => ({
    setUserState: (payload) => {
        dispatch(setUserState(payload))
    },
    setUiState: (payload) => {
        dispatch(setUiState(payload))
    },
    updateUserStories: (payload) => {
        dispatch(updateUserStories(payload))
    },
    fetchStoryline: () => {
        dispatch(fetchStoryline());
    },
    endSprint: (payload, callback) => {
        dispatch(endSprint(payload, callback));
    },
    updateUserState: (payload) => {
        dispatch(updateUserState(payload));
    },
    postGameCompleted: (payload, callback) => {
        dispatch(postGameCompleted(payload, callback));
    },
    setWalkthroughState: (walkthroughState) => {
        dispatch(setWalkthroughState(walkthroughState));
    },
    replanSprint: (payload, callback) => {
        dispatch(replanSprint(payload, callback));
    },
    submitAction: (actionOptionId, payload, callback) => {
        dispatch(submitAction(actionOptionId, payload, callback));
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
    endTutorial: () => {
        dispatch(endTutorial())
    },
    addTasksToSprint: (payload, callback) => {
        dispatch(addTasksToSprint(payload, callback));
    },
    postUserTimer: (payload, callback) => {
        dispatch(postUserTimer(payload, callback));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DesktopDashboardContainer);
