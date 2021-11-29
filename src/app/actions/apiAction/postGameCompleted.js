import kfetch from 'util/kfetch';
import urls from 'constants/urls/urls';
import actionConsts from 'constants/actions/actions';
import { checkIfPresent } from 'util/utilFunctions';

export const postGameCompleted = (payload, callback) => (dispatch) => kfetch(urls.GAME_COMPLETED_API, payload, 'POST')
	.then((response) => {
		dispatch({
			type: actionConsts.UPDATE_USER_STATE,
			payload: {
				isGameCompleted: true
			}
		});
		if (checkIfPresent(callback)) {
			callback();
		}
	});
