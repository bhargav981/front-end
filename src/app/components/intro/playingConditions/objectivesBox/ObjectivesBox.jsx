import React from 'react';
import styles from './objectivesBox.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import { checkIfPresent } from 'util/utilFunctions';
import SelectedTaskButton from 'svgComponents/selectedTaskButton';

const ObjectivesBox = (props) => {

	const { storylineIntro } = props;
	const myStyles = getSkin(props.skinGuide);
	const objectivesDesc = props.getLabel('label_objectives_list');

	const pcArray = objectivesDesc.split(",");
	
	const pcDivs = [];
	if (pcArray.length > 0) {
		pcArray.map((eachCondition) => {
			pcDivs.push(
				<div styleName="each-condition">
					<div styleName="each-condition-image">
						<SelectedTaskButton />
					</div>
					<div className={css(myStyles.playingConditionsDesc)} styleName="each-condition-text">
						{props.getLabel(eachCondition.trim(), '', {
							TIMER_VALUE: checkIfPresent(props.userState.totalTimer)
								? Math.round(props.userState.totalTimer / 60)
								: Math.round(props.userState.defaultTimerValue / 60)
						})}
					</div>
				</div>
			);
			return 1;
		});
	}

	return (
		<div styleName="playing-conditions" className={css(myStyles.playingConditionsContainer)}>
			<div
				styleName="playing-conditions-title"
				className={css(myStyles.playingConditionsTitle)}
			>
				{props.getLabel('label_objectives')}
			</div>
			<div
				styleName="playing-conditions-desc"
			// dangerouslySetInnerHTML={{ __html: playingConditions }}
			>
				{pcDivs}
			</div>
		</div>
	);
}

export default applyWrappers(ObjectivesBox, styles);