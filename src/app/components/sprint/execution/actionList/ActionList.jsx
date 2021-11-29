import React from 'react';
import styles from './actionList.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import Action from 'components/sprint/execution/action';

const ActionList = (props) => {

	const myStyles = getSkin(props.skinGuide);

	const renderActions = () => {
		return props.actionsList.map((eachAction, index) => {
			let popoverPosition = 'top';
			if (index > 4) {
				popoverPosition = 'bottom'
			}

			return (
				<div key={`action-${eachAction.id}`} styleName="each-action-container" id={eachAction.name}>
					<Action
						{...props}
						action={eachAction}
						popoverPosition={popoverPosition}
					/>
				</div>
			);
		})
	}

	const renderOverlay = () => {
		if (props.uiState.showActionOptionPopover && !props.uiState.showOverlay) {
			return <div className={css(myStyles.overlay)} styleName="overlay"></div>
		}
		return null;
	}

	let actionListStyle = {};
	if(!props.isActionsFromStoryPopup) {
		actionListStyle = {
			overflowY: 'auto'
		}
	}

	return (
		<div styleName="actions-list-container" id="actions-list-container"
			style={actionListStyle}
		>
			{renderOverlay()}
			{renderActions()}
		</div>
	);
}

export default applyWrappers(ActionList, styles);