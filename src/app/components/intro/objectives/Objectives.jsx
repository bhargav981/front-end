import React from 'react';
import styles from './objectives.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';

const renderObjectivesComponent = (props) => {
    const {storylineIntro} = props;
    
    const myStyles = getSkin (props.skinGuide);

        
    const competitorName = props.getLabel(storylineIntro.competitorName);
	const appName = props.getLabel(storylineIntro.trackerName);
	const companyName = props.getLabel(storylineIntro.companyName);

	const objectives = props.getLabel(storylineIntro.objectivesDesc)
								.replace('%{TRACKER_NAME}', appName)
								.replace('%{COMPETITOR_NAME}', competitorName)
								.replace('%{COMPANY_NAME}', companyName);


    return (
        <div styleName="objectives-container" className={css (myStyles.objectivesContainer)}>
            <div styleName="objectives-title" className={css (myStyles.objectivesTitle)}>
                {props.getLabel(storylineIntro.objectivesTitle)}
            </div>
            <div styleName="objectives-desc" className={css (myStyles.objectivesDesc)}
                dangerouslySetInnerHTML={{__html : objectives}}>
            </div>
        </div>
    )
}

export default applyWrappers (renderObjectivesComponent, styles);