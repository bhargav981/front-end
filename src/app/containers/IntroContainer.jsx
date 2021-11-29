import React from 'react';
import { connect } from 'react-redux';
import IntroComponent from 'components/intro/introComponent';
import { setIntroPage,toggleTranscript,enableContinueButton } from 'actions/introActions/actionCreator';
import { postGameStarted } from 'actions/apiAction/postGameStarted';
import { updateCurrentPhase } from 'actions/apiAction/updateCurrentPhase';
import { setWalkthroughState } from 'actions/walkthrough/actionCreators';

class IntroContainer extends React.Component {
    render() {
        return (
            <IntroComponent {...this.props} />
        );
    }
}

IntroContainer.propTypes = {};

IntroContainer.defaultProps = {};

const mapStateToProps = state => {
    return {
        user: state.user,
        customers: state.customers,
        teamMembers: state.teamMembers,
        storylineIntro: state.storylineIntro,
        userState: state.userState,
        uiState: state.uiState
    };
};

const mapDispatchToProps = dispatch => ({
    setIntroPage: (payload) => {
        dispatch(setIntroPage(payload))
    },
    postGameStarted: (payload, callback) => {
        dispatch(postGameStarted(payload, callback));
    },
    updateCurrentPhase: (payload, callback) => {
        dispatch(updateCurrentPhase(payload, callback));
    },
    setWalkthroughState: (walkthroughState) => {
        dispatch(setWalkthroughState(walkthroughState));
    },
    toggleTranscript: (flag) => {
        dispatch(toggleTranscript(flag))
    },
    enableContinueButton: (flag) => {
        console.log('here')
        dispatch(enableContinueButton(flag))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IntroContainer);
