import React from 'react';
import styles from './circularProgressBar.module.sass';
// import getSkin from './skin.js';
// import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';

const CircularProgressBar = (props) => {

	// const myStyles = getSkin(props.skinGuide);

	const value = Math.round(props.value)
	const color = '#232882';
	const trailColor = '#FF1E50';
	const radius = props.radius;
	const circlePerc = 1;
	const strokeWidth = 20;
	const trailWidth = 20;




	const circumference = 2 * 3.14 * radius;
	const fillValue = value * (circumference / 100) * circlePerc;
	const strokeValue = `${fillValue},${circumference}`;
	const width = 2 * radius + 2 * strokeWidth;
	const height = 2 * radius + 2 * strokeWidth;
	const halfWidth = radius + strokeWidth;
	const halfHeight = radius + strokeWidth;

	const widthOfText = 24 + (16* value.toString().length)
	return (
		<div styleName="bar-container">
			<div styleName="progressbar-container">
				<div styleName="progress-number" style={
					{left: strokeWidth+ radius - widthOfText/2}
				}>
					{`${value}%`}
				</div>
				<svg width={`${width}px`} height={`${height}px`}
					style={{
						WebkitTransform: 'rotate(90deg)',
						transform: 'rotate(90deg)'
					}}
				>
					<g>
						<circle r={radius} cy={`${halfHeight}px`} cx={`${halfWidth}px`}
							strokeWidth={trailWidth} stroke={`${trailColor}`} fill="none" stroke-dasharray={circumference * circlePerc}></circle>
						<circle r={radius} cy={`${halfHeight}px`} cx={`${halfWidth}px`}
							strokeWidth={strokeWidth} stroke={color} fill="none" stroke-dasharray={strokeValue}></circle>
					</g>
				</svg>
			</div>
		</div>
	);
}

export default applyWrappers(CircularProgressBar, styles);