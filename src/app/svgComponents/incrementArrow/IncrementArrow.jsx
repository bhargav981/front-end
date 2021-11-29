import React from 'react';
import styles from './incrementArrow.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const IncrementArrow = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    const color = props.color || skin.white;

    return (
        <div styleName="main-component">
            <svg width="100%" height="100%" viewBox="0 0 7 9" fill="none">
                <path d="M5.97787 4.45952H4.28093V8.14286C4.28093 8.47817 4.00911 8.75 3.67379 8.75H2.78332C2.448 8.75 2.17617 8.47817 2.17617 8.14286V4.45952H0.479236C0.126844 4.45952 -0.0590415 4.00539 0.176696 3.72039L2.92601 0.396605C3.0877 0.201132 3.36941 0.201132 3.53109 0.396605L6.28041 3.72039C6.51615 4.00539 6.33026 4.45952 5.97787 4.45952Z"
                    fill={color}
                />
            </svg>
        </div>
    );
}



export default applyWrappers(IncrementArrow, styles);
