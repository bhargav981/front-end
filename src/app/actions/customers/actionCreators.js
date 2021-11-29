import actionConsts from 'constants/actions/actions';

const initializeCustomers = (payload) => {
    return {
        type: actionConsts.INIT_CUSTOMERS,
        payload
    };
};

export {
    initializeCustomers
};
