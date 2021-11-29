import React from 'react';
import styles from './eventLoader.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';

const EventLoader = (props) => {

	const myStyles = getSkin(props.skinGuide);
	const skin = props.skinGuide.globalProfiles.palette;
	const fillColor = props.svgColor || skin.white;

	setTimeout(() => {
		props.setUiState({
			overlayComponentType: 'BOTTOM',
			highlightDesktopHeader: true,
			highlightMetricsHeader: false,
			overlayComponent: 'EVENT_COMPONENT'
		});
	}, 2000);

	return (
		<div styleName="loader-container">
			<div styleName="svg-container">
				<div styleName="svg-wrapper">
					<svg width="100%" height="100%" viewBox="0 0 310 275" fill="none">
						<path d="M133.349 12.5C142.972 -4.16667 167.028 -4.16667 176.65 12.5L306.554 237.5C316.177 254.167 304.149 275 284.904 275H25.0959C5.85088 275 -6.17725 254.167 3.44526 237.5L133.349 12.5Z" fill="#FBD724" />
						<path d="M68.5 275H284.904C304.149 275 316.177 254.167 306.554 237.5L241.603 125C152.694 140.878 113.985 173.743 68.5 275Z" fill="#F4C211" />
						<path d="M139.102 89.2983C138.505 79.9279 145.944 72 155.333 72V72C164.704 72 172.137 79.8982 171.568 89.2519L165.047 196.467C164.74 201.522 160.551 205.463 155.487 205.463V205.463C150.434 205.463 146.25 201.538 145.929 196.494L139.102 89.2983Z" fill="#8D1726" />
						<circle cx="155.516" cy="230.488" r="12.5122" fill="#8D1726" />
					</svg>
				</div>
			</div>
			<div className={css(myStyles.loadingLabel)}>
				{props.getLabel('label_brace_yourself')}
			</div>
		</div>
	);
}

export default applyWrappers(EventLoader, styles);