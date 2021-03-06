import { createHashHistory } from 'history';
import analyticsUtil from 'util/segmentUtil';

const history = createHashHistory({
	hashType: 'slash' // the default
});

const formatRouteParamsValue = (key, value) => {
	switch (key) {
		case 'PATH':
			return value.replace(/\/+$/, '');
		default:
			return value;
	}
}

const prepareRoute = (routeObj) => {
	let route = routeObj.route;
	const params = routeObj.params;

	if (params) {
		for (let i = 0; i < params.length; i++) {
			for (var key in params[i]) {
				if (params[i].hasOwnProperty(key)) {
					params[i][key] = formatRouteParamsValue(key, params[i][key]);
					route = route.replace(key, params[i][key]);
				}
			}
		}

	}
	return route;
}

const updateRoute = (routeObj) => {
	//segment Integration
	analyticsUtil.page(routeObj.route);
	const route = prepareRoute(routeObj);
	history.push(route);
}

export const goBackOnePage = () => {
	history.goBack()
}

export default updateRoute;
