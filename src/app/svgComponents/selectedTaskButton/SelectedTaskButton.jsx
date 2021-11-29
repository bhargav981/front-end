import React from 'react';
import styles from './selectedTaskButton.module.sass';
// import getSkin from './skin.js';
// import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import { checkIfPresent } from 'util/utilFunctions';

const SelectedTaskButton = (props) => {

	// const skin = props.skinGuide.globalProfiles.palette
	let color = "#42BAFF";
	if (checkIfPresent(props.svgColor)) {
		color = props.svgColor;
	}
	return (
		<div styleName="main-component">
			<svg width="100%" height="100%" viewBox="0 0 18 18" fill="none">
				<path d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389956 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9971 6.61395 17.0479 4.32647 15.3607 2.63928C13.6735 0.952084 11.386 0.00293127 9 0ZM6.37754 12.7883L4.30062 10.7114C4.20416 10.6149 4.12764 10.5004 4.07544 10.3744C4.02323 10.2483 3.99636 10.1133 3.99636 9.97684C3.99636 9.84043 4.02323 9.70535 4.07544 9.57932C4.12764 9.45328 4.20416 9.33877 4.30062 9.2423C4.39708 9.14584 4.5116 9.06933 4.63763 9.01712C4.76366 8.96492 4.89874 8.93805 5.03516 8.93805C5.17157 8.93805 5.30665 8.96492 5.43269 9.01712C5.55872 9.06933 5.67323 9.14584 5.76969 9.2423L7.84662 11.3192L11.8689 5.95523C12.0342 5.7349 12.2802 5.58923 12.5528 5.55028C12.8255 5.51133 13.1024 5.58229 13.3228 5.74754C13.5431 5.91279 13.6888 6.1588 13.7277 6.43145C13.7667 6.70409 13.6957 6.98105 13.5305 7.20138L9.51092 12.5723C9.33201 12.8105 9.10394 13.0075 8.84219 13.1498C8.58044 13.2921 8.29113 13.3764 7.99391 13.3971C7.69669 13.4177 7.39851 13.3741 7.11962 13.2693C6.84072 13.1645 6.58763 13.0009 6.37754 12.7897V12.7883Z"
					fill={color}
				/>
			</svg>
		</div>
	);
}

export default applyWrappers(SelectedTaskButton, styles);