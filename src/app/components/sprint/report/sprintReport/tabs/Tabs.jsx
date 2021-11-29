import React from 'react';
import styles from './tabs.module.sass';
// import getSkin from './skin.js';
// import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';



const Tabs = ({sprintCount,selected,skinGuide, setSelected, getLabel}) => {

	// const myStyles = getSkin(skinGuide);
	
	const comp =[];
	
	const box = (count, selected)=>{
		return (<div key={count} styleName={count === selected?"tab selected":"tab"} onClick={(event) => setSelected(count)}>
					<div styleName="number">
						{getLabel("label_report_sprint")} {count}
					</div>
				</div>);
	}

	for (let index = 0; index < sprintCount; index++) {
		comp.push(box(index+1,selected));
	}

	return (
		<div styleName="tab-container">
			{comp}
		</div>
	);
}

export default applyWrappers(Tabs, styles);