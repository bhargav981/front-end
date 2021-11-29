import kfetch from 'util/kfetch';
import urls from 'constants/urls/urls';
import { storeActionResponse } from 'actions/gameActions/actionCreators';
import {
	formatActionOptionPayload,
	formatActionResponse
} from 'util/actionUtils';
import { setUiState } from 'actions/uiState/actionCreators';
import { setUserPrd } from 'actions/prds/actionCreators';
import { actionOptionIds } from 'config/actions';
// import { replanSprint } from 'actions/apiAction/replanSprint';
import { updateUserStories } from 'actions/stories/actionCreators';
import updateUserState from 'actions/userState/actionCreators';
import { checkIfPresent } from 'util/utilFunctions';

export const submitAction = (actionOptionId, payload, callback = null) => (dispatch, getState) => {
	const selectedActionOption = getState().actions.actionOptionsList.filter(actionOption =>
		actionOption.id === actionOptionId
	)[0];

	const actionOptionRoute = selectedActionOption.route;

	const url = urls['POST_ACTION_URL'].replace(
		'ACTION_OPTIONS_ROUTE_PLACEHOLDER',
		actionOptionRoute
	);

	const body = formatActionOptionPayload(actionOptionId, payload, selectedActionOption, getState);

	dispatch(setUiState({
		showOverlay: true,
		highlightDesktopHeader: true,
		highlightMetricsHeader: false,
		overlayComponent: 'ACTION_LOADER',
		overlayComponentType: 'CENTER'
	}));

	return kfetch(url, body, 'POST')
		.then((response) => {

			response = formatActionResponse(response, body);
			dispatch(storeActionResponse(response));

			if (actionOptionId === actionOptionIds.UPDATE_PRD) {
				dispatch(setUserPrd(payload.prdId))
			}

			if (actionOptionId === actionOptionIds.REPLAN_SPRINT) {
				dispatch(
					updateUserState(response.userState)
				);

				dispatch(
					updateUserStories(response.userStories)
				);

				dispatch(setUiState({
					showReplanSprintPopup: true
				}));
			}

			dispatch(setUiState({
				showOverlay: true,
				overlayComponentType: 'BOTTOM',
				highlightDesktopHeader: true,
				highlightMetricsHeader: false,
				overlayComponent: 'ACTION_REPONSE_COMPONENT'
			}));

			if (checkIfPresent(callback)) {
				callback();
			}

		});
}
