import React from 'react';
import { connect } from 'react-redux';
import ActionResponse from 'components/sprint/execution/actionResponse';
import { setUiState } from 'actions/uiState/actionCreators';

class ActionResponseContainer extends React.Component {

    render() {
        return (
            <ActionResponse {...this.props} />
        );
    }
}

ActionResponseContainer.propTypes = {};

ActionResponseContainer.defaultProps = {};

const mapStateToProps = state => {
    return {
        userActions: state.userActions,
        userEvents: state.userEvents,
        actions: state.actions,
        metrics: state.metrics,
        userState: state.userState,
        prds: state.prds,
        userPrds: state.userPrds,
        userMetrics: state.userMetrics,
        uiState: state.uiState
    };
};

const mapDispatchToProps = dispatch => ({
    setUiState: (payload) => {
        dispatch(setUiState(payload))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionResponseContainer);
