import React from 'react';
import styles from './aboutTeam.module.sass';
import getSkin from './skin.js';
import {css} from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';

const renderAboutTeamComponent = props => {
  const {storylineIntro} = props;
  const myStyles = getSkin (props.skinGuide);

  return (
    <div
      styleName="about-team-container"
      className={css (myStyles.aboutTeamContainer)}
    >
        <div styleName="image-text">
          <div styleName="team-text-holder">
            <div
              styleName="team-title"
              className={css (myStyles.aboutTeamTitle)}
            >
              {props.getLabel (storylineIntro.aboutYourTeamTitle)}
            </div>
            <div styleName="team-desc" className={css (myStyles.aboutTeamDesc)}>
              {props.getLabel (storylineIntro.aboutYourTeamDesc)}
            </div>
          </div>
          <div styleName="team-image">
            <img
              styleName="image"
              src={props.getImage ('IMG_TEAM')}
              alt="Logo"
            />
          </div>
        </div>
      </div>
  );
};

export default applyWrappers (renderAboutTeamComponent, styles);
