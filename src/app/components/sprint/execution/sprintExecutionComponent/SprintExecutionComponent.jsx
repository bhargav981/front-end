import React, { useState } from 'react';
import styles from './sprintExecutionComponent.module.sass';
// import getSkin from './skin.js';
// import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import ActionList from 'components/sprint/execution/actionList';
import ExecutionComponent from 'components/sprint/execution/executionComponent';

const SprintExecutionComponent = (props) => {

	// const myStyles = getSkin(props.skinGuide);

	const [disableActions, setDisableActions] = useState(false);

	const globalActionsList = props.actions.actionsList.filter(
		eachAction => eachAction.isGlobal
	);

	return (
		<div styleName="sprint-execution-component">
			<div styleName="sprint-execution-component-background">
				<img width="100%" height="100%" src={props.getImage('SIM_BACKGROUND')} alt="" />
			</div>
			<div styleName="sprint-execution-component-content">
				<div styleName="sprint-execution-container">
					<div styleName="cards-row-container">
						<ExecutionComponent
							{...props}
							setDisableActions={setDisableActions}
						/>
					</div>
					<div styleName={disableActions ? "actions-container-disabled" : "actions-container"}>
						<ActionList
							{...props}
							actionsList={globalActionsList}
							disableActions={disableActions}
							isActionsFromStoryPopup={false}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(SprintExecutionComponent, styles);