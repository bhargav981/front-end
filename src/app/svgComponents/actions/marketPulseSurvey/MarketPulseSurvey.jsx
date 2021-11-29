import React from 'react';
import styles from './marketPulseSurvey.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const MarketPulseSurvey = (props) => {
    const skin = props.skinGuide.globalProfiles.palette
    const color = props.color || skin.secondaryColor;
    const secondaryColor = props.secondaryColor || '#FF5B7F';
    let svgId = props.svgId || 'marketPulseSurvey';
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
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.75458 17.0786C5.60577 17.0826 3.02202 14.587 2.91693 11.4399C2.81184 8.29285 5.22334 5.63038 8.36541 5.42439C8.58473 5.40989 8.75506 5.22752 8.75458 5.00773V3.34106C8.75473 3.22669 8.70787 3.11729 8.62498 3.0385C8.54209 2.9597 8.43046 2.91845 8.31624 2.92439C3.83383 3.16085 0.344059 6.90512 0.423195 11.3931C0.50233 15.881 4.12194 19.4999 8.6099 19.5782C13.0979 19.6565 16.8415 16.166 17.0771 11.6836C17.083 11.5693 17.0418 11.4577 16.963 11.3748C16.8842 11.2919 16.7748 11.2451 16.6604 11.2452H14.9937C14.774 11.2447 14.5916 11.4151 14.5771 11.6344C14.3722 14.699 11.826 17.0797 8.75458 17.0786Z" stroke={`url(#${svgId}paint0_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.6941 0.422484C11.5797 0.4163 11.4678 0.457453 11.3848 0.536273C11.3017 0.615094 11.2547 0.724632 11.2549 0.83915V2.50582C11.2544 2.72591 11.4252 2.9084 11.6449 2.92248C14.5599 3.11758 16.8811 5.43907 17.0757 8.35415C17.0902 8.57346 17.2726 8.7438 17.4924 8.74332H19.159C19.2736 8.74348 19.3831 8.69651 19.4619 8.61343C19.5407 8.53036 19.5819 8.4185 19.5757 8.30415C19.3507 4.04793 15.9503 0.647547 11.6941 0.422484Z" stroke={`url(#${svgId}paint1_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.4209 16.0393V8.74512L9.58756 10.8285V17.016" stroke={`url(#${svgId}paint2_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.58789 12.0781H12.5046C12.7347 12.0781 12.9212 12.2647 12.9212 12.4948V15.3281" stroke={`url(#${svgId}paint3_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.4209 12.0781H7.50423" stroke={`url(#${svgId}paint4_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.4209 13.7451H7.50423" stroke={`url(#${svgId}paint5_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.58789 10.8285V8.74512" stroke={`url(#${svgId}paint6_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.0879 12.0785V9.99512" stroke={`url(#${svgId}paint7_linear)`} strokeWidth="1.1875" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <linearGradient id={`${svgId}paint0_linear`} x1="8.74976" y1="2.92383" x2="8.74976" y2="19.5795" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint1_linear`} x1="15.4156" y1="0.421875" x2="15.4156" y2="8.74332" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint2_linear`} x1="7.50423" y1="8.74512" x2="7.50423" y2="17.016" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint3_linear`} x1="11.2546" y1="12.0781" x2="11.2546" y2="15.3281" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint4_linear`} x1="6.46256" y1="12.0781" x2="6.46256" y2="13.0781" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint5_linear`} x1="6.46256" y1="13.7451" x2="6.46256" y2="14.7451" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint6_linear`} x1="10.0879" y1="8.74512" x2="10.0879" y2="10.8285" gradientUnits="userSpaceOnUse">
                        <stop stopColor={color} />
                        <stop offset="1" stopColor={secondaryColor} />
                    </linearGradient>
                    <linearGradient id={`${svgId}paint7_linear`} x1="12.5879" y1="9.99512" x2="12.5879" y2="12.0785" gradientUnits="userSpaceOnUse">
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



export default applyWrappers(MarketPulseSurvey, styles);
