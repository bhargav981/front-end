import React from 'react';
import styles from './stories.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';
import { checkIfPresent } from 'util/utilFunctions';
import LowPriority from 'svgComponents/lowPriority';
import MediumPriority from 'svgComponents/mediumPriority';
import HighPriority from 'svgComponents/highPriority';

const Tabs = (props) => {

	const { sprinStories, getLabel } = props;
	const priority = (pri) => {
		const priorityList = props.priorities.prioritiesList;
		const storyPriorityDetails = priorityList.find((eachPriority) => {
			return (eachPriority.priorityId === pri)
		});
		switch (pri) {
			case 1:
				return (
					<div styleName="priority">
						<div styleName="priority-image">
							<HighPriority />
						</div>
						<div styleName="priority-letter">
							{props.getLabel(storyPriorityDetails.key)}
						</div>
					</div>
				);

			case 2:
				return (
					<div styleName="priority">
						<div styleName="priority-image">
							<MediumPriority />
						</div>
						<div styleName="priority-letter">
							{props.getLabel(storyPriorityDetails.key)}
						</div>
					</div>
				);
			case 3:
				return (
					<div styleName="priority">
						<div styleName="priority-image">
							<LowPriority />
						</div>
						<div styleName="priority-letter">
							{props.getLabel(storyPriorityDetails.key)}
						</div>
					</div>
				);
			default:
				break;
		}
	}
	const storiesRenderer = (story) => {
		return (
			<div styleName="story" key={story.id}>
				{/* <div styleName="name">{props.getLabel(story.name).substr(0, 40)}</div> */}
				<div styleName="name">{props.getLabel(story.name)}</div>
				<div styleName="bottom">
					<div styleName="info">
						{getLabel("label_report_story Points")} | <b>{story.storyPoint}</b>
					</div>
					{
						checkIfPresent(story.storyPriority)
							? priority(story.storyPriority)
							: null
					}

				</div>
			</div>
		)
	}

	const ele = sprinStories.filter((story) => story.storyStatus !== 4).map((story) => storiesRenderer(story));
	return (
		<div styleName="wrap">{ele}</div>
	);
}

export default applyWrappers(Tabs, styles);