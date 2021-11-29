import kfetch from 'util/kfetch';
import urls from 'constants/urls/urls';
import { updateLeaderboardData, updateLeaderboardStatus } from 'actions/leaderboard/actionCreators';

// const sortFunction = (user1, user2) => {
// 	if (user1.rank < user2.rank) {
// 		return -1;
// 	}
// 	if (user1.rank > user2.rank) {
// 		return 1;
// 	}
// 	return 0;
// }

export const fetchLeaderboard = (payload, callback) => (dispatch) => {
	dispatch(updateLeaderboardStatus(true));

	return kfetch(urls.FETCH_LEADERBOARD)
		.then((response) => {

			// const usersList = response.sort(sortFunction)

			const usersList = response;

			dispatch(
				updateLeaderboardData({
					usersList
				})
			);

		});
}
