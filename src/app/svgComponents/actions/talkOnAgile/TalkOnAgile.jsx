import React from 'react';
import styles from './talkOnAgile.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const TalkOnAgile = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    const color = props.color || skin.secondaryColor;
    const secondaryColor = props.secondaryColor || '#FF5B7F';
    let svgId = props.svgId || 'talkOnAgile';
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
                <path d="M3.75 9.375H16.25" stroke={`url(#${svgId}paint0_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.5 11.875L6.25 9.375H13.75L13.5 11.875" stroke={`url(#${svgId}paint1_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 5C11.2081 5 12.1875 4.02062 12.1875 2.8125C12.1875 1.60438 11.2081 0.625 10 0.625C8.79188 0.625 7.8125 1.60438 7.8125 2.8125C7.8125 4.02062 8.79188 5 10 5Z" stroke={`url(#${svgId}paint2_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.7077 6.875C12.0318 6.08139 11.0418 5.62418 9.99935 5.62418C8.95691 5.62418 7.96693 6.08139 7.29102 6.875" stroke={`url(#${svgId}paint3_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.33203 17.5C4.54015 17.5 5.51953 16.5206 5.51953 15.3125C5.51953 14.1044 4.54015 13.125 3.33203 13.125C2.12391 13.125 1.14453 14.1044 1.14453 15.3125C1.14453 16.5206 2.12391 17.5 3.33203 17.5Z" stroke={`url(#${svgId}paint4_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.03971 19.375C5.3638 18.5814 4.37382 18.1242 3.33138 18.1242C2.28894 18.1242 1.29896 18.5814 0.623047 19.375" stroke={`url(#${svgId}paint5_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 17.5C11.2081 17.5 12.1875 16.5206 12.1875 15.3125C12.1875 14.1044 11.2081 13.125 10 13.125C8.79188 13.125 7.8125 14.1044 7.8125 15.3125C7.8125 16.5206 8.79188 17.5 10 17.5Z" stroke={`url(#${svgId}paint6_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.7077 19.375C12.0318 18.5814 11.0418 18.1242 9.99935 18.1242C8.95691 18.1242 7.96693 18.5814 7.29102 19.375" stroke={`url(#${svgId}paint7_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.668 17.5C17.8761 17.5 18.8555 16.5206 18.8555 15.3125C18.8555 14.1044 17.8761 13.125 16.668 13.125C15.4598 13.125 14.4805 14.1044 14.4805 15.3125C14.4805 16.5206 15.4598 17.5 16.668 17.5Z" stroke={`url(#${svgId}paint8_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.3756 19.375C18.6997 18.5814 17.7098 18.1242 16.6673 18.1242C15.6249 18.1242 14.6349 18.5814 13.959 19.375" stroke={`url(#${svgId}paint9_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                    <linearGradient id={`${svgId}paint0_linear`} x1="10" y1="9.375" x2="10" y2="10.375" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint1_linear`} x1="10" y1="9.375" x2="10" y2="11.875" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint2_linear`} x1="10" y1="0.625" x2="10" y2="5" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint3_linear`} x1="9.99935" y1="5.62418" x2="9.99935" y2="6.875" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint4_linear`} x1="3.33203" y1="13.125" x2="3.33203" y2="17.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint5_linear`} x1="3.33138" y1="18.1242" x2="3.33138" y2="19.375" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint6_linear`} x1="10" y1="13.125" x2="10" y2="17.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint7_linear`} x1="9.99935" y1="18.1242" x2="9.99935" y2="19.375" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint8_linear`} x1="16.668" y1="13.125" x2="16.668" y2="17.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint9_linear`} x1="16.6673" y1="18.1242" x2="16.6673" y2="19.375" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}



export default applyWrappers(TalkOnAgile, styles);
