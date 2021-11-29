import kfetch from 'util/kfetch';
import urls from 'constants/urls/urls';
import { checkIfPresent } from 'util/utilFunctions';
import updateUserState from 'actions/userState/actionCreators';


export const startSprint = (payload, callback) => (dispatch) => kfetch(urls.START_SPRINT, payload, 'POST')
	.then((response) => {
		dispatch(
			updateUserState(response.userState)
		);
		if(checkIfPresent(callback)) {
			callback();
		}
	});
