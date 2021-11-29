import React from 'react';
import styles from './selectedTaskCheckBox.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';

const SelectedTaskCheckBox = (props) => {

	const myStyles = getSkin(props.skinGuide);
	return (
		<div styleName="main-component">
			<svg width="100%" height="100%" viewBox="0 0 18 18" fill="none">
				<rect x="0.5" y="0.5" width="17" height="17" rx="4.5" fill="#42BAFF" stroke="#42BAFF" />
				<path d="M4.5 10L7.5 13.5L14.5 5" stroke="white" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</div>
	);
}

export default applyWrappers(SelectedTaskCheckBox, styles);