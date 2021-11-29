import React from 'react';
import styles from './walkthroughTab.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';

const WalkthroughTab = (props) => {

	const myStyles = getSkin(props.skinGuide);

	let containerClass = myStyles.tabContainer;
	let containerStyle = 'tab-container';

	if (props.isSelected) {
		containerClass = myStyles.selectedTabContainer;
		containerStyle += ' selected-tab-container';
	} else if (props.isSelected == false && props.showDottedLine == true) {
		containerClass = myStyles.tabContainerNotVisited;
		// containerStyle += ' selected-tab-container';
	}

	return (
		<div
			className={css(containerClass)}
			styleName={containerStyle}
		>
			{props.getLabel(props.name)}
		</div>
	);
}

export default applyWrappers(WalkthroughTab, styles);