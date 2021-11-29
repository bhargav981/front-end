import actionConsts from 'constants/actions/actions';

const initializeGameData = (payload) => {
    return {
        type: actionConsts.INIT_GAME_DATA,
        payload
    };
};

export {
    initializeGameData
};