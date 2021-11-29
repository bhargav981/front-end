import React from 'react';
import styles from './mediumPriority.module.sass';
// import getSkin from './skin.js';
// import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import { checkIfPresent } from 'util/utilFunctions';

const MediumPriority = (props) => {

	// const skin = props.skinGuide.globalProfiles.palette
    let color = '#309BE8';
    if (checkIfPresent(props.svgColor)) {
        color = props.svgColor;
    }
    return (
        <div styleName="main-component">
            <svg width="100%" height="100%" viewBox="0 0 9 5" fill="none">
				<path d="M1 3C0.723858 3 0.5 2.77614 0.5 2.5C0.5 2.22386 0.723858 2 1 2V3ZM8 2C8.27614 2 8.5 2.22386 8.5 2.5C8.5 2.77614 8.27614 3 8 3V2ZM1 2H8V3H1V2Z" fill="#309BE8"/>
				<rect x="2.37866" y="2.5" width="3" height="3" transform="rotate(-45 2.37866 2.5)" fill={color}/>
			</svg>
        </div>
    );
}

export default applyWrappers(MediumPriority, styles);