import actionConsts from 'constants/actions/actions';

const initialState = {
	actionsList: [],
	actionOptionsList: []
};

const actions = (state = initialState, action = {}) => {
    switch (action.type) {
		case actionConsts.INIT_GAME_DATA:
			return {
				...state,
				actionsList: action.payload.actions,
				actionOptionsList: action.payload.actionOptions
			};
        default:
            return state;
    }
};

export default actions;