import React from 'react';
import styles from './actionLoader.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import { checkIfPresent } from 'util/utilFunctions';

const ActionLoader = (props) => {

	const myStyles = getSkin(props.skinGuide);
	const skin = props.skinGuide.globalProfiles.palette;

	return (
		<div>
			<div styleName="svg-container">
				<div styleName="svg-wrapper">
					<svg width="100%" height="100%" viewBox="0 0 70 70" stroke="#FA9C42">
						<g fill="none" fillRule="evenodd">
							<g transform="translate(1 1)" strokeWidth="3">
								<circle cx="35" cy="25" r="20">
									<animate attributeName="cx"
										begin="0s" dur="2.2s"
										values="35;45;25;35"
										calcMode="linear"
										repeatCount="indefinite" />
									<animate attributeName="cy"
										begin="0s" dur="2.2s"
										values="25;45;45;25"
										calcMode="linear"
										repeatCount="indefinite" />
								</circle>
								<circle cx="25" cy="45" r="20">
									<animate attributeName="cx"
										begin="0s" dur="2.2s"
										from="5" to="5"
										values="25;35;45;25"
										calcMode="linear"
										repeatCount="indefinite" />
									<animate attributeName="cy"
										begin="0s" dur="2.2s"
										from="27" to="27"
										values="45;25;45;45"
										calcMode="linear"
										repeatCount="indefinite" />
								</circle>
								<circle cx="45" cy="45" r="20">
									<animate attributeName="cx"
										begin="0s" dur="2.2s"
										values="45;25;35;45"
										calcMode="linear"
										repeatCount="indefinite" />
									<animate attributeName="cy"
										from="49" to="49"
										begin="0s" dur="2.2s"
										values="45;45;25;45"
										calcMode="linear"
										repeatCount="indefinite" />
								</circle>
							</g>
						</g>
					</svg>
				</div>
			</div>
			<div className={css(myStyles.loadingLabel)}>
				{props.getLabel('label_loading')}
			</div>
		</div>
	);
}

export default applyWrappers(ActionLoader, styles);