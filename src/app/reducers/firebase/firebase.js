import actionConsts from 'constants/actions/actions';

const initialState = {
    //Local Credentials
    credentials: {
        apiKey: "AIzaSyAxaZ5yLSXELKpSwcnDtZvvuAhoE8BOt9I",
        authDomain: "agile-simulation-local.firebaseapp.com",
        databaseURL: "https://agile-simulation-local.firebaseio.com",
        projectId: "agile-simulation-local",
        storageBucket: "agile-simulation-local.appspot.com",
        messagingSenderId: "89877263102",
        appId: "1:89877263102:web:309781f7e47df6ac"
    },
    //Staging Credentials
    // credentials: {
    //     apiKey: "AIzaSyAg_oUal_yPDDxRIb4gtxLwVrsOZbXxgLs",
    //     authDomain: "agile-simulation-staging.firebaseapp.com",
    //     databaseURL: "https://agile-simulation-staging.firebaseio.com",
    //     projectId: "agile-simulation-staging",
    //     storageBucket: "",
    //     messagingSenderId: "843299388358",
    //     appId: "1:843299388358:web:92c8edacfafb0c15"
    // },
    // Live Credentials
    // credentials: {
    //     apiKey: "AIzaSyBZgmXlhWjDhBYZYYL1ieuudg4VkUwEKGU",
    //     authDomain: "agile-simulation-live.firebaseapp.com",
    //     databaseURL: "https://agile-simulation-live.firebaseio.com",
    //     projectId: "agile-simulation-live",
    //     storageBucket: "",
    //     messagingSenderId: "378782393925",
    //     appId: "1:378782393925:web:d4c4d43e17bd26a9"
    // },
    isFirebaseDataFetched: true
};

const firebase = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionConsts.INIT_FIREBASE_DATA:
            return state.set('credentials', action.payload)
                .set('isFirebaseDataFetched', true);
        default:
            return state;
    }
};

export default firebase;