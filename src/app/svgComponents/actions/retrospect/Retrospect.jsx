import React from 'react';
import styles from './retrospect.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const Retrospect = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    const color = props.color || skin.secondaryColor;
    const secondaryColor = props.secondaryColor || '#FF5B7F';
    let svgId = props.svgId || 'retrospect';
    svgId += Math.random();

    let containerStyles = { width: '19px', height: '19px' };
    if (props.containerStyles) {
        containerStyles = {
            ...containerStyles,
            ...props.containerStyles
        }
    }

    return (
        <div style={containerStyles} styleName="main-component">
            <svg width="100%" height="100%" viewBox="0 0 19 19" fill="none">
                <g clipPath={`url(#${svgId}clip0)"`}>
                    <path d="M12.3037 2.24124C14.9625 4.62296 15.4486 8.60458 13.4408 11.5559C11.433 14.5073 7.55109 15.5175 4.35938 13.9191" stroke={`url(#${svgId}paint0_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.546875 12.863H2.7865V10.6234" stroke={`url(#${svgId}paint1_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.5416 2.22697H12.3027V4.4658" stroke={`url(#${svgId}paint2_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.78685 12.848C0.136983 10.4739 -0.355471 6.50897 1.63312 3.55881C3.62171 0.608648 7.48179 -0.422426 10.6766 1.14319" stroke={`url(#${svgId}paint3_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.11278 3.87049L9.1277 5.96128H11.1069C11.3114 5.95363 11.4987 6.07509 11.5752 6.26491C11.6516 6.45474 11.6008 6.67213 11.4481 6.80837L9.73332 8.59912L10.6833 10.7849C10.7694 10.99 10.7149 11.2272 10.5479 11.3741C10.3809 11.521 10.1387 11.5448 9.94628 11.4333L7.65045 10.1397L5.35461 11.4333C5.16217 11.5448 4.91998 11.521 4.75297 11.3741C4.58596 11.2272 4.53145 10.99 4.61757 10.7849L5.56757 8.59912L3.84965 6.80837C3.69734 6.67241 3.6464 6.45565 3.72223 6.26609C3.79806 6.07652 3.98442 5.95469 4.18849 5.96128H6.16765L7.18178 3.87049C7.2714 3.69598 7.4511 3.58625 7.64728 3.58625C7.84346 3.58625 8.02316 3.69598 8.11278 3.87049Z" stroke={`url(#${svgId}paint4_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.582 12.5828L13.7529 13.7537" stroke={`url(#${svgId}paint5_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.2322 16.553C18.6822 17.0189 18.6758 17.7596 18.2177 18.2176C17.7597 18.6757 17.019 18.6821 16.5531 18.2321L13.194 14.8738C13.0395 14.7193 13.0395 14.4687 13.194 14.3141L14.3142 13.1939C14.4688 13.0394 14.7194 13.0394 14.8739 13.1939L18.2322 16.553Z" stroke={`url(#${svgId}paint6_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <linearGradient id={`${svgId}paint0_linear`} x1="9.51716" y1="2.24124" x2="9.51716" y2="14.6741" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint1_linear`} x1="1.66669" y1="10.6234" x2="1.66669" y2="12.863" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint2_linear`} x1="13.4222" y1="2.22697" x2="13.4222" y2="4.4658" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint3_linear`} x1="5.54631" y1="0.41547" x2="5.54631" y2="12.848" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint4_linear`} x1="7.64891" y1="3.58625" x2="7.64891" y2="11.5031" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint5_linear`} x1="13.1675" y1="12.5828" x2="13.1675" y2="13.7537" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint6_linear`} x1="15.8218" y1="13.078" x2="15.8218" y2="18.5654" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <clipPath id={`${svgId}clip0`}>
                        <rect width="19" height="19" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div >
    );
}



export default applyWrappers(Retrospect, styles);
