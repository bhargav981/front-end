import React from 'react';
import styles from './history.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import HistorySvg from 'svgComponents/historySvg';
import { checkIfPresent } from 'util/utilFunctions';


const History = (props) => {

	const { getLabel, setUiState } = props;

	const myStyles = getSkin(props.skinGuide);
	return (
		<div styleName="history-container">
			<div
				styleName="history-content"
				className={css(myStyles.historyContent)}
				style={{
					height: checkIfPresent(props.height) ? props.height : '46px'
				}}
				onClick={(e) =>
					setUiState({
						showOverlay: true,
						overlayComponentType: 'RIGHT',
						highlightDesktopHeader: true,
						highlightMetricsHeader: false,
						overlayComponent: 'HISTORY_POPUP'
					})
				}
			>
				<div styleName="history-image">
					<HistorySvg />
				</div>
				<div styleName="history-name" className={css(myStyles.historyName)}>
					{getLabel("label_history_history")}
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(History, styles);