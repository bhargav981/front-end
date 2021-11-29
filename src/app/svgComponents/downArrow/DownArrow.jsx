import React from 'react';
import styles from './downArrow.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';
import { checkIfPresent } from 'util/utilFunctions';

const DownArrow = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    let color = skin.grayColor4;
    if (checkIfPresent(props.svgColor)) {
        color = props.svgColor;
    }
    return (
        <div styleName="main-component">
            <svg width="100%" height="100%" viewBox="0 0 12 6" fill="none">
                <path xmlns="http://www.w3.org/2000/svg" opacity="0.8" d="M5.64645 5.64645L0.853553 0.853553C0.538571 0.538571 0.761654 0 1.20711 0H10.7929C11.2383 0 11.4614 0.538571 11.1464 0.853554L6.35355 5.64645C6.15829 5.84171 5.84171 5.84171 5.64645 5.64645Z"
                    fill={color}
                />
            </svg>
        </div>
    );
}



export default applyWrappers(DownArrow, styles);
