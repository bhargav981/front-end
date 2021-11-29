import kfetch from 'util/kfetch';
import urls from 'constants/urls/urls';
import actionConsts from 'constants/actions/actions';
import { checkIfPresent } from 'util/utilFunctions';


export const postGameStarted = (payload, callback) => (dispatch) => kfetch(urls.GAME_STARTED_API, payload, 'POST')
	.then((response) => {
		dispatch({
			type: actionConsts.UPDATE_USER_STATE,
			payload: {
				isGameStarted: true
			}
		});
		if (checkIfPresent(callback)) {
			callback();
		}
	});
