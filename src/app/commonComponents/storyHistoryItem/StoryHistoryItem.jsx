import React from 'react';
import styles from './storyHistoryItem.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import { checkIfPresent } from 'util/utilFunctions';
import Blocker from 'svgComponents/blocker';

const StoryHistoryItem = (props) => {

	const getHistoryItemClass = () => {
		if(
			checkIfPresent(props.type)
			&& props.type === 'BLOCKER'
		) {
			return css(myStyles.historyItemContainer, myStyles.blockerClass)
		}
		return css(myStyles.historyItemContainer);
	}

	const myStyles = getSkin(props.skinGuide);
	return (
		<div
			className={getHistoryItemClass()}
			styleName="history-item-container"
		>
			<div className={css(myStyles.historyItemHeader)} styleName="history-item-header">
				<div className={css(myStyles.headerText)} styleName="history-item-header-text">
					{props.getLabel('label_sprint_number', "", { SPRINT_NUMBER: props.sprintNumber })}
				</div>
				<div className={css(myStyles.headerText)} styleName="history-item-header-text">
					{props.getLabel('label_day_number', "", { DAY_NUMBER: props.sprintDay })}
				</div>
			</div>
			<div styleName="history-item-name-container">
				<div className={css(myStyles.historyItemName)} styleName="history-item-name">
					{props.name}
				</div>
				{
					checkIfPresent(props.type) && props.type === 'BLOCKER'
						? <div styleName="history-item-image">
							<Blocker />
						</div>
						: null
				}
			</div>
			{
				checkIfPresent(props.desc)
					? <div className={css(myStyles.historyItemDesc)} styleName="history-item-desc">
						{props.desc}
					</div>
					: null
			}
		</div>
	);
}

export default applyWrappers(StoryHistoryItem, styles);