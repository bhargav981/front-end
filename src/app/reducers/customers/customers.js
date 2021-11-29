import actionConsts from 'constants/actions/actions';

const initialState = {
	customerList: []
};


const customers = (state = initialState, action = {}) => {
    switch (action.type) {
		case actionConsts.INIT_GAME_DATA:
			return Object.assign(
				{},
				state,
				{
					customerList: [
						...state.customerList,
						...action.payload.customers
					]	
				}
			);
        default:
            return state;
    }
};

export default customers;