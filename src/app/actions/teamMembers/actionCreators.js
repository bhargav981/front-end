import actionConsts from 'constants/actions/actions';

const initializeTeamMembers = (payload) => {
    return {
        type: actionConsts.INIT_TEAM_MEMBERS,
        payload
    };
};

export {
    initializeTeamMembers
};
