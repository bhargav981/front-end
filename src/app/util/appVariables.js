import environment from 'util/environment';
import { checkIfPresent } from 'util/utilFunctions';

console.log(environment);

const appFreshdeskEnabled = () => {
    if (checkIfPresent(environment.REACT_APP_ENABLE_FRESHDESK)) {
        if (environment.REACT_APP_ENABLE_FRESHDESK === 'true') {
            return true;
        }
    }
    return false;
}

const appSentryEnabled = () => {
    if (checkIfPresent(environment.REACT_APP_ENABLE_SENTRY)) {
        if (environment.REACT_APP_ENABLE_SENTRY === 'true') {
            return true;
        }
    }
    return false;
}

const appKfeedbackEnabled = () => {
    if (checkIfPresent(environment.REACT_APP_FEEDBACK_ENABLE)) {
        if (environment.REACT_APP_FEEDBACK_ENABLE === 'true') {
            return true;
        }
    }
    return false;
}

const appTimerEnabled = () => {
    if (checkIfPresent(environment.REACT_APP_TIMER_ENABLE)) {
        if (environment.REACT_APP_TIMER_ENABLE === 'true') {
            return true;
        }
    }
    return false;
}

const getAppEnv = () => {
    if (checkIfPresent(environment.REACT_APP_ENV)) {
        return environment.REACT_APP_ENV;
    }
    return 'develop';
}

const getKalturaLink = () => {
    if (checkIfPresent(environment.REACT_APP_KALTURA_URL)) {
        return environment.REACT_APP_KALTURA_URL;
    }
    return 'https://cdnapisec.kaltura.com/p/2413672/sp/241367200/embedIframeJs/uiconf_id/42816162/partner_id/2413672';
}

export {
    appSentryEnabled,
    getAppEnv,
    appTimerEnabled,
    appKfeedbackEnabled,
    appFreshdeskEnabled,
    getKalturaLink
};