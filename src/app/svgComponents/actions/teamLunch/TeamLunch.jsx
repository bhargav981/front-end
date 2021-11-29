import React from 'react';
import styles from './teamLunch.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const TeamLunch = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    const color = props.color || skin.secondaryColor;
    const secondaryColor = props.secondaryColor || '#FF5B7F';
    let svgId = props.svgId || 'teamLunch';
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
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.462801 11.75C0.435467 11.6273 0.469836 11.4997 0.55639 11.4028C0.642944 11.3058 0.772495 11.2497 0.909165 11.25H17.2728C17.4095 11.2497 17.539 11.3058 17.6256 11.4028C17.7121 11.4997 17.7465 11.6273 17.7192 11.75C16.9737 15.3436 13.536 17.9372 9.54553 17.9167H8.63644C4.64597 17.9372 1.20822 15.3436 0.462801 11.75Z" stroke={`url(#${svgId}paint0_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.9374 3.78467L1.81738 5.88467" stroke={`url(#${svgId}paint1_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.5454 0.416504L2.27271 4.1665" stroke={`url(#${svgId}paint2_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.67827 17.7017C6.18484 18.2245 5.912 18.892 5.90918 19.5833H12.2728C12.27 18.892 11.9972 18.2245 11.5037 17.7017" stroke={`url(#${svgId}paint3_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.66818 5.04395C10.4118 7.51478 6.82909 8.76478 8.63636 11.2498" stroke={`url(#${svgId}paint4_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.13655 5.35498C7.38746 7.62415 4.182 8.87081 5.90927 11.25" stroke={`url(#${svgId}paint5_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.1574 4.73877C13.4374 7.41627 9.4838 8.66627 11.3638 11.2496" stroke={`url(#${svgId}paint6_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <linearGradient id={`${svgId}paint0_linear`} x1="9.09098" y1="11.25" x2="9.09098" y2="17.9168" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint1_linear`} x1="10.3774" y1="3.78467" x2="10.3774" y2="5.88467" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint2_linear`} x1="10.9091" y1="0.416504" x2="10.9091" y2="4.1665" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint3_linear`} x1="9.091" y1="17.7017" x2="9.091" y2="19.5833" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint4_linear`} x1="8.63646" y1="5.04395" x2="8.63646" y2="11.2498" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint5_linear`} x1="5.90989" y1="5.35498" x2="5.90989" y2="11.25" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint6_linear`} x1="11.3639" y1="4.73877" x2="11.3639" y2="11.2496" gradientUnits="userSpaceOnUse">
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



export default applyWrappers(TeamLunch, styles);
