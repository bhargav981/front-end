import kfetch from 'util/kfetch';
import urls from 'constants/urls/urls';
import actionConsts from 'constants/actions/actions';
import {checkIfPresent} from 'util/utilFunctions';



export const updateCurrentPhase = (payload, callback) => (dispatch) => kfetch(urls.CURRENT_PHASE_API, payload, 'PUT')
	.then((response) => {
		dispatch({
			type: actionConsts.UPDATE_USER_STATE,
			payload: {
				currentPhaseId: 1
			}
		});
		if(checkIfPresent(callback)) {
			callback();
		}
	});
