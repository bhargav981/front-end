import React from 'react';
import styles from './selectedTaskButtonHollow.module.sass';
// import getSkin from './skin.js';
// import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import { checkIfPresent } from 'util/utilFunctions';

const SelectedTaskButtonHollow = (props) => {

	// const skin = props.skinGuide.globalProfiles.palette
	let color = "#42BAFF";
	if (checkIfPresent(props.svgColor)) {
		color = props.svgColor;
	}
	return (
		<div styleName="main-component">
			<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
				<circle cx="12.1218" cy="12.1097" r="10.8741" stroke="#36B496" strokeWidth="1.8" />
				<path d="M7 12.5L10.2093 16.1469C10.6075 16.5994 11.3125 16.5994 11.7107 16.1469L18 9" stroke="#36B496" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</div>
	);
}

export default applyWrappers(SelectedTaskButtonHollow, styles);