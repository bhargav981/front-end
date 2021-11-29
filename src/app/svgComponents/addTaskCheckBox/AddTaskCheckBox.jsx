import React from 'react';
import styles from './addTaskCheckBox.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';

const AddTaskCheckBox = (props) => {

	const myStyles = getSkin(props.skinGuide);
	return (
		<div styleName="main-component">
			<svg width="100%" height="100%" viewBox="0 0 18 18" fill="none">
				<rect opacity="0.5" x="0.5" y="0.5" width="17" height="17" rx="4.5" fill="white" stroke="#031A20" />
			</svg>
		</div>
	);
}

export default applyWrappers(AddTaskCheckBox, styles);