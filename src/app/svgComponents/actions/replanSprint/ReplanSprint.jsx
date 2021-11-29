import React from 'react';
import styles from './replanSprint.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const ReplanSprint = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    const color = props.color || skin.secondaryColor;
    const secondaryColor = props.secondaryColor || '#FF5B7F';
    let svgId = props.svgId || 'replanSprint';
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
                <g clipPath={`url(#${svgId}clip0)`}>
                    <path d="M6.46094 9.58301H3.96094" stroke={`url(#${svgId}paint0_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.71094 5C7.67216 3.63567 6.57527 2.53877 5.21094 2.5C3.84661 2.53877 2.74971 3.63567 2.71094 5C2.73002 5.86659 3.20528 6.65869 3.96094 7.08333V7.91667H6.46094V7.08333C7.21635 6.65844 7.69152 5.86649 7.71094 5Z" stroke={`url(#${svgId}paint1_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.21094 0.416504V1.24984" stroke={`url(#${svgId}paint2_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.45245 1.75879L7.86328 2.34796" stroke={`url(#${svgId}paint3_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.79427 4.58301H8.96094" stroke={`url(#${svgId}paint4_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.9707 1.75879L2.55987 2.34796" stroke={`url(#${svgId}paint5_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.62793 4.58301H1.46126" stroke={`url(#${svgId}paint6_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.0498 2.18213C14.8888 2.7985 17.7119 6.11147 17.7115 9.99963" stroke={`url(#${svgId}paint7_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.54655 17.8192C4.70495 17.2049 1.879 13.8904 1.87988 10" stroke={`url(#${svgId}paint8_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.2116 19.5833C17.5128 19.5833 19.3783 17.7179 19.3783 15.4167C19.3783 13.1155 17.5128 11.25 15.2116 11.25C12.9104 11.25 11.0449 13.1155 11.0449 15.4167C11.0449 17.7179 12.9104 19.5833 15.2116 19.5833Z" stroke={`url(#${svgId}paint9_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.2109 17.083V17.9163" stroke={`url(#${svgId}paint10_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.2109 12.9165V13.7498" stroke={`url(#${svgId}paint11_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.5449 17.0833H16.0449C16.5052 17.0833 16.8783 16.7102 16.8783 16.25C16.8783 15.7898 16.5052 15.4167 16.0449 15.4167H14.3783C13.918 15.4167 13.5449 15.0436 13.5449 14.5833C13.5449 14.1231 13.918 13.75 14.3783 13.75H16.8783" stroke={`url(#${svgId}paint12_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.71126 15.4165L8.96126 17.9165L6.87793 19.1665" stroke={`url(#${svgId}paint13_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.8783 4.16634L11.0449 2.08301L12.7116 0.833008" stroke={`url(#${svgId}paint14_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <linearGradient id={`${svgId}paint0_linear`} x1="5.21094" y1="9.58301" x2="5.21094" y2="10.583" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint1_linear`} x1="5.21094" y1="2.5" x2="5.21094" y2="7.91667" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint2_linear`} x1="5.71094" y1="0.416504" x2="5.71094" y2="1.24984" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint3_linear`} x1="8.15786" y1="1.75879" x2="8.15786" y2="2.34796" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint4_linear`} x1="9.3776" y1="4.58301" x2="9.3776" y2="5.58301" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint5_linear`} x1="2.26529" y1="1.75879" x2="2.26529" y2="2.34796" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint6_linear`} x1="1.0446" y1="4.58301" x2="1.0446" y2="5.58301" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint7_linear`} x1="14.3806" y1="2.18213" x2="14.3806" y2="9.99963" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint8_linear`} x1="5.21322" y1="10" x2="5.21322" y2="17.8192" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint9_linear`} x1="15.2116" y1="11.25" x2="15.2116" y2="19.5833" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint10_linear`} x1="15.7109" y1="17.083" x2="15.7109" y2="17.9163" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint11_linear`} x1="15.7109" y1="12.9165" x2="15.7109" y2="13.7498" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint12_linear`} x1="15.2116" y1="13.75" x2="15.2116" y2="17.0833" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint13_linear`} x1="7.9196" y1="15.4165" x2="7.9196" y2="19.1665" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint14_linear`} x1="11.8783" y1="0.833008" x2="11.8783" y2="4.16634" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <clipPath id={`${svgId}clip0`}>
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}



export default applyWrappers(ReplanSprint, styles);
