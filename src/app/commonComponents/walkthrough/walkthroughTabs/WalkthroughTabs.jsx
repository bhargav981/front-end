import React from 'react';
import styles from './walkthroughTabs.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import WalkthroughTab from './walkthroughTab';

const WalkthroughTabs = (props) => {

	const myStyles = getSkin(props.skinGuide);

	const renderTabsSeperationLine = (index, showDottedLine) => {
		if (index === props.walkthroughTabsList.length - 1) {
			return null;
		}
		return (
			<div
				className={
					showDottedLine
						? css(myStyles.tabSeperationLineDotted)
						: css(myStyles.tabSeperationLine)
				}
				styleName="tab-seperation-line"
			></div>
		);
	}

	const renderTabs = () => {
		let showDottedLine = false;
		return props.walkthroughTabsList.map((walkthroughTab, index) => {
			if (walkthroughTab.isSelected == true) {
				showDottedLine = true;
			}
			return (
				<div key={walkthroughTab.key} styleName="tab-line-container">
					<WalkthroughTab
						isSelected={walkthroughTab.isSelected}
						name={walkthroughTab.name}
						showDottedLine={showDottedLine}
					/>
					{renderTabsSeperationLine(index, showDottedLine)}
				</div>
			);
		})
	}

	return (
		<div styleName="tabs-container">
			{renderTabs()}
		</div>
	);
}

export default applyWrappers(WalkthroughTabs, styles);