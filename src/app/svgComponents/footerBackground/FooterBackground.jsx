import React from 'react';
import styles from './footerBackground.module.sass';
// import getSkin from './skin.js';
import applyWrappers from 'wrappers/ComponentWrapper';

const FooterBackground = (props) => {

	// const myStyles = getSkin(props.skinGuide);
	const skin = props.skinGuide.globalProfiles.palette;
	return (
		<div styleName="main-component">
			<svg width="100%" height="100%" viewBox="0 0 1280 69" fill="none">
				<path opacity="0.05" d="M0 69V0C0 0 606.5 64 837.5 24C1068.5 -16 1280 69 1280 69H0Z" fill={skin.secondaryColor} />
				<path opacity="0.05" d="M-0.5 68.5V0C-0.5 0 152.5 80 266 26.5C379.5 -27 711 68.5 711 68.5H-0.5Z" fill={skin.secondaryColor} />
			</svg>
		</div>
	);
}

export default applyWrappers(FooterBackground, styles);