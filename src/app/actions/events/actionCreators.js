import actionConsts from 'constants/actions/actions';

const updateEventsToBeShownCount = (count) => {
    return {
        type: actionConsts.UPDATE_EVENTS_TO_BE_SHOWN_COUNT,
        count
    };
};

export {
    updateEventsToBeShownCount
};
