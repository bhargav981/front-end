import React from 'react';
import { connect } from 'react-redux';
import SprintRouter from 'router/SprintRouter';
import updateRoute from 'util/webAppRoutes/updateRoute';
import { endSprint } from 'actions/apiAction/endSprint';
import { checkIfPresent } from 'util/utilFunctions';
import { setWalkthroughState } from 'actions/walkthrough/actionCreators';

class ExecutionContainer extends React.Component {

    componentDidMount() {
        if (
            this.props.userState.currentSprintDay > 10
            && this.props.userState.currentSprintState !== 4
            && checkIfPresent(this.props.userState.currentSprintDay)
        ) {
            this.checkAndCallEndSprint(this.props);
        } else if (this.props.userState.isGameCompleted) {
            this.redirectToSimReport(this.props);
        }
        // else {
        // this.checkSprintStateAndRedirect(this.props);
        // }
    }

    componentWillReceiveProps(nextProps) {
        if (
            nextProps.userState.currentSprintDay > 10
            && nextProps.userState.currentSprintState !== 4
            && nextProps.userState.currentSprintDay !== this.props.userState.currentSprintDay
            && checkIfPresent(this.props.userState.currentSprintDay)
        ) {
            this.checkAndCallEndSprint(nextProps);
        } else if (this.props.userState.currentSprintState !== nextProps.userState.currentSprintState) {
            this.checkSprintStateAndRedirect(nextProps);
        } else if (this.props.userState.isGameCompleted) {
            this.redirectToSimReport(nextProps);
        }
    }

    checkSprintStateAndRedirect = (props) => {
        const sprintState = props.userState.currentSprintState;
        const currentSprintNumber = props.userState.currentSprintNumber || 1;
        const currentSprintDay = props.userState.currentSprintDay || 1;

        switch (sprintState) {
            case 1:
                if (currentSprintNumber === 1 && currentSprintDay === 1) {
                    this.props.setWalkthroughState('executionSprintPlanning');
                }
                else {
                    updateRoute({ route: `/execution/sprint/${currentSprintNumber}/planning` })
                }
                return;

            case 2:
                updateRoute({ route: `/execution/sprint/${currentSprintNumber}/execution` })
                return;

            case 3:
                if (currentSprintNumber === 1 && currentSprintDay === 2) {
                    this.props.setWalkthroughState('executionSprintExecution');
                }
                else {
                    updateRoute({ route: `/execution/sprint/${currentSprintNumber}/execution` })
                }
                return;

            case 4:
                if (currentSprintNumber === 1) {
                    updateRoute({ route: `/execution/sprint/${currentSprintNumber}/report` })
                    this.props.setWalkthroughState('executionSprintLaunch');
                }
                else {
                    updateRoute({ route: `/execution/sprint/${currentSprintNumber}/report` })
                }
                return;

            default:
                return
        }
    }

    checkAndCallEndSprint = (props) => {
        const currentSprintNumber = props.userState.currentSprintNumber;
        props.endSprint(
            {
                sprintId: currentSprintNumber
            },
            () => {
                if (currentSprintNumber === 1) {
                    this.props.setWalkthroughState('executionSprintLaunch')
                }
                else {
                    updateRoute({ route: `/execution/sprint/${currentSprintNumber}/report` })
                }
            }
        );
    }

    redirectToSimReport = (props) => {
        const currentSprintNumber = props.userState.currentSprintNumber || 1;
        if (props.userState.currentSprintState == null || props.userState.isGameCompleted) {
            updateRoute({ route: `/execution/sprint/${currentSprintNumber}/report` })
        }
    }

    render() {

        return (
            <div style={{ width: '100%', height: '100%' }}>
                <SprintRouter {...this.props} />
            </div>
        );
    }
}

ExecutionContainer.propTypes = {};

ExecutionContainer.defaultProps = {};

const mapStateToProps = state => {
    return {
        user: state.user,
        userState: state.userState
    };
};

const mapDispatchToProps = dispatch => ({
    endSprint: (payload, callback) => {
        dispatch(endSprint(payload, callback));
    },
    setWalkthroughState: (walkthroughState) => {
        dispatch(setWalkthroughState(walkthroughState));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExecutionContainer);
