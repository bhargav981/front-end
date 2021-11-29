import kfetch from 'util/kfetch';
import urls from 'constants/urls/urls';


export const postPlanningCompleted = () => (dispatch) => kfetch(urls.GAME_API)
	.then((response) => {
		console.log("response", response);
	});
