import actionConsts from 'constants/actions/actions';

const updateLeaderboardData = (payload) => {
    return {
        type: actionConsts.UPDATE_LEADERBOARD_DATA,
        payload
    };
};

const updateLeaderboardStatus = (status) => {
    return {
        type: actionConsts.UPDATE_LEADERBOARD_STATUS,
        status
    };
};

export {
    updateLeaderboardData,
    updateLeaderboardStatus
};
