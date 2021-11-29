import environment from 'util/environment';
import {
    getAppEnv
} from 'util/appVariables';

const initializeSentry = (sentryScopeObj) => {
	try{
		window.Sentry.init({
			environment: environment.REACT_APP_SENTRY_ENVIRONMENT,
			dsn: environment.REACT_APP_SENTRY_DSN,
			release: environment.REACT_APP_SENTRY_RELEASE
		});
		window.Sentry.configureScope((scope) => {
			scope.setUser(sentryScopeObj);
		});
	}catch(e){
		console.log(e);
	}
}

export default initializeSentry;