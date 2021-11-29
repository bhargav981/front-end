import kfetch from 'util/kfetch';
import urls from 'constants/urls/urls';
import { checkIfPresent } from 'util/utilFunctions';
import { updateUserStories } from 'actions/stories/actionCreators';
import updateUserState from 'actions/userState/actionCreators';

export const replanSprint = (payload, callback) => (dispatch) => kfetch(urls.REPLAN_SPRINT, payload, 'POST')
	.then((response) => {

		dispatch(
			updateUserState(response.userState)
		);

		dispatch(
			updateUserStories(response.userStories)
		);

		if(checkIfPresent(callback)) {
			callback();
		}
	});
