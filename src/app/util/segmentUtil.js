/* eslint-disable */
const analyticsUtil  = {
	identify : (id, data) => {
		try {
			analytics.identify(id, data)
		} catch(err) {
			if (window.Sentry) {
				window.Sentry.captureException(err);
			} else {
				console.log('no sentry found');
			}
		}
	},
	group: (id, data) => {
		try {
			analytics.group(id, data);
		} catch(err) {
			if (window.Sentry) {
				window.Sentry.captureException(err);
			} else {
				console.log('no sentry found');
			}
		}
	},
	page: (pageName) => {
		if (pageName == '/') {
			pageName = 'home';
		}
		try {
			analytics.page(pageName);
		} catch(err) {
			if (window.Sentry) {
				window.Sentry.captureException(err);
			} else {
				console.log('no sentry found');
			}
		}
	},
	track: (eventName, data) => {
		try {
			analytics.track(eventName, data);
		} catch(err) {
			if (window.Sentry) {
				window.Sentry.captureException(err);
			} else {
				console.log('no sentry found');
			}
		}
	},
	reset: () => {
		try {
			analytics.reset();
		} catch(err) {
			if (window.Sentry) {
				window.Sentry.captureException(err);
			} else {
				console.log('no sentry found');
			}
		}
	}
};
export default analyticsUtil;