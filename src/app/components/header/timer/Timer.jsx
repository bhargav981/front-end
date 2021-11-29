import React, { useState, useEffect, useRef } from 'react';
import styles from './timer.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
// import Rebase from 're-base';
// import firebase from 'firebase';
import { checkIfPresent } from 'util/utilFunctions';

// let app = null;
// let base = null;
let timer = null;


const Timer = (props) => {
	const uliId = props.userDetails.uliId;
	const totalTime = checkIfPresent(props.userState.totalTimer) ? props.userState.totalTimer : 3600;
	let userTime = checkIfPresent(props.userState.timerValue) ? props.userState.timerValue : totalTime;

	const [timerInitialized, setTimerInitialized] = useState(false);

	const [fetchingTimer, setFetchingTimer] = useState(true);

	const [localTime, setLocalTime] = useState(userTime);
	const [stopTimer, setStopTimer] = useState(props.userState.isGameCompleted);

	const localTimeRef = useRef(localTime);
	localTimeRef.current = localTime;

	const stopTimerRef = useRef(stopTimer);
	stopTimerRef.current = stopTimer;

	const myStyles = getSkin(props.skinGuide);

	useEffect(() => {
		// if (!firebase.apps.length && props.firebase.isFirebaseDataFetched) {
		// 	startFirebaseInitialization(props);
		// 	fetchUserDataOnDataManager();
		// }
		if (!timerInitialized) {
			setTimerInitialized(true);
			if (props.userState.timerValue == null) {
				props.postUserTimer({ timerValue: totalTime });
			} else {
				userTime = props.userState.timerValue;
			}
			setFetchingTimer(false);
			progressUserTimer();
		}
		if (props.userState.isGameCompleted && stopTimer === false) {
			setStopTimer(true);
		}
	});

	const buildTimeLabel = (time) => {
		let minutes = Math.floor(time / 60);
		let seconds = time % 60;
		if (minutes < 10) {
			minutes = (`0${minutes}`).slice(-2);
		}
		seconds = (`0${seconds}`).slice(-2);
		return `${minutes}:${seconds}`;
	}

	// const startFirebaseInitialization = (props) => {
	// 	app = firebase.initializeApp(props.firebase.credentials);
	// 	base = Rebase.createClass(app.database());
	// 	props.setUserState({
	// 		isFirebaseInitialized: true
	// 	});
	// 	console.log("Firebase has been initialized")
	// }

	// const fetchUserDataOnDataManager = () => {
	// 	base.fetch(`users/${uliId}/time`, {
	// 		context: this
	// 	}).then((data) => {
	// 		setFetchingTimer(false);
	// 		if (
	// 			((data !== 0 && !data) || (Object.keys(data).length === 0 && data.constructor === Object))
	// 		) {
	// 			pushUserDataOnDataManager();
	// 		}
	// 		else {
	// 			console.log("User timer data is available", data);
	// 			setLocalTime(data);
	// 			progressUserTimer();

	// 		}
	// 	}).catch((err) => {
	// 		console.error(err);
	// 	});
	// }

	// const postUserDataOnDataManager = () => {
	// 	base.post(`users/${uliId}`, {
	// 		data: {
	// 			time: localTimeRef.current
	// 		}
	// 	}).then(() => {
	// 		if (stopTimerRef.current) {
	// 			console.log("timer is cleared");
	// 			clearTimeout(timer);
	// 			return;
	// 		}
	// 		progressUserTimer();
	// 	}).catch((err) => {
	// 		console.error(err);
	// 	});
	// }

	// const pushUserDataOnDataManager = () => {
	// 	base.push(`users/${uliId}/time`, {
	// 		data: {
	// 			time: totalTime
	// 		}
	// 	}).then(() => {
	// 		setLocalTime(totalTime);
	// 		progressUserTimer();
	// 	}).catch((err) => {
	// 		console.error(err);
	// 	});
	// }

	const timeoutFunction = () => {
		if (localTimeRef.current >= 1) {
			setLocalTime(localTimeRef.current - 1);
			progressUserTimer();
			// postUserDataOnDataManager();
			if (localTimeRef.current % 20 == 0) {
				props.postUserTimer({ timerValue: localTimeRef.current });
			}
		}
		else {
			//Timer expired state
			console.log("Timer expired");
			if (!props.userState.isGameCompleted && !props.userState.timeCompleted) {
				props.postUserTimer({ timerValue: 0 });
				props.updateUserState({
					timeCompleted: true
				});
			}
		}
	}

	const progressUserTimer = () => {
		if (!stopTimerRef.current) {
			timer = setTimeout(timeoutFunction.bind(null, localTimeRef.current), 1000);
		}
	}

	return (
		<div styleName="timer-container" className={css(myStyles.timerContainer)}>
			<div className={css(myStyles.timerContent)} styleName="timer-content">
				{
					props.userState.isGameCompleted
						? "Time Up"
						: fetchingTimer
							? "--:--"
							: buildTimeLabel(localTimeRef.current)
				}
			</div>
		</div>
	);
}

export default applyWrappers(Timer, styles);