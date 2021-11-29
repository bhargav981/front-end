import React from 'react';
import styles from './introComponent.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import FilledButton from 'commonComponents/buttons/filledButton';
import PlayingConditions from 'components/intro/playingConditions';
import ReactPlayer from 'react-player'
import DownArrow from 'svgComponents/downArrow';
import UpArrow from 'svgComponents/upArrow';
import FooterBackground from 'svgComponents/footerBackground';
import IntroLeftBackground from 'svgComponents/introLeftBackground';
import IntroRightBackground from 'svgComponents/introRightBackground';
import KVideoPlayer from 'commonComponents/kVideoPlayer';

const onClickOfContinue = (props) => {
	props.setIntroPage(3);
}
//TO BE REFACTORED
const renderIntroComponent = props => {
	const { storylineIntro } = props;
	const skin = props.skinGuide.globalProfiles.palette;
	const myStyles = getSkin(props.skinGuide);

	if (storylineIntro) {
		// eslint-disable-next-line
		if (storylineIntro.introPage == 1) {
			return <div styleName="container">
				<div styleName="intro">
					<div styleName="intro-background">
						<img width="100%" height="100%" src={props.getImage('SIM_BACKGROUND')} alt="" />
					</div>
					<div styleName="intro-background-left">
						<IntroRightBackground />
					</div>
					<div styleName="intro-background-right">
						<IntroLeftBackground />
					</div>
					<div styleName="intro-content-container">
						{/* <div styleName="video-container">
							<ReactPlayer
								styleName="video"
								controls={true}
								width={"900px"}
								height={"100%"}
								playing={false}
								onEnded
								={() => props.enableContinueButton(true)}
								url={props.storylineIntro.introVideo} />
						</div> */}
						<div styleName="video-container">
							<KVideoPlayer
								// kalturaVideoId='1_3x3z1s1t'
								kalturaVideoId={props.getLabel(props.storylineIntro.introVideo)}
								propRef="intro-video"
								playerHeight='100%'
								playerWidth='900px'
								onVideoComplete={() => {
									props.enableContinueButton(true)
								}}
							/>
						</div>
						<div styleName="transcript-container">
							<div className={css(myStyles.transcriptContent)} styleName="transcript-content">
								<div
									styleName="transcript"
								// onClick={() => props.toggleTranscript(!props.storylineIntro.isTranscriptOpen)}
								>
									<div className={css(myStyles.introText)}>
										{/* {props.storylineIntro.isTranscriptOpen
										? props.getLabel('label_hide_transcript')
										: props.getLabel('label_show_transcript')
									} */}
										{props.getLabel('label_transcript')}
									</div>
									{/* <div styleName="icon">
									{(props.storylineIntro.isTranscriptOpen)
										? <UpArrow svgColor={skin.grayColor2} />
										: <DownArrow svgColor={skin.grayColor2} />}

								</div> */}
								</div>
								<div
									className={css(myStyles.transcriptText)}
									styleName={props.storylineIntro.isTranscriptOpen
										? "transcript-show"
										: "transcript-hidden"}
									dangerouslySetInnerHTML={{ __html: props.getLabel('label_video_transcript') }}
								>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					styleName="intro-footer-container"
					className={css(myStyles.introFooterContainer)}
				>
					<div styleName="intro-footer-background">
						<FooterBackground />
					</div>
					<div styleName="intro-footer-content">
						<div styleName="intro-footer-component">
							<FilledButton
								textLabel={props.getLabel('label_continue_cap')}
								clickFunction={() => onClickOfContinue(props)} />
						</div>
					</div>
				</ div>
			</div>
		} else {
			return <div styleName="intro-full">
				<div styleName="intro-background">
					<img width="100%" height="100%" src={props.getImage('SIM_BACKGROUND')} alt="" />
				</div>
				<div styleName="intro-background-left">
					<IntroRightBackground />
				</div>
				<div styleName="intro-background-right">
					<IntroLeftBackground />
				</div>
				<PlayingConditions {...props} />
			</div>
		}
	}
	return null;
};

export default applyWrappers(renderIntroComponent, styles);