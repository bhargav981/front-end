import React from 'react';
import styles from './desktopFooter.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';

const DesktopFooter = (props) => {

	const openKnolskapeLink = () => {
		window.open("https://www.knolskape.com", "_blank");
	}

	const myStyles = getSkin(props.skinGuide);
	return (
		<div className={css(myStyles.footerContainer)} styleName="footer-container">
			<div className={css(myStyles.textClass)} styleName="sim-name">{props.getLabel('label_footer_sim_name')}</div>
			<div className={css(myStyles.textClass)} styleName="footer-bar">|</div>
			<div className={css(myStyles.textClass)} styleName="sim-tag">{props.getLabel('label_footer_sim_tag')}</div>
			<div className={css(myStyles.textClass)} styleName="footer-bar">|</div>
			<div onClick={() => { openKnolskapeLink(); }} className={css(myStyles.textClass)} styleName="knolskape-logo">
				<img src={props.getImage('IMG_KNOLSKAPE_LOGO')} alt="logo" height="14px" width="14px" />
			</div>
			<div onClick={() => { openKnolskapeLink(); }} className={css(myStyles.textClass, myStyles.linkKnolskape)} styleName="knolskape-name">{props.getLabel('label_footer_knolskape_name')}</div>
			<div className={css(myStyles.textClass)} styleName="copyright">&copy; {new Date().getFullYear()}</div>
		</div>
	);
}

export default applyWrappers(DesktopFooter, styles);