import React from 'react';
import styles from './userResearch.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const UserResearch = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    const color = props.color || skin.secondaryColor;
    const secondaryColor = props.secondaryColor || '#FF5B7F';
    let svgId = props.svgId || 'userResearch';
    svgId += Math.random();

    let containerStyles = { width: '18px', height: '18px' };
    if (props.containerStyles) {
        containerStyles = {
            ...containerStyles,
            ...props.containerStyles
        }
    }

    return (
        <div style={containerStyles} styleName="main-component">
            <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none">
                <g clipPath={`url(#${svgId}clip0)`}>
                    <path d="M0.5625 5.06325V1.6875C0.5625 1.06618 1.06618 0.5625 1.6875 0.5625H5.0625" stroke={`url(#${svgId}paint0_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.4375 5.06325V1.6875C17.4375 1.06618 16.9338 0.5625 16.3125 0.5625H12.9375" stroke={`url(#${svgId}paint1_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.5625 12.9375V16.3125C0.5625 16.9338 1.06618 17.4375 1.6875 17.4375H5.0625" stroke={`url(#${svgId}paint2_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.4375 12.9375V16.3125C17.4375 16.9338 16.9338 17.4375 16.3125 17.4375H12.9375" stroke={`url(#${svgId}paint3_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 6.1875C9.93198 6.1875 10.6875 5.43198 10.6875 4.5C10.6875 3.56802 9.93198 2.8125 9 2.8125C8.06802 2.8125 7.3125 3.56802 7.3125 4.5C7.3125 5.43198 8.06802 6.1875 9 6.1875Z" stroke={`url(#${svgId}paint4_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.125 15.1875L10.6875 11.8125H11.8125V10.125C11.8125 8.5717 10.5533 7.3125 9 7.3125C7.4467 7.3125 6.1875 8.5717 6.1875 10.125V11.8125H7.3125L7.875 15.1875H10.125Z" stroke={`url(#${svgId}paint5_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <linearGradient id={`${svgId}paint0_linear`} x1="2.8125" y1="0.5625" x2="2.8125" y2="5.06325" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint1_linear`} x1="15.1875" y1="0.5625" x2="15.1875" y2="5.06325" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint2_linear`} x1="2.8125" y1="12.9375" x2="2.8125" y2="17.4375" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint3_linear`} x1="15.1875" y1="12.9375" x2="15.1875" y2="17.4375" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint4_linear`} x1="9" y1="2.8125" x2="9" y2="6.1875" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint5_linear`} x1="9" y1="7.3125" x2="9" y2="15.1875" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <clipPath id={`${svgId}clip0`}>
                        <rect width="18" height="18" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}



export default applyWrappers(UserResearch, styles);
