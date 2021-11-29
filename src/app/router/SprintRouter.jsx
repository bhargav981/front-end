import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import BundleLoader from 'commonComponents/bundleLoader';

import BasicValidationRoute from './BasicValidationRoute';

// const BundleLoader = () => <h3>Loading bundle</h3>

const NotFound = () => <h3>Not Found</h3>

const AsyncSprintPlanningContainer = Loadable({
	loader: () => import('containers/SprintPlanningContainer'),
	loading: BundleLoader
});

const AsyncSprintExecutionContainer = Loadable({
	loader: () => import('containers/SprintExecutionContainer'),
	loading: BundleLoader
});

const AsyncSprintReportContainer = Loadable({
	loader: () => import('containers/SprintReportContainer'),
	loading: BundleLoader
});

const SprintRouter = (propsFromParent) => (
	<Switch>
		<BasicValidationRoute exact path={`${propsFromParent.match.path}/sprint/:sprintId/planning`} component={AsyncSprintPlanningContainer} />
		<BasicValidationRoute exact path={`${propsFromParent.match.path}/sprint/:sprintId/execution`} component={AsyncSprintExecutionContainer} />
		<BasicValidationRoute exact path={`${propsFromParent.match.path}/sprint/:sprintId/report`} component={AsyncSprintReportContainer} />
		<Route render={() => <NotFound />} />
	</Switch>
)

export default SprintRouter;