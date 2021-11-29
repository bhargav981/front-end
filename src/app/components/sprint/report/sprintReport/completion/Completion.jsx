import React from 'react';
import styles from './completion.module.sass';
// import getSkin from './skin.js.';
import applyWrappers from 'wrappers/ComponentWrapper';
import CircularProgressBar from 'commonComponents/circularProgressBar';


const Completion = (props) => {
	const { sprinStories, getLabel } = props;
	const total = sprinStories.length;
	const completed = sprinStories.filter((story) => {
		return story.storyStatus === 4
	}).length;
	const value = (completed/total)*100;
	return (
		<div styleName="wrap">
			<div styleName="graph">
				<CircularProgressBar value={value ? value : 0} radius={65} />
			</div>
			<div styleName="legend">
				<div styleName="leg-wrap">
					<div styleName="circle blue"></div>
					<div>{completed} {getLabel("label_report_tasks_done")}</div>
				</div>
				<div styleName="leg-wrap">
					<div styleName="circle pink"></div>
					<div>{total - completed} {getLabel("label_report_tasks_unfinished")}</div>
				</div>
			</div>
		</div>
	);
}

export default applyWrappers(Completion, styles);