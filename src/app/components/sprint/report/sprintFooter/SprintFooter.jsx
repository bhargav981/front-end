import React, { useState } from 'react';
import styles from './sprintFooter.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import FilledButton from 'commonComponents/buttons/filledButton';
import FooterBackground from 'svgComponents/footerBackground';

const SprintFooter = (props) => {

	const myStyles = getSkin(props.skinGuide);
	const [ disableStartButton, setDisableStartButton ] = useState(false);

	const startNextSprint = () => {
		setDisableStartButton(true);
		props.startSprint(
			{
				sprintId: props.userState.currentSprintNumber
			}
		);
	}

	return (
		<div styleName="sprint-footer-container" className={css(myStyles.sprintFooterContainer)}>
			<div styleName="sprint-footer-background">
				<FooterBackground />
			</div>
			<div styleName="sprint-footer-component-content">
				<div styleName="sprint-footer-component">
					<FilledButton
						textLabel={props.getLabel('label_start_next_sprint')}
						clickFunction={startNextSprint}
						disableButton={disableStartButton}
					/>
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(SprintFooter, styles);