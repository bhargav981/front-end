import React from 'react';
import styles from './userFeedback.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const UserFeedback = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    const color = props.color || skin.secondaryColor;
    const secondaryColor = props.secondaryColor || '#FF5B7F';
    let svgId = props.svgId || 'userFeedback';
    svgId += Math.random();

    let containerStyles = { width: '20px', height: '19px' };
    if (props.containerStyles) {
        containerStyles = {
            ...containerStyles,
            ...props.containerStyles
        }
    }

    return (
        <div style={containerStyles} styleName="main-component">
            <svg width="100%" height="100%" viewBox="0 0 20 19" fill="none">
                <g clipPath={`url(#${svgId}clip0)`}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.68926 0.791504C4.60846 0.791504 0.489258 4.15846 0.489258 8.31234C0.532479 10.407 1.53271 12.3695 3.20926 13.649L1.28926 18.2082L6.38686 15.3257C7.4547 15.6621 8.56863 15.8332 9.68926 15.8332C14.7701 15.8332 18.8893 12.4662 18.8893 8.31234C18.8893 4.15846 14.7701 0.791504 9.68926 0.791504Z" stroke={`url(#${svgId}paint0_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.28906 6.72884C5.28906 5.85439 6.00541 5.14551 6.88906 5.14551C7.77272 5.14551 8.48906 5.85439 8.48906 6.72884" stroke={`url(#${svgId}paint1_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.0896 6.72884C14.0896 5.85439 13.3733 5.14551 12.4896 5.14551C11.606 5.14551 10.8896 5.85439 10.8896 6.72884" stroke={`url(#${svgId}paint2_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.6895 9.5C11.6895 10.5931 10.794 11.4792 9.68945 11.4792C8.58488 11.4792 7.68945 10.5931 7.68945 9.5" stroke={`url(#${svgId}paint3_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <linearGradient id={`${svgId}paint0_linear`} x1="9.68926" y1="0.791504" x2="9.68926" y2="18.2082" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint1_linear`} x1="6.88906" y1="5.14551" x2="6.88906" y2="6.72884" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint2_linear`} x1="12.4896" y1="5.14551" x2="12.4896" y2="6.72884" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint3_linear`} x1="9.68945" y1="9.5" x2="9.68945" y2="11.4792" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <clipPath id={`${svgId}clip0`}>
                        <rect width="20" height="19" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}



export default applyWrappers(UserFeedback, styles);
