import kfetch from 'util/kfetch';
import urls from 'constants/urls/urls';
import { checkIfPresent } from 'util/utilFunctions';
import { updateUserStories } from 'actions/stories/actionCreators';
import updateUserState from 'actions/userState/actionCreators';


export const addTasksToSprint = (payload, callback) => (dispatch) => kfetch(urls.ADD_TASK_TO_SPRINT, payload, 'POST')
	.then((response) => {

		dispatch(
			updateUserState(response.userState)
		);

		dispatch(
			updateUserStories(response.userStories)
		);

		if (checkIfPresent(callback)) {
			callback();
		}
	});
