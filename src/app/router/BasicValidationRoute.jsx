import React from 'react';
import { Route } from 'react-router-dom';

const isIdsValid = (idsObject = {}) => {
	for (const key in idsObject) {
		if (idsObject.hasOwnProperty(key)) {
			const value = +idsObject[key];
			if (!value || value < 0) {
				return false;
			}
		}
	}
	return true;
}

const isRouteValid = (routerProps) => {
	if (!isIdsValid(routerProps.match.params)) {
		return false;
	}
	//add more conditions here
	return true;
}

const BasicValidationRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(routerProps) => (
		isRouteValid(routerProps) === true
			? <Component {...routerProps} />
			: <h2>Basic route validation failed</h2>
	)} />
);

export default BasicValidationRoute;
