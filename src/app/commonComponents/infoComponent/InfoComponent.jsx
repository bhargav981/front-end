import React, { useState } from 'react';
import styles from './infoComponent.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import InfoIcon from 'svgComponents/infoIcon';
import {checkIfPresent} from 'util/utilFunctions';

const InfoComponent = (props) => {

	const myStyles = getSkin(props.skinGuide);
	const propStyles = checkIfPresent(props.propStyles) ? props.propStyles : {};

	const [showTooltip, setShowTooltip] = useState(false);


	const renderTooltip = (myStyles) => {
		const tooltipStyles = checkIfPresent(props.tooltipStyles) ? props.tooltipStyles : {};
		switch (props.alignTooltipKey) {
			case 'LEFT':
				return (
					<div styleName="tooltip-container-left">
						<div className={css(myStyles.tooltipContent)} styleName="tooltip-content"
							dangerouslySetInnerHTML={{ __html: props.tooltipText }}
						></div>
						<div className={css(myStyles.tooltipArrowLeft)} styleName="tooltip-arrow-left-right"></div>
					</div>
				);
			case 'RIGHT':
				return (
					<div styleName="tooltip-container-right">
						<div className={css(myStyles.tooltipArrowRight)} styleName="tooltip-arrow-left-right"></div>
						<div className={css(myStyles.tooltipContent)} styleName="tooltip-content"
							dangerouslySetInnerHTML={{ __html: props.tooltipText }}
						></div>
					</div>
				);
			case 'TOP':
				return (
					<div styleName="tooltip-container-top">
						<div style={{...tooltipStyles}} className={css(myStyles.tooltipContent)} styleName="tooltip-content"
							dangerouslySetInnerHTML={{ __html: props.tooltipText }}
						></div>
						<div className={css(myStyles.tooltipArrowTop)} styleName="tooltip-arrow-top-bottom"></div>
					</div>
				);
			case 'BOTTOM':
				return (
					<div styleName="tooltip-container-bottom">
						<div className={css(myStyles.tooltipArrowBottom)} styleName="tooltip-arrow-top-bottom"></div>
						<div className={css(myStyles.tooltipContent)} styleName="tooltip-content"
							dangerouslySetInnerHTML={{ __html: props.tooltipText }}
						></div>
					</div>
				);
			default:
				return (
					<div styleName="tooltip-container-right">
						<div className={css(myStyles.tooltipArrowRight)} styleName="tooltip-arrow"></div>
						<div className={css(myStyles.tooltipContent)} styleName="tooltip-content"
							dangerouslySetInnerHTML={{ __html: props.tooltipText }}
						></div>
					</div>
				);
		}
	}


	return (
		<div
			styleName="info-container"
			style={{ ...propStyles }}
		>
			<div
				styleName="info-icon"
				onMouseEnter={() => { setShowTooltip(true); }}
				onMouseLeave={() => { setShowTooltip(false); }}
			>
				<InfoIcon svgColor={props.svgColor} />
			</div>
			{showTooltip ? renderTooltip(myStyles) : null}
		</div>
	);
}

export default applyWrappers(InfoComponent, styles);