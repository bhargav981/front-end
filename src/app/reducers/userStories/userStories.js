import actionConsts from 'constants/actions/actions';
import _ from 'lodash';

const initialState = {
	userStoryList: []
};


const userStories = (state = initialState, action = {}) => {
	switch (action.type) {
		case actionConsts.INIT_GAME_DATA:
			return {
				...state,
				userStoryList: updateUserStoriesWithBlockerFlags(action.payload.userStories)
			};
		case actionConsts.UPDATE_USER_TASKS:
			return {
				...state,
				userStoryList: updateUserStoryProperties(state.userStoryList, action.payload)
			}
		case actionConsts.UPDATE_USER_STORIES:
			return {
				...state,
				userStoryList: updateUserStoriesFromResponse(state.userStoryList, action.payload)
			}
		case actionConsts.STORE_ACTION_RESPONSE:
			return {
				...state,
				userStoryList: updateUserStoriesFromAction(state.userStoryList, action.payload)
			};
		default:
			return state;
	}
};

const updateUserStoryProperties = (userStoryList, payload) => {
	const updatedUserStoryList = userStoryList.map((eachUserStory) => {
		if (payload.storyId === eachUserStory.storyId) {
			return {
				...eachUserStory,
				...payload
			}
		}
		return eachUserStory;
	});
	return updatedUserStoryList;
}

const updateUserStoriesFromAction = (userStoryList, payload) => {

	const userStoriesPayloadObj = _.keyBy(payload.userStories, 'storyId');

	const updatedUserStoryList = userStoryList.map((eachUserStory) => {
		if (userStoriesPayloadObj[eachUserStory.storyId]) {
			return {
				...eachUserStory,
				...userStoriesPayloadObj[eachUserStory.storyId],
				showBlocker: userStoriesPayloadObj[eachUserStory.storyId].blockerId != null ? true : false,
				showBlockerResolved: eachUserStory.showBlocker && userStoriesPayloadObj[eachUserStory.storyId].blockerId == null ? true : false
			}
		}
		return eachUserStory;
	});

	return updatedUserStoryList;
}

const updateUserStoriesWithBlockerFlags = (userStoryList) => {

	const updatedUserStoryList = userStoryList.map((eachUserStory) => {
		return {
			...eachUserStory,
			showBlocker: eachUserStory.blockerId != null ? true : false,
			showBlockerResolved: false
		}
	});

	return updatedUserStoryList;
}

const updateUserStoriesFromResponse = (userStoryList, payload) => {

	const userStoriesPayloadObj = _.keyBy(payload, 'storyId');

	const updatedUserStoryList = userStoryList.map((eachUserStory) => {
		if (userStoriesPayloadObj[eachUserStory.storyId]) {
			return {
				...eachUserStory,
				...userStoriesPayloadObj[eachUserStory.storyId]
			}
		}
		return eachUserStory;
	});

	return updatedUserStoryList;
}

export default userStories;