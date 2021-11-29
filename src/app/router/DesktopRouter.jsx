import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import BasicValidationRoute from './BasicValidationRoute';
import PlanningWalkthrough from 'commonComponents/walkthrough/planningWalkthrough';
import ExecutionWalkthrough from 'commonComponents/walkthrough/executionWalkthrough';
import BundleLoader from 'commonComponents/bundleLoader';

// const BundleLoader = () => <h3>Loading bundle asfa sf asdf dsaf asdf</h3>

const NotFound = () => <h3>Not Found</h3>

const AsyncIntroContainer = Loadable({
	loader: () => import('containers/IntroContainer'),
	loading: BundleLoader
});

const AsyncPlanningContainer = Loadable({
	loader: () => import('containers/PlanningContainer'),
	loading: BundleLoader
});

const AsyncExecutionContainer = Loadable({
	loader: () => import('containers/ExecutionContainer'),
	loading: BundleLoader
});

//[Todo] change the below function to load only necessary chunks based on current route
setTimeout(() => {
	Loadable.preloadAll();
}, 3000);

const DesktopRouter = (propsFromParent) => (
	<Switch>
		<BasicValidationRoute exact path="/introduction" component={AsyncIntroContainer} />
		<BasicValidationRoute exact path="/planning" component={AsyncPlanningContainer} />
		<BasicValidationRoute path="/execution" component={AsyncExecutionContainer} />
		<BasicValidationRoute path="/walkthrough" component={PlanningWalkthrough} />
		<BasicValidationRoute path="/execution-walkthrough" component={ExecutionWalkthrough} />
		<Route render={() => <NotFound />} />
	</Switch>
)

export default DesktopRouter;