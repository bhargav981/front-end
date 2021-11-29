import React from 'react';
import styles from './headerSeparation.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';

const HeaderSeparation = (props) => {

	const myStyles = getSkin(props.skinGuide);
	return (
		<div styleName="separation" className={css(myStyles.separationLine)}>
		</div>
	);
}

export default applyWrappers(HeaderSeparation, styles);