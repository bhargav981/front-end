import React from 'react';
import styles from './bundleLoader.module.sass';
// import getSkin from './skin.js';
// import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import Loader from 'svgComponents/loader/Loader';

const BundleLoader = (props) => {

	// const myStyles = getSkin(props.skinGuide);
	// const skin = props.skinGuide.globalProfiles.palette;
	// const fillColor = props.svgColor || skin.white;

	return (
		<div styleName="container">
			<Loader />
		</div>
	);
}

export default applyWrappers(BundleLoader, styles);