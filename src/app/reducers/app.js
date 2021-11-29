import { combineReducers } from 'redux';

import user from './user/user';
import labels from './labels/labels';
import colorProfiles from './colorProfiles/colorProfiles';
import images from './images/images';
import uiState from './uiState/uiState';
import firebase from './firebase/firebase';
import customers from './customers/customers';
import teamMembers from './teamMembers/teamMembers';
import features from './features/features';
import prds from './prds/prds';
import userPrds from './userPrds/userPrds';
import storylineIntro from './storylineIntro/storylineIntro';
import userMetrics from './userMetrics/userMetrics';
import userActions from './userActions/userActions';
import userEvents from './userEvents/userEvents';
import stories from './stories/stories';
import userStories from './userStories/userStories';
import actions from './actions/actions';
import userState from './userState/userState';
import userDetails from './userDetails/userDetails';
import priorities from './priorities/priorities';
import statuses from './statuses/statuses';
import metrics from './metrics/metrics';
import userSprintReports from './userSprintReports/userSprintReports';
import userBlockers from './userBlockers/userBlockers';
import walkthrough from './walkthrough/walkthrough';
import leaderboard from './leaderboard/leaderboard';
import tutorial from './tutorial';
import report from './report/report';

const app = combineReducers({
    user,
    labels,
    colorProfiles,
    images,
    uiState,
    firebase,
    customers,
    teamMembers,
    features,
    prds,
    userPrds,
    storylineIntro,
    userMetrics,
    userActions,
    userEvents,
    stories,
    userStories,
    actions,
    userState,
    userDetails,
    priorities,
    statuses,
    metrics,
    userSprintReports,
    userBlockers,
    walkthrough,
    leaderboard,
    tutorial,
    report
});

export default app;
