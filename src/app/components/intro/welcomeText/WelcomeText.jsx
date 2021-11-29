import React from 'react';
import styles from './welcomeText.module.sass';
import getSkin from './skin.js';
import {css} from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';

const renderWelcomeTextComponent = props => {
  const {storylineIntro} = props;
  const myStyles = getSkin (props.skinGuide);

  const competitorName = props.getLabel (storylineIntro.competitorName);
  const appName = props.getLabel (storylineIntro.trackerName);
  const companyName = props.getLabel (storylineIntro.companyName);

  const welcomeText = props
    .getLabel (storylineIntro.welcomeTextDesc)
    .replace ('%{TRACKER_NAME}', appName)
    .replace ('%{COMPETITOR_NAME}', competitorName)
    .replace ('%{COMPANY_NAME}', companyName);

  return (
    <div styleName="welcome-container">
      <div
        styleName="welcome-content"
        className={css (myStyles.welcomeContainer)}
      >
        <div styleName="ceo-image">
          <img styleName="image" src={props.getImage ('IMG_CEO')} alt="Logo" />
        </div>
        <div styleName="welcome-box">
          <div
            styleName="welcome-title"
            className={css (myStyles.welcomeTitle)}
          >
            {props.getLabel (storylineIntro.welcomeTextTitle)}
          </div>
          <div
            styleName="welcome-desc"
            className={css (myStyles.welcomeDesc)}
            dangerouslySetInnerHTML={{__html: welcomeText}}
          />
        </div>
      </div>
    </div>
  );
};

export default applyWrappers (renderWelcomeTextComponent, styles);
