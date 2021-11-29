import React from 'react';
import styles from './caseStudy.module.sass';
import getSkin from './skin.js';
import {css} from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';

const renderCaseStudyComponent = props => {
  const {storylineIntro} = props;
  const competitorName = props.getLabel (storylineIntro.competitorName);
  const companyName = props.getLabel (storylineIntro.companyName);
  const appName = props.getLabel (storylineIntro.trackerName);
  const caseStudy = props
    .getLabel (storylineIntro.caseStudyDesc)
    .replace (/%{COMPANY_NAME}/g, companyName)
    .replace (/%{TRACKER_NAME}/g, appName)
    .replace (/%{COMPETITOR_NAME}/g, competitorName);

  const myStyles = getSkin (props.skinGuide);

  return (
    <div styleName="case-study-container">
      <div styleName="case-study-title" className={css (myStyles.caseTitle)}>
        {props.getLabel (storylineIntro.caseStudyTitle)}
      </div>
      <div
        styleName="case-study-desc"
        className={css (myStyles.caseDesc)}
        dangerouslySetInnerHTML={{__html: caseStudy}}
      />
    </div>
  );
};

export default applyWrappers (renderCaseStudyComponent, styles);
