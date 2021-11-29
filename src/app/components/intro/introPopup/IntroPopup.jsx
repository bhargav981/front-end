import React, { useState, useRef } from 'react';
import styles from './introPopup.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import Close from 'svgComponents/close';
import ReactPlayer from 'react-player';
import DownArrow from 'svgComponents/downArrow';
import UpArrow from 'svgComponents/upArrow';
import PlayingConditionsBox from 'components/intro/playingConditions/playingConditionsBox';
import KVideoPlayer from 'commonComponents/kVideoPlayer';

const IntroPopup = (props) => {

	const [transcriptOpen, setTranscriptOpen] = useState(false);
	const [videoWidth, setVideoWidth] = useState(540);
	const [videoHeight, setVideoHeight] = useState(320);
	const scrollRef = useRef(null);

	const onScrollOfContainer = () => {
		console.log(scrollRef.current.scrollTop);
		setVideoWidth(540 - scrollRef.current.scrollTop < 300 ? 300 : 540 - scrollRef.current.scrollTop);
		setVideoHeight(320 - scrollRef.current.scrollTop < 180 ? 180 : 320 - scrollRef.current.scrollTop);
	}

	const toggleTranscript = () => {
		setTranscriptOpen(!transcriptOpen);
	}

	const closePopup = () => {
		props.setUiState({
			showOverlay: false,
			showOverlayOverWalkthrough: false,
			overlayComponentType: '',
			highlightDesktopHeader: false,
			highlightMetricsHeader: false,
			overlayComponent: ''
		});
	}

	const myStyles = getSkin(props.skinGuide);
	const skin = props.skinGuide.globalProfiles.palette;
	return (
		<div styleName="intro-popup-container" className={css(myStyles.introPopupContainer)}>
			<div styleName="header-container">
				<div className={css(myStyles.headerBackground)} styleName="header-background-container"></div>
				<div className={css(myStyles.title)} styleName="title">
					{props.getLabel('label_intro_video_header')}
				</div>
				<div styleName="close-icon" onClick={closePopup}>
					<Close />
				</div>
			</div>
			<div styleName="content">
				{/* <div
					styleName="video-container"
				>
					<ReactPlayer
						styleName="video"
						controls={true}
						width={`${videoWidth}px`}
						height={`${videoHeight}px`}
						playing={false}
						url={props.storylineIntro.introVideo} />
				</div> */}
				<div
					styleName="video-container"
				>
					<KVideoPlayer
						// kalturaVideoId='1_3x3z1s1t'
						kalturaVideoId={props.getLabel(props.storylineIntro.introVideo)}
						propRef="intro-video"
						playerHeight={`${videoHeight}px`}
						playerWidth={`${videoWidth}px`}
						// onVideoComplete={() => {}}
					/>
				</div>
				<div styleName="intro-content-container" ref={scrollRef} onScroll={() => { onScrollOfContainer() }}>
					<div styleName="transcript-container">
						<div
							styleName="transcript"
							onClick={() => toggleTranscript()}>
							<div className={css(myStyles.introText)}>
								{transcriptOpen
									? props.getLabel('label_hide_transcript')
									: props.getLabel('label_show_transcript')
								}
							</div>
							<div styleName="icon">
								{transcriptOpen
									? <UpArrow svgColor={skin.grayColor2} />
									: <DownArrow svgColor={skin.grayColor2} />}

							</div>
						</div>
						<div
							className={css(myStyles.transcriptText)}
							styleName={transcriptOpen
								? "transcript-show"
								: "transcript-hidden"}
							dangerouslySetInnerHTML={{ __html: props.getLabel('label_video_transcript') }}
						>
						</div>
					</div>
					<div styleName="playing-conditions-container">
						<PlayingConditionsBox {...props} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(IntroPopup, styles);