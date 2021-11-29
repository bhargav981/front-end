import React from 'react';
import styles from './customerLike.module.sass';
import getSkin from './skin.js';
// import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import { checkIfPresent } from 'util/utilFunctions';

const CustomerLike = (props) => {

	const myStyles = getSkin(props.skinGuide);
	const skin = props.skinGuide.globalProfiles.palette
	let color = skin.green;
	if (checkIfPresent(props.svgColor)) {
		color = props.svgColor;
	}
	return (
		<div styleName="main-component">
			<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
				<path fillRule="evenodd" clipRule="evenodd" d="M21.75 18.75H11.25L5.25 23.25V18.75H2.25C1.42157 18.75 0.75 18.0784 0.75 17.25V2.25C0.75 1.42157 1.42157 0.75 2.25 0.75H21.75C22.5784 0.75 23.25 1.42157 23.25 2.25V17.25C23.25 18.0784 22.5784 18.75 21.75 18.75Z" fill={color}/>
				<path fillRule="evenodd" clipRule="evenodd" d="M6.75 13.55V8.65H7.45C9.383 8.65 10.95 7.083 10.95 5.15C10.95 4.3768 11.5768 3.75 12.35 3.75C12.8539 3.75 13.3372 3.95018 13.6935 4.3065C14.0498 4.66282 14.25 5.14609 14.25 5.65V6.55C14.25 6.9366 14.5634 7.25 14.95 7.25H15.15C15.7432 7.25016 16.3087 7.50122 16.7067 7.94112C17.1047 8.38102 17.298 8.96873 17.239 9.559L17.022 11.729C16.8787 13.1602 15.6743 14.25 14.236 14.25H11.342C11.0819 14.2502 10.823 14.2138 10.573 14.142L8.873 13.658C8.62298 13.5862 8.36412 13.5498 8.104 13.55H6.75Z" fill="white"/>
			</svg>
		</div>
	);
}

export default applyWrappers(CustomerLike, styles);