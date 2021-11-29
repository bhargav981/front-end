import React from 'react';
import styles from './standup.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const Standup = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    const color = props.color || skin.secondaryColor;
    const secondaryColor = props.secondaryColor || '#FF5B7F';
    let svgId = props.svgId || 'standup';
    svgId += Math.random();

    let containerStyles = { width: '20px', height: '21px' };
    if (props.containerStyles) {
        containerStyles = {
            ...containerStyles,
            ...props.containerStyles
        }
    }

    return (
        <div style={containerStyles} styleName="main-component">
            <svg width="100%" height="100%" viewBox="0 0 20 21" fill="none">
                <g clipPath={`url(#${svgId}clip0)`}>
                    <path d="M10 4.46019C11.0355 4.46019 11.875 3.61947 11.875 2.58239C11.875 1.54531 11.0355 0.70459 10 0.70459C8.96447 0.70459 8.125 1.54531 8.125 2.58239C8.125 3.61947 8.96447 4.46019 10 4.46019Z" stroke={`url(#${svgId}paint0_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.75 8.21645C13.3129 6.4997 11.769 5.29834 10 5.29834C8.23096 5.29834 6.68711 6.4997 6.25 8.21645H13.75Z" stroke={`url(#${svgId}paint1_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.16699 16.1448C5.20253 16.1448 6.04199 15.304 6.04199 14.267C6.04199 13.2299 5.20253 12.3892 4.16699 12.3892C3.13146 12.3892 2.29199 13.2299 2.29199 14.267C2.29199 15.304 3.13146 16.1448 4.16699 16.1448Z" stroke={`url(#${svgId}paint2_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.91699 19.9005C7.47988 18.1838 5.93603 16.9824 4.16699 16.9824C2.39795 16.9824 0.854107 18.1838 0.416992 19.9005H7.91699Z" stroke={`url(#${svgId}paint3_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.834 16.1448C16.8695 16.1448 17.709 15.304 17.709 14.267C17.709 13.2299 16.8695 12.3892 15.834 12.3892C14.7985 12.3892 13.959 13.2299 13.959 14.267C13.959 15.304 14.7985 16.1448 15.834 16.1448Z" stroke={`url(#${svgId}paint4_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.584 19.9005C19.1469 18.1838 17.603 16.9824 15.834 16.9824C14.0649 16.9824 12.5211 18.1838 12.084 19.9005H19.584Z" stroke={`url(#${svgId}paint5_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.5 16.0767C10.896 16.7231 9.10399 16.7231 7.5 16.0767" stroke={`url(#${svgId}paint6_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.75 4.36572C15.8195 5.77804 16.9257 8.23153 16.615 10.7202" stroke={`url(#${svgId}paint7_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.25073 4.36572C4.1812 5.77804 3.075 8.23153 3.3857 10.7202" stroke={`url(#${svgId}paint8_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <linearGradient id={`${svgId}paint0_linear`} x1="10" y1="0.70459" x2="10" y2="4.46019" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint1_linear`} x1="10" y1="5.29834" x2="10" y2="8.21645" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint2_linear`} x1="4.16699" y1="12.3892" x2="4.16699" y2="16.1448" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint3_linear`} x1="4.16699" y1="16.9824" x2="4.16699" y2="19.9005" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint4_linear`} x1="15.834" y1="12.3892" x2="15.834" y2="16.1448" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint5_linear`} x1="15.834" y1="16.9824" x2="15.834" y2="19.9005" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint6_linear`} x1="10" y1="16.0767" x2="10" y2="16.5615" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint7_linear`} x1="15.2084" y1="4.36572" x2="15.2084" y2="10.7202" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint8_linear`} x1="4.79236" y1="4.36572" x2="4.79236" y2="10.7202" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <clipPath id={`${svgId}clip0`}>
                        <rect width="20" height="20.0299" fill="white" transform="translate(0 0.288086)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}



export default applyWrappers(Standup, styles);
