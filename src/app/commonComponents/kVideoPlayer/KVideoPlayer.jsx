import React, { useEffect } from 'react';
import styles from './kVideoPlayer.module.sass';
import getSkin from './skin.js';
// import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import { getKalturaLink } from 'util/appVariables';
import ReactDependentScript from 'react-dependent-script';
// import { checkIfPresent } from 'util/utilFunctions';

const VideoPlayer = (props) => {

	const playerReadyCallback = (playerID) => {
		const {
			onUpdateProgress = (progress, is_completed = false) => console.log("onUpdateProgress", progress, is_completed),
			onCompletion = () => console.log("onCompletion"),
			progress = { progress: 0, is_completed: false }
		} = props; /*with default props*/

		var kdp = document.getElementById(playerID);
		kdp.kBind('playerReady', function (event) {

			if (progress.progress) {
				kdp.sendNotification("doSeek", parseFloat(progress.progress));
			}

			kdp.kBind('playerPaused', function (event) {
				const progress = kdp.evaluate('{video.player.currentTime}');
				const is_completed = kdp.triggeredEndDone;
				console.log("event: video paused");
				onUpdateProgress(progress, is_completed);
			});

			kdp.kBind('playerPlayEnd', function (event) {
				console.log("event: video end");
				const progress = kdp.evaluate('{video.player.currentTime}');
				const is_completed = kdp.triggeredEndDone;
				onUpdateProgress(progress, true);
				props.onVideoComplete();
			});
		});

	};

	useEffect(() => {
		if (window.kWidget) {
			window.mw.setConfig("EmbedPlayer.DisableContextMenu", true)
			window.kWidget.thumbEmbed({
				'targetId': `${props.playerKey}-${props.kalturaEntryId}`,
				'wid': '_2413672',
				'uiconf_id': '42816162',
				'entry_id': props.kalturaEntryId,
				'flashvars': {
					'streamerType': 'hdnetworkmanifest'
				},
				'readyCallback': playerReadyCallback
			});
		}
	}, [props.kalturaEntryId]);

	return (
		<div
			id={`${props.playerKey}-${props.kalturaEntryId}`}
			style={{
				height: '100%',
				width: '100%'
			}}
		>
		</div>
	);
}

const KVideoPlayer = (props) => {

	const myStyles = getSkin(props.skinGuide);
	const renderLoader = () => {
		return (
			<div
				style={{
					height: props.playerHeight || '952px',
					width: props.playerWidth || '480px'
				}}
			>
				Loading...
            </div>
		);
	}

	return (
		<ReactDependentScript
			loadingComponent={renderLoader()}
			scripts={[getKalturaLink()]}
		>
			<div
				key={props.propRef}
				style={{
					height: props.playerHeight || '100%',
					width: props.playerWidth || '100%'
				}}
			>
				<VideoPlayer
					{...props}
					kalturaEntryId={props.kalturaVideoId}
					playerKey={props.propRef}
				/>
			</div>
		</ReactDependentScript>
	);
}

export default applyWrappers(KVideoPlayer, styles);