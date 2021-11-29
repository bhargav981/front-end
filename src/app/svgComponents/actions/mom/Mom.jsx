import React from 'react';
import styles from './mom.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const Mom = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    const color = props.color || skin.secondaryColor;
    const secondaryColor = props.secondaryColor || '#FF5B7F';
    let svgId = props.svgId || 'mom';
    svgId += Math.random();

    let containerStyles = { width: '16px', height: '20px' };
    if (props.containerStyles) {
        containerStyles = {
            ...containerStyles,
            ...props.containerStyles
        }
    }

    return (
        <div style={containerStyles} styleName="main-component">
            <svg width="100%" height="100%" viewBox="0 0 16 20" fill="none">
                <path d="M7.40039 11.4088H11.6004" stroke={`url(#${svgId}paint0_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.40039 15.0088H11.6004" stroke={`url(#${svgId}paint1_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M5.00117 11.1088C5.16686 11.1088 5.30117 11.2431 5.30117 11.4088C5.30117 11.5745 5.16686 11.7088 5.00117 11.7088C4.83549 11.7088 4.70117 11.5745 4.70117 11.4088C4.70117 11.2431 4.83549 11.1088 5.00117 11.1088Z" stroke={`url(#${svgId}paint2_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.40039 7.80879H11.6004" stroke={`url(#${svgId}paint3_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M5.00117 7.5088C5.16686 7.5088 5.30117 7.64312 5.30117 7.8088C5.30117 7.97449 5.16686 8.1088 5.00117 8.1088C4.83549 8.1088 4.70117 7.97449 4.70117 7.8088C4.70117 7.64312 4.83549 7.5088 5.00117 7.5088Z" stroke={`url(#${svgId}paint4_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M5.00117 14.7088C5.16686 14.7088 5.30117 14.8431 5.30117 15.0088C5.30117 15.1745 5.16686 15.3088 5.00117 15.3088C4.83549 15.3088 4.70117 15.1745 4.70117 15.0088C4.70117 14.8431 4.83549 14.7088 5.00117 14.7088Z" stroke={`url(#${svgId}paint5_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M11.0008 3.60879H14.0008C14.6635 3.60879 15.2008 4.14605 15.2008 4.80879V17.4088C15.2008 18.0715 14.6635 18.6088 14.0008 18.6088H2.00078C1.33804 18.6088 0.800781 18.0715 0.800781 17.4088V4.80879C0.800781 4.14605 1.33804 3.60879 2.00078 3.60879H5.00078C5.00078 1.95194 6.34393 0.608795 8.00078 0.608795C9.65764 0.608795 11.0008 1.95194 11.0008 3.60879Z" stroke={`url(#${svgId}paint6_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M8.00117 3.00879C8.16686 3.00879 8.30117 3.1431 8.30117 3.30879C8.30117 3.47447 8.16686 3.60879 8.00117 3.60879C7.83549 3.60879 7.70117 3.47447 7.70117 3.30879C7.70117 3.1431 7.83549 3.00879 8.00117 3.00879Z" stroke={`url(#${svgId}paint7_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                    <linearGradient id={`${svgId}paint0_linear`} x1="9.50039" y1="11.4088" x2="9.50039" y2="12.4088" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint1_linear`} x1="9.50039" y1="15.0088" x2="9.50039" y2="16.0088" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint2_linear`} x1="5.00117" y1="11.1088" x2="5.00117" y2="11.7088" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint3_linear`} x1="9.50039" y1="7.80879" x2="9.50039" y2="8.80879" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint4_linear`} x1="5.00117" y1="7.5088" x2="5.00117" y2="8.1088" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint5_linear`} x1="5.00117" y1="14.7088" x2="5.00117" y2="15.3088" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint6_linear`} x1="8.00078" y1="0.608795" x2="8.00078" y2="18.6088" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint7_linear`} x1="8.00117" y1="3.00879" x2="8.00117" y2="3.60879" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}



export default applyWrappers(Mom, styles);
