import actionConsts from 'constants/actions/actions';

const updateUserSprintReports = (payload) => {
    return {
        type: actionConsts.UPDATE_USER_SPRINT_REPORTS,
        payload
    };
};

export default updateUserSprintReports;
