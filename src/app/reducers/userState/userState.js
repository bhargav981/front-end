import actionConsts from 'constants/actions/actions';

const initialState = {
	selectedStoryId: null,
	mvpAchieved: false,
	daysCompleted: false,
	timeCompleted: false,
	simTimeCompleted: false,
	totalDays: 50,
	totalDaysInSprint: 10,
	replanSprintMinDays: 2,
	userStateDataFetched: false,
	returnType: "normal",
	defaultTimerValue: 3600,
	taskCount: 0,
	storyPointCount: 0,
	taskArray: [],
	isFeedbackEnabled: false,
	isLeaderboardEnabled: true,
	isFinalReportEnabled: true
};


const userState = (state = initialState, action = {}) => {
	switch (action.type) {
		case actionConsts.INIT_GAME_DATA:
			return {
				...state,
				...action.payload.userState,
				totalTimer: action.payload.group.timerValue,
				isTimerEnabled:action.payload.group.isTimerEnabled,
				isFeedbackEnabled: action.payload.group.isFeedbackEnabled == null ? false : action.payload.group.isFeedbackEnabled,
				isLeaderboardEnabled: action.payload.group.isLeaderboardEnabled == null ? false : action.payload.group.isLeaderboardEnabled,
				isFinalReportEnabled: action.payload.group.isFinalReportEnabled == null ? false : action.payload.group.isFinalReportEnabled,
				userStateDataFetched: true,
				returnType: action.payload.returnType
			}
		case actionConsts.UPDATE_USER_STATE:
			return {
				...state,
				...action.payload
			}
		case actionConsts.STORE_ACTION_RESPONSE:
			return {
				...state,
				...action.payload.userState
			};
		case actionConsts.UPDATE_DAY_DETAILS:
			return {
				...state,
				currentSprintNumber: action.payload.sprintNumber,
				currentSprintDay: action.payload.sprintDay,
				currentDay: state.currentDay + 1
			};
		default:
			return state;
	}
};

export default userState;