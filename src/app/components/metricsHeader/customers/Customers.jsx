import React from 'react';
import styles from './customers.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import CustomerSvg from 'svgComponents/customerSvg';

const Customers = (props) => {
	const openKYCPopup = () => {
		const { tutorial } = props;

		//Pause tutorial if it is already open
		if (tutorial.isRunning && tutorial.stepIndex === 1) {
			props.pauseTutorial();
			props.updateStepNumber(tutorial.stepIndex + 1);
		}

		props.setUiState({
			showOverlay: true,
			overlayComponentType: 'RIGHT',
			highlightDesktopHeader: true,
			highlightMetricsHeader: false,
			overlayComponent: 'KNOW_YOUR_CUSTOMERS'
		});
	}

	const myStyles = getSkin(props.skinGuide);
	return (
		<div
			styleName="customers-container"
			onClick={() => {
				openKYCPopup();
			}}
		>
			<div styleName="customers-content" className={css(myStyles.customersContent)}>
				<div styleName="customers-image">
					<CustomerSvg />
				</div>
			</div>
			<div styleName="customers-name" className={css(myStyles.customersName)}>
				{props.getLabel('label_your_customers')}
			</div>
		</div>
	);
}

export default applyWrappers(Customers, styles);