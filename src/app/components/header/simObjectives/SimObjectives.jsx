import React from 'react';
import styles from './simObjectives.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import HeaderSeparation from 'components/header/headerSeparation';
import Objectives from 'svgComponents/objectives';

const SimObjectives = (props) => {

	const onIntroClick = () => {
		props.setUiState({
			showOverlay: true,
			showOverlayOverWalkthrough: true,
			overlayComponentType: 'CENTER',
			highlightDesktopHeader: true,
			highlightMetricsHeader: false,
			overlayComponent: 'INTRO'
		});
	}

	const myStyles = getSkin(props.skinGuide);
	return (
		<div styleName="objectives-container" onClick={onIntroClick}>
			<div styleName="objectives-image-container">
				<div styleName="objectives-image">
					<Objectives />
				</div>
			</div>
			<div styleName="objectives-text-container" className={css(myStyles.objectivesText)}>
				{props.getLabel('label_header_intro_cap')}
			</div>
			<HeaderSeparation />
		</div>
	);
}

export default applyWrappers(SimObjectives, styles);