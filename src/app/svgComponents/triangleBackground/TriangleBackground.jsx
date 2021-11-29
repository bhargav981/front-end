import React from 'react';
import styles from './triangleBackground.module.sass';
// import getSkin from './skin.js';
// import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import {checkIfPresent} from 'util/utilFunctions';
import { hexToRgbA } from 'util/styleUtil';

const TriangleBackground = (props) => {

	// const skin = props.skinGuide.globalProfiles.palette
	let color = hexToRgbA('#FF1E50', 0.1);
	if (checkIfPresent(props.svgColor)) {
		color = props.svgColor;
	}
	return (
		<div styleName="main-component">
			<svg width="100%" height="100%" viewBox="0 0 541 192" fill="none">
				<path d="M0 0L274.5 97L541 192H0V0Z" fill={color} />
			</svg>
		</div>
	);
}

export default applyWrappers(TriangleBackground, styles);