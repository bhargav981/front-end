import React from 'react';
import styles from './lowPriority.module.sass';
// import getSkin from './skin.js';
// import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import { checkIfPresent } from 'util/utilFunctions';

const LowPriority = (props) => {

	// const skin = props.skinGuide.globalProfiles.palette
    let color = '#309BE8';
    if (checkIfPresent(props.svgColor)) {
        color = props.svgColor;
    }
    return (
        <div styleName="main-component">
            <svg width="100%" height="100%" viewBox="0 0 9 9" fill="none">
				<path d="M4.85355 8.35355C4.65829 8.54882 4.34171 8.54882 4.14645 8.35355L0.964466 5.17157C0.769204 4.97631 0.769204 4.65973 0.964466 4.46447C1.15973 4.2692 1.47631 4.2692 1.67157 4.46447L4.5 7.29289L7.32843 4.46447C7.52369 4.2692 7.84027 4.2692 8.03553 4.46447C8.2308 4.65973 8.2308 4.97631 8.03553 5.17157L4.85355 8.35355ZM4 1C4 0.723857 4.22386 0.5 4.5 0.5C4.77614 0.5 5 0.723857 5 1H4ZM4 8V1H5V8H4Z"
					fill={color}/>
            </svg>
        </div>
    );
}

export default applyWrappers(LowPriority, styles);