import actionConsts from 'constants/actions/actions';

const initialState = {
	sprintReportList: []
};

const userSprintReports = (state = initialState, action = {}) => {
	switch (action.type) {
		case actionConsts.INIT_GAME_DATA:
			return {
				...state,
				sprintReportList: action.payload.userSprintReports
			}
		case actionConsts.UPDATE_USER_SPRINT_REPORTS:
			return {
				...state,
				sprintReportList: updateSprintReportList(state.sprintReportList, action.payload)
			}
		default:
			return state;
	}
};

const updateSprintReportList = (sprintReportList, sprintReport) => {
	let reportAlreadyPresent = false;

	const updatedSprintReportList = sprintReportList.map((eachReport) => {
		if(eachReport.sprintNumber === sprintReport.sprintNumber) {
			reportAlreadyPresent = true;
			return {
				...eachReport,
				...sprintReport
			}
		}
		return eachReport;
	});	

	if(!reportAlreadyPresent) {
		updatedSprintReportList.push(sprintReport);
	}

	return updatedSprintReportList;
}

export default userSprintReports;