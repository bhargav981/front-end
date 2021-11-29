import actionConsts from 'constants/actions/actions';

const initialState = {
	featuresList: []
};


const features = (state = initialState, action = {}) => {
    switch (action.type) {
		case actionConsts.INIT_GAME_DATA:
			return {
				...state,
				featuresList: action.payload.features
			};
        default:
            return state;
    }
};

export default features;