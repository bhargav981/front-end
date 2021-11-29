const formatActionOptionPayload = (actionOptionId, payload, selectedActionOption, getState) => {
	switch (selectedActionOption.type) {
		case 'default':
			return {
				actionOptionId
			};

		case 'updatePrd':
			return {
				actionOptionId,
				...payload
			};

		case 'replanSprint':
			return {
				actionOptionId,
				...payload
			};

		default:
			return {
				actionOptionId
			};
	}
}

const formatActionResponse = (response, body) => {
	return {
		...response,
		actionOptionId: body.actionOptionId
	};
}

export {
	formatActionOptionPayload,
	formatActionResponse
}