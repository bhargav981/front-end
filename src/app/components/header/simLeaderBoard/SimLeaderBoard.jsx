import React from 'react';
import styles from './simLeaderBoard.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import HeaderSeparation from 'components/header/headerSeparation';
import Leaderboard from 'svgComponents/leaderboard';

const SimLeaderBoard = (props) => {

	const myStyles = getSkin(props.skinGuide);

	const openLeaderboard = () => {
		props.setUiState({
			showOverlay: true,
			showOverlayOverWalkthrough: true,
			overlayComponentType: 'CENTER',
			highlightDesktopHeader: true,
			highlightMetricsHeader: false,
			overlayComponent: 'LEADERBOARD'
		});
	}

	return (
		<div styleName="leaderboard-container" onClick={openLeaderboard}>
			<div styleName="leaderboard-image-container">
				<div styleName="leaderboard-image">
					<Leaderboard />
				</div>
			</div>
			<div styleName="leaderboard-text-container" className={css(myStyles.leaderboardText)}>
				{props.getLabel('label_header_leaderboard')}
			</div>
			<HeaderSeparation />
		</div>
	);
}

export default applyWrappers(SimLeaderBoard, styles);