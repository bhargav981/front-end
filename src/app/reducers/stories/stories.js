import actionConsts from 'constants/actions/actions';

const initialState = {
	storyList: []
};


const stories = (state = initialState, action = {}) => {
    switch (action.type) {
		case actionConsts.INIT_GAME_DATA:
			return {
				...state,
				storyList: action.payload.stories
			};
        default:
            return state;
    }
};

export default stories;