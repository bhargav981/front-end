import React from 'react';
import { connect } from 'react-redux';
import Event from 'components/sprint/execution/event/Event';
import { setUiState } from 'actions/uiState/actionCreators';
import { updateEventsToBeShownCount } from 'actions/events/actionCreators';

class EventContainer extends React.Component {

    render() {
        return (
            <Event {...this.props} />
        );
    }
}

EventContainer.propTypes = {};

EventContainer.defaultProps = {};

const mapStateToProps = state => {
    return {
        userEvents: state.userEvents,
        metrics: state.metrics,
        uiState: state.uiState
    };
};

const mapDispatchToProps = dispatch => ({
    setUiState: (payload) => {
        dispatch(setUiState(payload))
    },
    updateEventsToBeShownCount: (count) => {
        dispatch(updateEventsToBeShownCount(count))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventContainer);
