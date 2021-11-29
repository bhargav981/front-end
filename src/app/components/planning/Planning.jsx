import React, { useState } from 'react';
import styles from './planning.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite';
import applyWrappers from 'wrappers/ComponentWrapper';

import FilledButton from 'commonComponents/buttons/filledButton';
import Features from './features';
import Prds from './prds';
import FooterBackground from 'svgComponents/footerBackground';

const planning = (props) => {
	const myStyles = getSkin(props.skinGuide);

	const [disableStartSprint, setDisableStartSprint] = useState(false);

	const moveToPrds = () => {
		props.setUiState({
			currentPlanningPhaseState: props.uiState.planningPhaseStates[1]
		});
	}

	const moveToConfirmation = () => {
		setDisableStartSprint(true);
		props.postSelectedPrd(
			{
				prdId: props.userPrds.selectedPrdId
			},
			() => {
				props.setUiState({
					currentPlanningPhaseState: props.uiState.planningPhaseStates[2]
				});
				props.updateCurrentPhase({ phaseId: 2 });
				props.startSprint({
					sprintId: props.userState.currentSprintNumber + 1
				});
			}
		);
	}

	const isPrdSelected = () => props.userPrds.selectedPrdId !== null

	const renderButtonContainer = (textLabel, clickFunction, disableButton = false) => {
		return (
			<div className={css(myStyles.buttonContent)} styleName="button-container">
				<div styleName="footer-background-container">
					<FooterBackground />
				</div>
				<div styleName="button-content">
					<FilledButton
						textLabel={props.getLabel(textLabel)}
						clickFunction={clickFunction}
						disableButton={disableButton || disableStartSprint}
					/>
				</div>
			</div>
		);
	}

	if (props.uiState.currentPlanningPhaseState === props.uiState.planningPhaseStates[2]) {
		// return (
		// 	<div styleName="container">
		// 		<Confirmation
		// 			{...props}
		// 		/>
		// 	</div>
		// );
		props.setWalkthroughState('planningCompleted');
		return null;
	}

	if (props.uiState.currentPlanningPhaseState === props.uiState.planningPhaseStates[0]) {
		return (
			<div styleName="container">
				<div styleName="planning-background">
					<img width="100%" height="100%" src={props.getImage('SIM_BACKGROUND')} alt="" />
				</div>
				<Features features={props.features} />
				{renderButtonContainer('label_next_cap', moveToPrds)}
			</div>
		);
	}

	if (props.uiState.currentPlanningPhaseState === props.uiState.planningPhaseStates[1]) {
		return (
			<div styleName="container">
				<div styleName="planning-background">
					<img width="100%" height="100%" src={props.getImage('SIM_BACKGROUND')} alt="" />
				</div>
				<Prds
					prds={props.prds}
					userPrds={props.userPrds}
					setUserPrd={props.setUserPrd}
					disableSelection={disableStartSprint}
				/>
				{renderButtonContainer('label_start_sprint', moveToConfirmation, !isPrdSelected())}
			</div>
		);
	}

	return null;
}

export default applyWrappers(planning, styles);