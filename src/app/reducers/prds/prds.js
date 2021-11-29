import actionConsts from 'constants/actions/actions';

const initialState = {
	prdsList: []
};


const prds = (state = initialState, action = {}) => {
    switch (action.type) {
		case actionConsts.INIT_GAME_DATA:
			return {
				...state,
				prdsList: action.payload.prds
			};
        default:
            return state;
    }
};

export default prds;