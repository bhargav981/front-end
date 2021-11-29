import React from 'react';
import styles from './leftArrow.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';
import { checkIfPresent } from 'util/utilFunctions';

const LeftArrow = (props) => {
    const skin = props.skinGuide.globalProfiles.palette;
    let color = skin.white;
    if (checkIfPresent(props.svgColor)) {
        color = props.svgColor;
    }
    return (
        <div styleName="main-component">
            <svg width="100%" height="100%" fill="none" viewBox="0 0 15 19">
                <path stroke={color} stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.8" d="M12.786 11.5H1M6.5 6L1 11.5 6.5 17"/>
            </svg>
        </div>
    );
}



export default applyWrappers(LeftArrow, styles);
