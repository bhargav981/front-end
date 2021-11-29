import actionConsts from 'constants/actions/actions';

const initialState = {
    labelsList: {
        'simName': "Agile"
    },
    isLabelsFetched: false
};

const labels = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionConsts.INIT_GAME_DATA:
            return Object.assign({}, state, {
                labelsList: {...state.labelsList, ...action.payload.labels}
            })
        default:
            return state;
    }
};

export default labels;