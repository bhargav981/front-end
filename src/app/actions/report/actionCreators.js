import actionConsts from 'constants/actions/actions';

const setReportUrl = (payload) => {
    return {
        type: actionConsts.GET_REPORT_LINK,
        payload
    };
};

const setIsDownloading = (flag) => {
    return {
        type: actionConsts.SET_IS_DOWNLOADING_REPORT,
        payload: flag
    };
}

export {
    setReportUrl,
    setIsDownloading
};
