import React from 'react';
import styles from './updatePrd.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const UpdatePrd = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    const color = props.color || skin.secondaryColor;
    const secondaryColor = props.secondaryColor || '#FF5B7F';
    let svgId = props.svgId || 'updatePrd';
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
                    <path d="M7.56035 16.9316H1.08035C0.682707 16.9316 0.360352 16.6092 0.360352 16.2116V1.09158C0.360352 0.693937 0.682707 0.371582 1.08035 0.371582H10.6564C10.8454 0.37276 11.0265 0.448278 11.1604 0.581822L13.8294 3.25158C13.9644 3.38658 14.0403 3.56968 14.0404 3.76062V6.13158" stroke={`url(#${svgId}paint0_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.24023 10.026L5.36711 7.89908C5.57689 7.68974 5.90513 7.65721 6.15191 7.82132L7.15487 8.4902C7.40782 8.65864 7.74543 8.61967 7.95335 8.39804L9.92471 6.29492" stroke={`url(#${svgId}paint1_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.24316 4.69141V11.8914H6.12316" stroke={`url(#${svgId}paint2_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.6032 16.9315C14.9891 16.9315 16.9232 14.9974 16.9232 12.6115C16.9232 10.2256 14.9891 8.2915 12.6032 8.2915C10.2173 8.2915 8.2832 10.2256 8.2832 12.6115C8.2832 14.9974 10.2173 16.9315 12.6032 16.9315Z" stroke={`url(#${svgId}paint3_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.6035 14.7717V10.4517" stroke={`url(#${svgId}paint4_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.6034 10.4517L10.9834 12.0717" stroke={`url(#${svgId}paint5_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.6035 10.4517L14.2235 12.0717" stroke={`url(#${svgId}paint6_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <linearGradient id={`${svgId}paint0_linear`} x1="7.20035" y1="0.371582" x2="7.20035" y2="16.9316" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint1_linear`} x1="6.58247" y1="6.29492" x2="6.58247" y2="10.026" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint2_linear`} x1="4.68316" y1="4.69141" x2="4.68316" y2="11.8914" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint3_linear`} x1="12.6032" y1="8.2915" x2="12.6032" y2="16.9315" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint4_linear`} x1="13.1035" y1="10.4517" x2="13.1035" y2="14.7717" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint5_linear`} x1="11.7934" y1="10.4517" x2="11.7934" y2="12.0717" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint6_linear`} x1="13.4135" y1="10.4517" x2="13.4135" y2="12.0717" gradientUnits="userSpaceOnUse">
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



export default applyWrappers(UpdatePrd, styles);
