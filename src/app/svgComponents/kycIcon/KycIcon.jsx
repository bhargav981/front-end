import React from 'react';
import styles from './kycIcon.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';

const kycIcon = (props) => {
	// const skin = props.skinGuide.globalProfiles.palette
	// let color = props.color || skin.white;

	return (
		<div styleName="main-component">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path d="M15.5001 23.25V20.315H16.5881C18.2091 20.315 19.5231 19.001 19.5231 17.38V14.445H22.8371C20.6901 8 19.4611 0.750003 11.3421 0.750003C7.21591 0.746961 3.55643 3.39967 2.27575 7.32209C0.995061 11.2445 2.38411 15.5456 5.71711 17.978V23.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M8.62095 14.1128C7.45626 14.4647 6.22346 13.8235 5.84295 12.6678C5.24303 11.6087 5.5982 10.2644 6.64295 9.63983C7.80764 9.28792 9.04044 9.92917 9.42095 11.0848" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path fillRule="evenodd" clipRule="evenodd" d="M17.2119 9.75C17.419 9.75 17.5869 9.91789 17.5869 10.125C17.5869 10.3321 17.419 10.5 17.2119 10.5C17.0048 10.5 16.8369 10.3321 16.8369 10.125C16.8369 9.91789 17.0048 9.75 17.2119 9.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M11 3.81494L10.25 5.31494L11 6.81494" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M8 3.81494L7.25 5.31494L8 6.81494" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M14 3.81494L13.25 5.31494L14 6.81494" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M1.25 5.31494H15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</div>
	);
}

export default applyWrappers(kycIcon, styles);