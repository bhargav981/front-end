import React from 'react';
import styles from './meetTheTeam.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const MeetTheTeam = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    const color = props.color || skin.secondaryColor;
    const secondaryColor = props.secondaryColor || '#FF5B7F';
    let svgId = props.svgId || 'meetTheTeam';
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
                <path d="M7.91667 8.0375C7.20524 7.68183 6.42038 7.49774 5.625 7.5C3.09031 7.48013 0.941768 9.36011 0.625 11.875" stroke={`url(#${svgId}paint0_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.625 6.25C7.1783 6.25 8.4375 4.9908 8.4375 3.4375C8.4375 1.8842 7.1783 0.625 5.625 0.625C4.0717 0.625 2.8125 1.8842 2.8125 3.4375C2.8125 4.9908 4.0717 6.25 5.625 6.25Z" stroke={`url(#${svgId}paint1_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.75 5C14.9581 5 15.9375 4.02062 15.9375 2.8125C15.9375 1.60438 14.9581 0.625 13.75 0.625C12.5419 0.625 11.5625 1.60438 11.5625 2.8125C11.5625 4.02062 12.5419 5 13.75 5Z" stroke={`url(#${svgId}paint2_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.5188 6.875C15.8155 6.08005 14.8051 5.62487 13.7438 5.62487C12.6824 5.62487 11.672 6.08005 10.9688 6.875" stroke={`url(#${svgId}paint3_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M18.125 16.875H15.625L11.875 19.375V16.875H10.625C9.93464 16.875 9.375 16.3154 9.375 15.625V10.625C9.375 9.93464 9.93464 9.375 10.625 9.375H18.125C18.8154 9.375 19.375 9.93464 19.375 10.625V15.625C19.375 16.3154 18.8154 16.875 18.125 16.875Z" stroke={`url(#${svgId}paint4_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.875 11.875H16.875" stroke={`url(#${svgId}paint5_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.875 14.375H16.875" stroke={`url(#${svgId}paint6_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                    <linearGradient id={`${svgId}paint0_linear`} x1="4.27083" y1="7.49984" x2="4.27083" y2="11.875" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint1_linear`} x1="5.625" y1="0.625" x2="5.625" y2="6.25" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint2_linear`} x1="13.75" y1="0.625" x2="13.75" y2="5" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint3_linear`} x1="13.7438" y1="5.62487" x2="13.7438" y2="6.875" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint4_linear`} x1="14.375" y1="9.375" x2="14.375" y2="19.375" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint5_linear`} x1="14.375" y1="11.875" x2="14.375" y2="12.875" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint6_linear`} x1="14.375" y1="14.375" x2="14.375" y2="15.375" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}



export default applyWrappers(MeetTheTeam, styles);
