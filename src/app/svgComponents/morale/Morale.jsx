import React from 'react';
import styles from './morale.module.sass';
// import getSkin from './skin.js';
import applyWrappers from 'wrappers/ComponentWrapper';

const Morale = (props) => {

	// const myStyles = getSkin(props.skinGuide);
	return (
		<div styleName="main-component">
			<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none">
				<g opacity="0.5">
					<path d="M15.588 1.44928C15.431 1.34243 15.2481 1.27985 15.0585 1.26812C14.8689 1.25639 14.6797 1.29594 14.5107 1.38262C13.6353 1.7384 12.7043 1.93809 11.76 1.97262C10.6828 1.89335 9.62049 1.67395 8.6 1.31995C6.362 0.666617 5.58667 0.51195 3.87067 0.733283C3.6296 0.764726 3.40823 0.882912 3.24799 1.06574C3.08774 1.24856 2.99958 1.4835 3 1.72662V11.74C3.00001 11.8809 3.02984 12.0203 3.08752 12.149C3.1452 12.2776 3.22944 12.3926 3.3347 12.4865C3.43996 12.5803 3.56386 12.6507 3.69829 12.6933C3.83271 12.7358 3.97461 12.7495 4.11467 12.7333C5.618 12.5606 6.318 12.7073 8.40934 13.3193C9.491 13.6941 10.6178 13.923 11.76 14C12.9268 13.9567 14.0753 13.6962 15.1467 13.232C15.5947 13.0613 16 12.832 16 12.2133V2.26662C16.0013 2.10742 15.9647 1.95021 15.893 1.80805C15.8213 1.66588 15.7168 1.54289 15.588 1.44928ZM12.0087 7.09128L9.23467 10.558C9.21083 10.5876 9.1784 10.6091 9.14184 10.6195C9.10528 10.6299 9.06638 10.6288 9.0305 10.6162C8.99462 10.6037 8.96351 10.5803 8.94146 10.5493C8.9194 10.5183 8.90748 10.4813 8.90734 10.4433V7.98328C8.90734 7.93908 8.88978 7.89669 8.85852 7.86543C8.82726 7.83418 8.78487 7.81662 8.74067 7.81662H7.53334C7.49624 7.81545 7.46019 7.80397 7.42924 7.78348C7.39829 7.76299 7.37366 7.73429 7.35809 7.7006C7.34252 7.6669 7.33664 7.62954 7.3411 7.59269C7.34555 7.55584 7.36018 7.52096 7.38334 7.49195L10.158 4.02528C10.1817 3.99554 10.2141 3.97391 10.2507 3.9634C10.2872 3.95289 10.3262 3.95401 10.3621 3.96661C10.398 3.97921 10.429 4.00266 10.451 4.03372C10.473 4.06478 10.4847 4.10191 10.4847 4.13995V6.59995C10.4847 6.64415 10.5022 6.68654 10.5335 6.7178C10.5647 6.74906 10.6071 6.76662 10.6513 6.76662H11.862C11.8991 6.76779 11.9351 6.77926 11.9661 6.79975C11.997 6.82024 12.0217 6.84894 12.0373 6.88263C12.0528 6.91633 12.0587 6.95369 12.0542 6.99054C12.0498 7.02739 12.0352 7.06227 12.012 7.09128H12.0087Z" fill="#232882" />
					<path d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1L0 15C0 15.2652 0.105357 15.5196 0.292893 15.7071C0.48043 15.8946 0.734784 16 1 16C1.26522 16 1.51957 15.8946 1.70711 15.7071C1.89464 15.5196 2 15.2652 2 15V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0V0Z" fill="#232882" />
				</g>
			</svg>
		</div>
	);
}

export default applyWrappers(Morale, styles);