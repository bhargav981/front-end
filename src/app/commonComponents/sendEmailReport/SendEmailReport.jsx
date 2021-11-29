import React, { useState } from 'react';
import styles from './sendEmailReport.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import EmailSend from 'svgComponents/emailSend';
import { getUserName } from 'util/utilFunctions';

const renderStatusMessage = (props) => {
	if(props.uiState.isMailBeingSent == true) {
		return props.getLabel('label_email_sending');
	} else  {
		if(props.uiState.showMailStatusMessage == true) {
			if (props.uiState.mailSentSuccessfully == true) {
				return props.getLabel('label_email_is_sent');
			} else {
				return props.getLabel('label_email_not_sent');
			}
		}
	}
}

const SendEmailReport = (props) => {

	const [isEmailValid, setIsEmailValid] = useState(false);
	const [enableSend, setEnableSend] = useState(false);
	const [emailId, setEmailId] = useState('');

	const onChangeEmail = (e) => {
		var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		setEmailId(e.target.value);
		if (e.target.value.match(emailRegex)) {
			setIsEmailValid(true);
			setEnableSend(true);
		} else {
			setIsEmailValid(false);
			setEnableSend(false);
		}
	}
	
	const makeEmailEmpty = () => {
		setEmailId('');
		document.getElementById('user-email').value = '';
	}

	const onClickSendEmail = () => {
		if(enableSend == false || props.uiState.isMailBeingSent == true) {
			return 1;
		}
		props.setUiState({
			isMailBeingSent: true
		})
		props.postMailReport({
			mailId: emailId,
            userName: getUserName(props.userDetails)
		}, makeEmailEmpty);
	}

	const myStyles = getSkin(props.skinGuide);
	return (
		<div styleName="email-report-container">
			<div className={css(myStyles.emailHeading)} styleName="email-heading">
				{props.getLabel('label_send_email_heading')}
			</div>
			<div className={css(myStyles.emailInputContainer)} styleName="email-input-container">
				<div styleName="email-input">
					<input
						id="user-email"
						type="text"
						placeholder={props.getLabel('label_send_email_placeholder')}
						name="emailAddress"
						styleName="email-input-element"
						className={css(myStyles.emailInputElement)}
						onChange={(e) => {
							onChangeEmail(e);
						}}
					/>
				</div>
				<div onClick={onClickSendEmail} styleName="email-send"
					className={enableSend && props.uiState.isMailBeingSent == false ? css(myStyles.emailSendEnable) : css(myStyles.emailSendDisable)}
				>
					<EmailSend />
				</div>
			</div>
			<div className={css(myStyles.emailStatusText)} styleName="email-status-bar">
				{
					isEmailValid || emailId == '' || props.uiState.isMailBeingSent
						? null
						: props.getLabel('label_enter_valid_email')
				}
				{renderStatusMessage(props)}
			</div>
		</div>
	);
}

export default applyWrappers(SendEmailReport, styles);