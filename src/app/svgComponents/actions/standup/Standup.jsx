import React from 'react';
import styles from './standup.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const Standup = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    const color = props.color || skin.secondaryColor;
    const secondaryColor = props.secondaryColor || '#FF5B7F';
    let svgId = props.svgId || 'standup';
    svgId += Math.random();

    let containerStyles = { width: '23px', height: '16px' };
    if (props.containerStyles) {
        containerStyles = {
            ...containerStyles,
            ...props.containerStyles
        }
    }

    return (
        <div style={containerStyles} styleName="main-component">
            <svg width="100%" height="100%" viewBox="0 0 23 16" fill="none">
                <path d="M17.3642 8.97229L12.9688 9.8122" stroke={`url(#${svgId}paint0_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.3592 3.97884L9.40506 4.95504C8.93182 5.11084 8.41699 4.88695 8.20823 4.43457C7.98228 3.94971 8.18167 3.37303 8.65885 3.13127L11.5202 1.69252C12.0131 1.44392 12.587 1.41061 13.1054 1.60052L17.3416 3.15001" stroke={`url(#${svgId}paint1_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.21875 8.97911H5.30148L8.29312 12.3319C8.60513 12.6935 9.10901 12.823 9.55669 12.6567C10.0044 12.4904 10.3015 12.0633 10.3017 11.5857V11.0618L10.4508 11.1215C10.8853 11.2953 11.3778 11.2423 11.7653 10.98C12.1529 10.7176 12.3852 10.2802 12.3853 9.8122H12.8019C13.2752 9.81188 13.7078 9.54432 13.9195 9.12095C14.1312 8.69758 14.0857 8.19097 13.8019 7.8121L11.128 4.38602" stroke={`url(#${svgId}paint2_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.09402 2.9115L8.78906 2.6602C8.48176 2.43392 8.11015 2.31184 7.72853 2.3118C7.50113 2.31172 7.27585 2.35539 7.06495 2.44043L3.27344 3.9567" stroke={`url(#${svgId}paint3_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.71875 2.50688H2.42242C2.87275 2.48811 3.25354 2.83691 3.27425 3.28716V8.75338C3.25353 9.20375 2.8729 9.5528 2.42242 9.53451H0.71875" stroke={`url(#${svgId}paint4_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.8856 9.53451H18.1819C17.7314 9.5528 17.3508 9.20375 17.3301 8.75338V3.28716C17.3508 2.83691 17.7316 2.48811 18.1819 2.50688H19.8856" stroke={`url(#${svgId}paint5_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.3018 11.0618L9.46875 10.2287" stroke={`url(#${svgId}paint6_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.3853 9.81221L11.1348 8.56171" stroke={`url(#${svgId}paint7_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                    <linearGradient id={`${svgId}paint0_linear`} x1="15.1665" y1="8.97229" x2="15.1665" y2="9.8122" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint1_linear`} x1="12.7284" y1="1.47872" x2="12.7284" y2="5.00438" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint2_linear`} x1="8.63514" y1="4.38602" x2="8.63514" y2="12.7283" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint3_linear`} x1="6.18373" y1="2.3118" x2="6.18373" y2="3.9567" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint4_linear`} x1="1.9965" y1="2.50616" x2="1.9965" y2="9.5352" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint5_linear`} x1="18.6078" y1="2.50616" x2="18.6078" y2="9.5352" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint6_linear`} x1="9.8853" y1="10.2287" x2="9.8853" y2="11.0618" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint7_linear`} x1="11.76" y1="8.56171" x2="11.76" y2="9.81221" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}



export default applyWrappers(Standup, styles);
