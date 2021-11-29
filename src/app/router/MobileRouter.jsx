import React from 'react';
import { Route, Switch } from 'react-router-dom';

const MobileRouter = () => (
	<Switch>
		<Route render={() => <h3>404, Route Not Found (Mobile view)</h3>} />
	</Switch>
)

export default MobileRouter;