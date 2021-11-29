import kfetch from 'util/kfetch';
import urls from 'constants/urls/urls';
import { checkIfPresent } from 'util/utilFunctions';
import { updateUserStories } from 'actions/stories/actionCreators';
import updateUserState from 'actions/userState/actionCreators';


export const setPriorityForTasks = (payload, callback) => (dispatch) => kfetch(urls.SET_PRIORITY_FOR_TASKS, payload, 'POST')
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
