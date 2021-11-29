import React from 'react';
import styles from './rebuildFeature.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const RebuildFeature = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    const color = props.color || skin.secondaryColor;
    const secondaryColor = props.secondaryColor || '#FF5B7F';
    let svgId = props.svgId || 'rebuildFeature';
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
                <g clipPath={`url(#${svgId}clip0)`}>
                    <path d="M12.3037 2.24121C14.9625 4.62293 15.4486 8.60455 13.4408 11.5559C11.433 14.5073 7.55109 15.5174 4.35938 13.9191" stroke={`url(#${svgId}paint0_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.546875 12.8632H2.7865V10.6235" stroke={`url(#${svgId}paint1_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.5425 2.22705H12.3037V4.46588" stroke={`url(#${svgId}paint2_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.78685 12.848C0.136983 10.474 -0.355471 6.50903 1.63312 3.55887C3.62171 0.608705 7.48179 -0.422369 10.6766 1.14325" stroke={`url(#${svgId}paint3_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.11278 3.87067L9.1277 5.96146H11.1069C11.3114 5.95381 11.4987 6.07527 11.5752 6.26509C11.6516 6.45492 11.6008 6.67231 11.4481 6.80855L9.73332 8.5993L10.6833 10.7851C10.7694 10.9902 10.7149 11.2274 10.5479 11.3743C10.3809 11.5212 10.1387 11.545 9.94628 11.4335L7.65045 10.1399L5.35461 11.4335C5.16217 11.545 4.91998 11.5212 4.75297 11.3743C4.58596 11.2274 4.53145 10.9902 4.61757 10.7851L5.56757 8.5993L3.84965 6.80855C3.69734 6.67259 3.6464 6.45583 3.72223 6.26627C3.79806 6.0767 3.98442 5.95487 4.18849 5.96146H6.16765L7.18178 3.87067C7.2714 3.69615 7.4511 3.58643 7.64728 3.58643C7.84346 3.58643 8.02316 3.69615 8.11278 3.87067Z" stroke={`url(#${svgId}paint4_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.583 12.583L13.7539 13.7539" stroke={`url(#${svgId}paint5_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.2322 16.5531C18.6822 17.019 18.6758 17.7597 18.2177 18.2177C17.7597 18.6758 17.019 18.6822 16.5531 18.2322L13.194 14.8739C13.0395 14.7194 13.0395 14.4688 13.194 14.3142L14.3142 13.194C14.4688 13.0395 14.7194 13.0395 14.8739 13.194L18.2322 16.5531Z" stroke={`url(#${svgId}paint6_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <linearGradient id={`${svgId}paint0_linear`} x1="9.51716" y1="2.24121" x2="9.51716" y2="14.674" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint1_linear`} x1="1.66669" y1="10.6235" x2="1.66669" y2="12.8632" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint2_linear`} x1="13.4231" y1="2.22705" x2="13.4231" y2="4.46588" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint3_linear`} x1="5.54631" y1="0.415527" x2="5.54631" y2="12.848" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint4_linear`} x1="7.64891" y1="3.58643" x2="7.64891" y2="11.5033" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint5_linear`} x1="13.1684" y1="12.583" x2="13.1684" y2="13.7539" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint6_linear`} x1="15.8218" y1="13.0781" x2="15.8218" y2="18.5655" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <clipPath id={`${svgId}clip0`}>
                        <rect width="19" height="19" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}



export default applyWrappers(RebuildFeature, styles);
