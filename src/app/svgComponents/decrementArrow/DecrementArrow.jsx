import React from 'react';
import styles from './decrementArrow.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const DecrementArrow = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    const color = props.color || skin.white;

    return (
        <div styleName="main-component">
            <svg width="100%" height="100%" viewBox="0 0 7 9" fill="none">
                <path d="M5.97787 4.54048H4.28093V0.857143C4.28093 0.521827 4.00911 0.25 3.67379 0.25H2.78332C2.448 0.25 2.17617 0.521827 2.17617 0.857142V4.54048H0.479236C0.126844 4.54048 -0.0590415 4.99461 0.176696 5.27961L2.92601 8.6034C3.0877 8.79887 3.36941 8.79887 3.53109 8.6034L6.28041 5.27961C6.51615 4.99461 6.33026 4.54048 5.97787 4.54048Z"
                    fill={color}
                />
            </svg>
        </div>
    );
}



export default applyWrappers(DecrementArrow, styles);
