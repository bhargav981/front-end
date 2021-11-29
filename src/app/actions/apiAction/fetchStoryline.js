import kfetch from 'util/kfetch';
import urls from 'constants/urls/urls';
import { initializeGameData } from 'actions/init/actionCreators';
import userDetails from 'reducers/userDetails/userDetails';
import analyticsUtil from 'util/segmentUtil';


export const fetchStoryline = () => (dispatch) => kfetch(urls.GAME_API)
	.then((response) => {
		console.log("response", response);
		 //Segment integartion
		 if(response && response.userDetails){
            analyticsUtil.identify(response.userDetails.uliId,response.userDetails);
            analyticsUtil.group(response.userDetails.groupId,response.userDetails);
        }
		dispatch(initializeGameData(response));
	});
