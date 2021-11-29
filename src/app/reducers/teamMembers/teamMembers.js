import actionConsts from 'constants/actions/actions';
import { mergeArraysOfObjects, roundOfKeysInArray } from 'util/utilFunctions';

const initialState = {
	teamList: []
};


const teamMembers = (state = initialState, action = {}) => {
	switch (action.type) {
		case actionConsts.INIT_GAME_DATA:
			return {
				...state,
				teamList: roundOfKeysInArray(
					action.payload.teamMembers,
					['skill', 'morale']
				)
			};

		case actionConsts.STORE_ACTION_RESPONSE:
			return {
				...state,
				teamList: mergeArraysOfObjects(
					state.teamList,
					roundOfKeysInArray(
						action.payload.userTeamMembers,
						['skill', 'morale']
					),
					'teamMemberId'
				)
			};

		default:
			return state;
	}
};

export default teamMembers;