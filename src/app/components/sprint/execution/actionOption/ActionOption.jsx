import React from 'react';
import styles from './actionOption.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import { actionOptionIds } from 'config/actions';

const ActionOption = (props) => {

	const myStyles = getSkin(props.skinGuide);

	const isOptionSelected = (actionOption) => {
		if (actionOption.id === props.selectedActionOptionId) {
			return true;
		}
		return false;
	}

	const renderEffortCost = (title, value, showMessage) => {
		if (!showMessage) {
			return null
		}

		return (
			<div styleName="option-effort-cost-content">
				<div
					className={css(myStyles.optionEffortCostTitle)}
					styleName="option-effort-cost-title"
				>
					{title}
				</div>
				<div className={css(myStyles.optionEffortCostValue)}>
					{value}
				</div>
			</div>
		);
	}

	return props.selectedActionOptions.map(actionOption => {
		let containerStyle = css(myStyles.container);
		let radioOutlineStyle = css(myStyles.radioOutline);
		let radioCircleStyle = css(myStyles.radioCircle);
		let nameStyle = css(myStyles.name);

		if (isOptionSelected(actionOption)) {
			containerStyle = css(myStyles.container, myStyles.containerSelected);
			radioOutlineStyle = css(myStyles.radioOutline, myStyles.radioOutlineSelected);
			radioCircleStyle = css(myStyles.radioCircle, myStyles.radioCircleSelected);
			nameStyle = css(myStyles.name, myStyles.nameSelected);
		}

		if (actionOption.id === actionOptionIds.REPLAN_SPRINT) {
			actionOption = {
				...actionOption,
				effort: actionOption.effort + 1
			};
		}

		return (
			<div
				key={`action-option-${actionOption.id}`}
				styleName="option-container"
				className={containerStyle}
				onClick={() => props.setSelectedActionOptionId(actionOption.id)}
			>
				<div styleName="radio-container">
					<div className={radioOutlineStyle} styleName="radio-outline">
						<div className={radioCircleStyle} styleName="radio-inner-circle" />
					</div>
				</div>
				<div styleName="option-details-container">
					<div className={nameStyle}>{props.getLabel(actionOption.name)}</div>
					<div styleName="option-effort-cost-container">
						{renderEffortCost(props.getLabel('label_exec_days'), props.getLabel('label_number_days','',{DAY_NUMBER:actionOption.effort}), actionOption.effort)}
						{renderEffortCost(props.getLabel('label_action_cost'), `$ ${actionOption.cost}`, actionOption.cost)}
					</div>
				</div>
			</div>
		);
	});
}

export default applyWrappers(ActionOption, styles);