import actionConsts from 'constants/actions/actions';

const initialState = {
    isReportDownloading: false,
    reportLink: ''
};


const report = (state = initialState, action = {}) => {
    switch (action.type) {
		case actionConsts.GET_REPORT_LINK:
			return {
				isReportDownloading: false,
				reportLink: action.payload.url
            };
        case actionConsts.SET_IS_DOWNLOADING_REPORT:
            return {
                ...state,
                isReportDownloading: true
            };
        default:
            return state;
    }
};

export default report;