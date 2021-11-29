import React from 'react';
import { connect } from 'react-redux';
import { setUiState } from 'actions/uiState/actionCreators';
import { fetchLeaderboard } from 'actions/apiAction/leaderboard';
import LeaderboardPopup from 'components/popups/leaderboardPopup';

class LeaderboardContainer extends React.Component {

    componentDidMount() {
        this.props.fetchLeaderboard();
    }

    render() {
        return (
            <LeaderboardPopup {...this.props} />
        );
    }
}

LeaderboardContainer.propTypes = {};

LeaderboardContainer.defaultProps = {};

const mapStateToProps = state => {
    return {
        leaderboard: state.leaderboard,
        userState: state.userState,
        metrics: state.metrics
    };
};

const mapDispatchToProps = dispatch => ({
    setUiState: (payload) => {
        dispatch(setUiState(payload))
    },
    fetchLeaderboard: () => {
        dispatch(fetchLeaderboard());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeaderboardContainer);
