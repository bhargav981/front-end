import React from 'react';
import styles from './aboutCompany.module.sass';
import getSkin from './skin.js';
import {css} from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';

const renderAboutCompanyComponent = props => {
  const {storylineIntro} = props;
  const myStyles = getSkin (props.skinGuide);

  const competitorName = props.getLabel (storylineIntro.competitorName);
  const appName = props.getLabel (storylineIntro.trackerName);
  const companyName = props.getLabel (storylineIntro.companyName);

  const aboutCompany = props
    .getLabel (storylineIntro.aboutYourCompanyDesc)
    .replace (/%{COMPANY_NAME}/g, companyName)
    .replace (/%{TRACKER_NAME}/g, appName)
    .replace (/%{COMPETITOR_NAME}/g, competitorName);

  return (
    <div styleName="about-company-container">
      <div styleName="about-company-content">
        <div styleName="company-image">
          <img
            styleName="image"
            src={props.getImage ('IMG_COMPANY')}
            alt="Logo"
          />
        </div>
        <div styleName="company-text-holder">
          <div
            styleName="company-title"
            className={css (myStyles.aboutCompanyTitle)}
          >
            {props.getLabel (storylineIntro.aboutYourCompanyTitle)}
          </div>
          <div
            styleName="company-desc"
            className={css (myStyles.aboutCompanyDesc)}
          >
            {aboutCompany}
          </div>
        </div>
      </div>
    </div>
  );
};

export default applyWrappers (renderAboutCompanyComponent, styles);
