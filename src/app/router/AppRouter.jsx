import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import DesktopDashboardContainer from 'containers/DesktopDashboardContainer';

import {
  BrowserView,
  MobileView,
} from 'react-device-detect';

const appRoutes = (
    <div>
        <BrowserView>
            <Route path="/" component={DesktopDashboardContainer} />
        </BrowserView>
        <MobileView>
            <Route path="/" component={DesktopDashboardContainer} />
        </MobileView>
    </div>
);

const AppRouter = () => <HashRouter>{appRoutes}</HashRouter>;

export default AppRouter;
