import kfetch from 'util/kfetch';
import urls from 'constants/urls/urls';
import { checkIfPresent } from 'util/utilFunctions';
import { updateUserStories } from 'actions/stories/actionCreators';
import updateUserState from 'actions/userState/actionCreators';
import updateUserSprintReports from 'actions/userSprintReport/actionCreators';


export const endSprint = (payload, callback) => (dispatch) => kfetch(urls.END_SPRINT, payload, 'POST')
	.then((response) => {

		dispatch(
			updateUserState(response.userState)
		);

		dispatch(
			updateUserStories(response.userStories)
		);
		if(checkIfPresent(response.sprintReport)) {
			dispatch(
				updateUserSprintReports(response.sprintReport)
			);
		}

		if(checkIfPresent(callback)) {
			callback();
		}
	});
