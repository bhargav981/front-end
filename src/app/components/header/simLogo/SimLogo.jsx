import React from 'react';
import styles from './simLogo.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import HeaderSeparation from 'components/header/headerSeparation';

const SimLogo = (props) => {

	const myStyles = getSkin(props.skinGuide);
	return (
		<div styleName="sim-logo-container">
			<div styleName="sim-logo">
				<div styleName="sim-image">
					<img width="100%" height="100%" src={props.getImage('IMG_AGILE')} alt="Logo" />
				</div>
				<div styleName="sim-name" className={css(myStyles.simName)}>
					{props.getLabel('simName')}
				</div>
			</div>
			<HeaderSeparation />
		</div>
	);
}

export default applyWrappers(SimLogo, styles);