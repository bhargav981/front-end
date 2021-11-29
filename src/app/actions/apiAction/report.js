import kfetch from 'util/kfetch';
import urls from 'constants/urls/urls';
import { setReportUrl } from 'actions/report/actionCreators';


export const fetchReportLink = () => (dispatch) => kfetch(urls.GET_PDF)
	.then((response) => {
		dispatch(setReportUrl(response));
		window.location.href = response.url;
	});
