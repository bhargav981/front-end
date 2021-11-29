import kfetch from 'util/kfetch';
import urls from 'constants/urls/urls';
import actionConsts from 'constants/actions/actions';
import { checkIfPresent } from 'util/utilFunctions';

export const postUserTimer = (payload, callback) => (dispatch) => kfetch(urls.SAVE_USER_TIMER, payload, 'POST')
	.then((response) => {
		console.log("payload", payload)
		dispatch({
			type: actionConsts.UPDATE_USER_STATE,
			payload: {
				userTimer: payload.timerValue
			}
		});
		if (checkIfPresent(callback)) {
			callback();
		}
	});
