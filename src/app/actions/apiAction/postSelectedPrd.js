import kfetch from 'util/kfetch';
import urls from 'constants/urls/urls';
import { checkIfPresent } from 'util/utilFunctions';
import { storePrdResponse } from 'actions/prds/actionCreators';

export const postSelectedPrd = (payload, callback) => (dispatch) => kfetch(urls.CHOOSE_PRD_API, payload, 'POST')
	.then((response) => {

		dispatch(storePrdResponse(response));

		if (checkIfPresent(callback)) {
			callback();
		}
	});
