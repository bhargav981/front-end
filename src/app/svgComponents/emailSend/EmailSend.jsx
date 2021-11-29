import React from 'react';
import styles from './emailSend.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';

const EmailSend = (props) => {

	const myStyles = getSkin(props.skinGuide);
	return (
		<div styleName="main-component">
			<svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
				<path d="M19.7631 9.79751C19.7631 9.67697 19.6892 9.56907 19.5768 9.52581L5.93343 4.28299C5.82872 4.24311 5.71018 4.2668 5.62838 4.34395C5.54659 4.42109 5.51599 4.53808 5.54964 4.64499L6.88304 8.84481C6.89935 8.90134 6.94816 8.94233 7.00669 8.94865L14.6969 9.67394C14.7721 9.68005 14.83 9.74235 14.8306 9.81775C14.8313 9.89316 14.7744 9.95691 14.6994 9.96492L7.02325 10.8846C6.96513 10.8915 6.91663 10.9325 6.90014 10.9887L5.63885 15.2213C5.60791 15.3252 5.63687 15.4375 5.7141 15.513L5.72202 15.5208C5.80501 15.5959 5.92389 15.6168 6.02794 15.5744L19.5798 10.0706C19.6909 10.0255 19.7635 9.91725 19.7631 9.79751Z"
				fill="white" />
			</svg>
		</div>
	);
}

export default applyWrappers(EmailSend, styles);