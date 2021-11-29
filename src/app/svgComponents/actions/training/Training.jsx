import React from 'react';
import styles from './training.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const Training = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    const color = props.color || skin.secondaryColor;
    const secondaryColor = props.secondaryColor || '#FF5B7F';
    let svgId = props.svgId || 'training';
    svgId += Math.random();

    let containerStyles = { width: '20px', height: '20px' };
    if (props.containerStyles) {
        containerStyles = {
            ...containerStyles,
            ...props.containerStyles
        }
    }

    return (
        <div style={containerStyles} styleName="main-component">
            <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                <path d="M4.375 5.625C5.75571 5.625 6.875 4.50571 6.875 3.125C6.875 1.74429 5.75571 0.625 4.375 0.625C2.99429 0.625 1.875 1.74429 1.875 3.125C1.875 4.50571 2.99429 5.625 4.375 5.625Z" stroke={`url(#${svgId}paint0_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.375 6.875V11.875" stroke={`url(#${svgId}paint1_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M6.25 19.375L6.875 13.125H8.125V10.625C8.125 8.55393 6.44607 6.875 4.375 6.875C2.30393 6.875 0.625 8.55393 0.625 10.625V13.125H1.875L2.5 19.375H6.25Z" stroke={`url(#${svgId}paint2_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.625 11.875H18.125C18.8154 11.875 19.375 11.3154 19.375 10.625V1.875C19.375 1.18464 18.8154 0.625 18.125 0.625H9.375" stroke={`url(#${svgId}paint3_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 7.5L11.875 5.625L13.75 7.5L16.875 4.375" stroke={`url(#${svgId}paint4_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.375 4.375H16.875V6.875" stroke={`url(#${svgId}paint5_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.125 11.875V16.25" stroke={`url(#${svgId}paint6_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.625 16.25H15.625" stroke={`url(#${svgId}paint7_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                    <linearGradient id={`${svgId}paint0_linear`} x1="4.375" y1="0.625" x2="4.375" y2="5.625" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint1_linear`} x1="4.875" y1="6.875" x2="4.875" y2="11.875" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint2_linear`} x1="4.375" y1="6.875" x2="4.375" y2="19.375" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint3_linear`} x1="14.375" y1="0.625" x2="14.375" y2="11.875" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint4_linear`} x1="13.4375" y1="4.375" x2="13.4375" y2="7.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint5_linear`} x1="15.625" y1="4.375" x2="15.625" y2="6.875" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint6_linear`} x1="13.625" y1="11.875" x2="13.625" y2="16.25" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint7_linear`} x1="13.125" y1="16.25" x2="13.125" y2="17.25" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                </defs>
            </svg>
        </div >
    );
}



export default applyWrappers(Training, styles);
