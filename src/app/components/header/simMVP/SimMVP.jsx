import React, { useState } from 'react';
import styles from './simMVP.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import HeaderSeparation from 'components/header/headerSeparation';
import { getUserMetricsForMetricsKey } from 'util/utilFunctions';
import InfoComponent from 'commonComponents/infoComponent';
import { hexToRgbA } from 'util/styleUtil';
import DownArrow from 'svgComponents/downArrow';

const SimMVP = (props) => {

	const { tutorial } = props;

	const [isOnHover, setIsOnHover] = useState(false);

	const onClickSimMVP = () => {
		if (tutorial.isRunning && tutorial.stepIndex === 3) {
			props.endTutorial();
		}
		props.setUiState({
			showOverlay: true,
			showOverlayOverWalkthrough: true,
			overlayComponentType: 'CENTER',
			highlightDesktopHeader: true,
			highlightMetricsHeader: false,
			overlayComponent: 'SIM_MVP_POPUP'
		})
	}

	const skin = props.skinGuide.globalProfiles.palette
	const mvpUserMetrics = getUserMetricsForMetricsKey(
		props.metrics.metricsList,
		props.userMetrics.userMetricsList,
		'MVP'
	);

	let mvp = `0%`;

	if (mvpUserMetrics) {
		mvp = `${mvpUserMetrics.value}%`;
	}

	const myStyles = getSkin(props.skinGuide);
	return (
		<div id="sim-mvp" styleName="sim-mvp-container" className={`metric-tutorial-mvp  ${css(myStyles.mvpContainer)}`}
			onClick={() => {
				onClickSimMVP();
			}}
			onMouseEnter={() => {
				setIsOnHover(true);
			}}
			onMouseLeave={() => {
				setIsOnHover(false);
			}}
			style={isOnHover ? {zIndex: 100} : {}}
		>
			<div styleName="sim-mvp-content">
				<div styleName="sim-mvp-details">
					<div styleName="sim-mvp-top">
						<div styleName="sim-mvp-text" className={css(myStyles.mvpText)}>
							{props.getLabel('label_mvp_alignment')}
						</div>
						<InfoComponent
							tooltipText={props.getLabel('label_metric_desc_pc_fit')}
							alignTooltipKey="BOTTOM"
							svgColor={hexToRgbA(skin.white, 0.8)}
						/>
					</div>
					<div styleName="sim-mvp-bottom">
						<div styleName="sim-mvp-progress-bar-container" className={css(myStyles.mvpProgressBarContainer)}>
							<div
								style={{
									width: mvp
								}}
								styleName="sim-mvp-progress-bar"
								className={css(myStyles.mvpProgressBar)}
							></div>
						</div>
					</div>
				</div>

				<div styleName="sim-mvp-arrow-container">
					{/* <div styleName="sim-mvp-arrow">
						<UpArrow />
					</div> */}
					<div styleName="sim-mvp-value" className={css(myStyles.mvpValue)}>
						{`${mvpUserMetrics.value}%`}
					</div>
				</div>
			</div>
			{/* <HeaderSeparation /> */}
			{
				isOnHover
					? <div styleName="mvp-down-arrow">
						<div styleName="down-arrow">
							<DownArrow svgColor={skin.grayColor4} />
						</div>
					</div>
					: null
			}

		</div>
	);
}

export default applyWrappers(SimMVP, styles);