import React from 'react';
import styles from './highPriority.module.sass';
// import getSkin from './skin.js';
// import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import { checkIfPresent } from 'util/utilFunctions';

const HighPriority = (props) => {

	// const skin = props.skinGuide.globalProfiles.palette
    let color = '#309BE8';
    if (checkIfPresent(props.svgColor)) {
        color = props.svgColor;
    }
    return (
        <div styleName="main-component">
            <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none">
				<path d="M4.85355 0.646447C4.65829 0.451184 4.34171 0.451184 4.14645 0.646447L0.964466 3.82843C0.769204 4.02369 0.769204 4.34027 0.964466 4.53553C1.15973 4.7308 1.47631 4.7308 1.67157 4.53553L4.5 1.70711L7.32843 4.53553C7.52369 4.7308 7.84027 4.7308 8.03553 4.53553C8.2308 4.34027 8.2308 4.02369 8.03553 3.82843L4.85355 0.646447ZM4 8C4 8.27614 4.22386 8.5 4.5 8.5C4.77614 8.5 5 8.27614 5 8H4ZM4 1V8H5V1H4Z"
					fill={color}/>
            </svg>
        </div>
    );
}

export default applyWrappers(HighPriority, styles);