import React from 'react';
import styles from './teamMotivationSurvey.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const TeamMotivationSurvey = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    const color = props.color || skin.secondaryColor;
    const secondaryColor = props.secondaryColor || '#FF5B7F';
    let svgId = props.svgId || 'teamMotivationSurvey';
    svgId += Math.random();

    let containerStyles = { width: '17px', height: '20px' };
    if (props.containerStyles) {
        containerStyles = {
            ...containerStyles,
            ...props.containerStyles
        }
    }

    return (
        <div style={containerStyles} styleName="main-component">
            <svg width="100%" height="100%" viewBox="0 0 17 20" fill="none">
                <g clipPath={`url(#${svgId}clip0)`}>
                    <path d="M10.4131 17.9946V19.1663" stroke={`url(#${svgId}paint0_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.6631 19.5832C14.6631 17.282 12.7603 15.4165 10.4131 15.4165C8.06588 15.4165 6.16309 17.282 6.16309 19.5832" stroke={`url(#${svgId}paint1_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.4125 14.1663C12.0555 14.1663 13.3875 12.8605 13.3875 11.2497C13.3875 9.63884 12.0555 8.33301 10.4125 8.33301C8.76945 8.33301 7.4375 9.63884 7.4375 11.2497C7.4375 12.8605 8.76945 14.1663 10.4125 14.1663Z" stroke={`url(#${svgId}paint2_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.31439 18.0225C3.57949 17.254 1.53399 17.9366 0.637695 19.5833" stroke={`url(#${svgId}paint3_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.66827 14.1663C5.23613 14.166 5.79801 14.0526 6.31982 13.833C6.18124 12.7861 5.37759 11.9421 4.32174 11.7347C3.26589 11.5273 2.19262 12.0025 1.65332 12.9163C2.44433 13.7159 3.53215 14.1669 4.66827 14.1663Z" stroke={`url(#${svgId}paint4_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.82563 16.6458C5.22222 16.6458 6.35438 15.5359 6.35438 14.1667C6.35438 12.7975 5.22222 11.6875 3.82563 11.6875C2.42903 11.6875 1.29688 12.7975 1.29688 14.1667C1.29688 15.5359 2.42903 16.6458 3.82563 16.6458Z" stroke={`url(#${svgId}paint5_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.3623 19.5832V0.416504" stroke={`url(#${svgId}paint6_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.3631 0.416504H11.2631C10.7936 0.416504 10.4131 0.7896 10.4131 1.24984V3.74984C10.4131 4.21007 10.7936 4.58317 11.2631 4.58317H16.3631" stroke={`url(#${svgId}paint7_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.4127 2.08301H4.8877L7.0127 4.16634L4.8877 6.24967H11.2627C11.7321 6.24967 12.1127 5.87658 12.1127 5.41634V4.58301" stroke={`url(#${svgId}paint8_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.03613 9.5C8.91705 10.3302 10.0837 10.806 11.3052 10.8333C11.9818 10.8356 12.6538 10.7263 13.2934 10.51" stroke={`url(#${svgId}paint9_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <linearGradient id={`${svgId}paint0_linear`} x1="10.9131" y1="17.9946" x2="10.9131" y2="19.1663" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint1_linear`} x1="10.4131" y1="15.4165" x2="10.4131" y2="19.5832" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint2_linear`} x1="10.4125" y1="8.33301" x2="10.4125" y2="14.1663" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint3_linear`} x1="2.97605" y1="17.7075" x2="2.97605" y2="19.5833" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint4_linear`} x1="3.98657" y1="11.6865" x2="3.98657" y2="14.1663" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint5_linear`} x1="3.82563" y1="11.6875" x2="3.82563" y2="16.6458" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint6_linear`} x1="16.8623" y1="0.416504" x2="16.8623" y2="19.5832" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint7_linear`} x1="13.3881" y1="0.416504" x2="13.3881" y2="4.58317" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint8_linear`} x1="8.5002" y1="2.08301" x2="8.5002" y2="6.24967" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint9_linear`} x1="10.6648" y1="9.5" x2="10.6648" y2="10.8334" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <clipPath id={`${svgId}clip0`}>
                        <rect width="17" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}



export default applyWrappers(TeamMotivationSurvey, styles);
