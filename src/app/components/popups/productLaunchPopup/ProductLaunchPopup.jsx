import React from 'react';
import styles from './productLaunchPopup.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import FilledButton from 'commonComponents/buttons/filledButton';
import TriangleBackground from 'svgComponents/triangleBackground';

const ProductLaunchPopup = (props) => {

	const getButtonLabel = () => {
		if (props.uiState.isProductLaunching) {
			return props.getLabel('label_product_launching');
		} else if (props.userState.mvpAchieved) {
			return props.getLabel('label_mvp_achieved');
		} else if (props.userState.daysCompleted) {
			return props.getLabel('label_view_report');
		} else if (props.userState.timeCompleted) {
			return props.getLabel('label_view_report');
		}
		return props.getLabel('label_view_report');
	}

	const closePopup = () => {
		props.setUiState({
			showOverlay: false,
			overlayComponentType: '',
			highlightDesktopHeader: false,
			highlightMetricsHeader: false,
			overlayComponent: '',
			isProductLaunching: false
		});
	}

	const onClickProductLaunch = () => {
		props.setUiState({
			isProductLaunching: true
		});
		props.postGameCompleted({});
		props.endSprint({
			launchingProduct: true,
			sprintId: props.userState.currentSprintNumber
		}, closePopup);
	}

	const renderPopupImage = () => {
		if (props.userState.mvpAchieved) {
			return <img alt="mvp_achieved" src={props.getImage('IMG_MVP_ACHIEVED')} width="100%" height="100%" />
		} else if (props.userState.daysCompleted) {
			return <img alt="days_ran_out" src={props.getImage('IMG_DAYS_RAN_OUT')} width="100%" height="100%" />
		} else if (props.userState.timeCompleted) {
			return <img alt="timer_ran_out" src={props.getImage('IMG_TIME_RAN_OUT')} width="100%" height="100%" />
		}
		return null;
	}

	const renderPopupHeading = () => {
		if (props.userState.mvpAchieved) {
			return props.getLabel('label_mvp_achieved');
		} else if (props.userState.daysCompleted) {
			return props.getLabel('label_ran_out_of_days');
		} else if (props.userState.timeCompleted) {
			return props.getLabel('label_ran_out_of_time');
		}
		return null;
	}

	const renderPopupDesc = () => {
		if (props.userState.mvpAchieved) {
			const companyName = props.getLabel('label_competitor_name');
			return props.getLabel('label_mvp_achieved_desc').replace(/%{COMPETITOR_NAME}/g, companyName);
		} else if (props.userState.daysCompleted) {
			return props.getLabel('label_ran_out_of_days_desc');
		} else if (props.userState.timeCompleted) {
			return props.getLabel('label_ran_out_of_time_desc');
		}
		return null;
	}

	const myStyles = getSkin(props.skinGuide);
	return (
		<div styleName="main-component" className={css(myStyles.completeContainer)}>
			<div styleName="popup-header-container">
				<div className={css(myStyles.headerContainer)} styleName="popup-header-container-background">
					<TriangleBackground />
				</div>
				<div styleName="popup-header-container-content">
					<div styleName="header-image">
						{renderPopupImage()}
					</div>
					<div className={css(myStyles.headerText)} styleName="header-text">
						{renderPopupHeading()}
					</div>
					{/* <div className={css(myStyles.headerDesc)} styleName="header-desc">
						{props.getLabel('label_end_sprint_popup_desc', "", {DAY_COUNT: 11 - props.userState.currentSprintDay})}
					</div> */}
				</div>
			</div>
			<div className={css(myStyles.popupText)} styleName="popup-desc-container">
				{renderPopupDesc()}
			</div>
			<div styleName="popup-buttons-container">
				<div styleName="button-container">
					<FilledButton
						textLabel={getButtonLabel()}
						clickFunction={onClickProductLaunch}
						disableButton={props.uiState.isProductLaunching}
					/>
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(ProductLaunchPopup, styles);