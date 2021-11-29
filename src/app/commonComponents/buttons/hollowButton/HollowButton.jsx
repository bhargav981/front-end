import React from 'react';
import styles from './hollowButton.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import { checkIfPresent } from 'util/utilFunctions';



const HollowButton = (props) => {

	const onClickOfFilledButton = () => {
		if(props.disableButton === true) {
			return;
		} else {
			if(props.clickFunction){
				props.clickFunction();
			}
		}
	}

	const myStyles = getSkin(props.skinGuide);
	let buttonShadowStyle = css(myStyles.buttonStyle);
	const isDisabled = checkIfPresent(props.disableButton)
		? props.disableButton ? 1 : 0
		: 0;

	let removeShadow = false;

	if (checkIfPresent(props.removeShadow)) {
		removeShadow = props.removeShadow
	}

	if (isDisabled) {
		if(removeShadow) {
			buttonShadowStyle = css(myStyles.buttonStyleDisabled);
		} else {
			buttonShadowStyle = css(myStyles.buttonStyleDisabled, myStyles.boxShadow);
		}
	} else {
		if(removeShadow) {
			buttonShadowStyle = css(myStyles.buttonStyle);
		} else {
			buttonShadowStyle = css(myStyles.buttonStyle, myStyles.boxShadow);
		}
	}

	let buttonStyle = {
		opacity: isDisabled ? 0.5 : 1,
		cursor: isDisabled ? 'not-allowed' : 'pointer'
	};

	if (checkIfPresent(props.buttonStyle)) {
		buttonStyle = {
			...buttonStyle,
			...props.buttonStyle
		};
	}

	let buttonTextStyle = {};

	if(checkIfPresent(props.buttonTextStyle)) {
		buttonTextStyle = props.buttonTextStyle;
	}

	return (
		<div
			className={buttonShadowStyle}
			styleName="button-style" onClick={onClickOfFilledButton}
			style={buttonStyle}
		>
			<div style={buttonTextStyle} className={css(myStyles.buttonText)}>
				{props.textLabel}
			</div>
		</div>
	);
}

export default applyWrappers(HollowButton, styles);