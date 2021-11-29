import React from 'react';
import styles from './rightArrow.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const rightArrow = (props) => {
    const fillColor = props.fillColor || "#115060";

    return (
        <div styleName="mainComponent">
            <svg width="100%" height="100%" viewBox="0 0 26 13" fill="none">
                <path fill={fillColor} opacity="0.5" d="M25.0303 7.03033C25.3232 6.73744 25.3232 6.26256 25.0303 5.96967L20.2574 1.1967C19.9645 0.903806 19.4896 0.903806 19.1967 1.1967C18.9038 1.48959 18.9038 1.96447 19.1967 2.25736L23.4393 6.5L19.1967 10.7426C18.9038 11.0355 18.9038 11.5104 19.1967 11.8033C19.4896 12.0962 19.9645 12.0962 20.2574 11.8033L25.0303 7.03033ZM0.5 7.25L24.5 7.25V5.75L0.5 5.75L0.5 7.25Z" />
            </svg>
        </div>
    );
}

export default applyWrappers(rightArrow, styles);
