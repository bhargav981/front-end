import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppProvider from './AppProvider';
import "@babel/polyfill";
import * as serviceWorker from './serviceWorker';
import {initSegment} from './segment';
const rootElement = document.getElementById('root');
ReactDOM.render(<AppProvider />, rootElement);

if (module.hot) {
	module.hot.accept('./AppProvider', () => {
		const NextAppProvider = require('./AppProvider').default
		ReactDOM.render(
			<NextAppProvider />,
			rootElement
		)
	})
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
initSegment();
