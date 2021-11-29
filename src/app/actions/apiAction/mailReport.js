import kfetch from 'util/kfetch';
import urls from 'constants/urls/urls';
import actionConsts from 'constants/actions/actions';
import { checkIfPresent } from 'util/utilFunctions';
import analyticsUtil from 'util/segmentUtil';

export const postMailReport = (payload, callback) => (dispatch) => kfetch(urls.MAIL_REPORT, payload, 'POST')
	.then((response) => {
		if(response.success == 1) {
			//Segment integartion
			analyticsUtil.track("SEND_MAIL_SUCCESSFULL",{ body: payload });

			dispatch({
				type: actionConsts.SET_UI_STATE,
				payload: {
					isMailBeingSent: false,
					showMailStatusMessage: true,
					mailSentSuccessfully: true
				}
			});
		} else  {
			//Segment integartion
			analyticsUtil.track("SEND_MAIL_FAILED", { body: payload });

			dispatch({
				type: actionConsts.SET_UI_STATE,
				payload: {
					isMailBeingSent: false,
					showMailStatusMessage: true,
					mailSentSuccessfully: false
				}
			});
		}

		if(checkIfPresent(callback)) {
			callback();
		}
		setTimeout(() => {
			dispatch({
				type: actionConsts.SET_UI_STATE,
				payload: {
					isMailBeingSent: false,
					showMailStatusMessage: false,
					mailSentSuccessfully: false
				}
			});
		}, 5000);
	});
