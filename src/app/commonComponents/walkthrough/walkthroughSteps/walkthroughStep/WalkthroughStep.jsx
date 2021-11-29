import React from 'react';
import styles from './walkthroughStep.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import SelectedTaskButtonHollow from 'svgComponents/selectedTaskButtonHollow';

const WalkthroughStep = (props) => {

	const myStyles = getSkin(props.skinGuide);
	// const globalProfiles = props.skinGuide.globalProfiles;
	// const skin = globalProfiles.palette;

	const renderNumberOrCheckArrow = () => {
		if (props.step.status === 'completed') {
			return (
				<div styleName="check-container">
					<SelectedTaskButtonHollow svgColor="#36B496" />
				</div>
			);
		}

		if (props.step.status === 'inprogress') {
			return <div className={css(myStyles.inProgressNumber)} styleName="number">{props.step.number}</div>;
		}

		return <div className={css(myStyles.number)} styleName="number">{props.step.number}</div>;
	}

	const getClassNameForTitle = () => {
		if (props.step.status === 'completed') {
			return css(myStyles.doneTitle);
		}

		if (props.step.status === 'inprogress') {
			return css(myStyles.title);
		}

		return css(myStyles.otherTitle);
	}

	return (
		<div styleName="container">
			{renderNumberOrCheckArrow()}
			<div className={getClassNameForTitle()} styleName="title">{props.getLabel(props.step.title)}</div>
		</div>
	);
}

export default applyWrappers(WalkthroughStep, styles);