import React from 'react';
import styles from './caseAndObjectives.module.sass';
import getSkin from './skin.js';
import {css} from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import CaseStudy from 'components/intro/caseStudy';
import Objectives from 'components/intro/objectives';
import FilledButton from 'commonComponents/buttons/filledButton';
import SecondaryButton from 'commonComponents/buttons/secondaryButton';

const onClickOfContinue = props => {
  props.setIntroPage (3);
};

const onClickOfBack = props => {
  props.setIntroPage (1);
};

const renderCaseAndObjective = props => {
  const myStyles = getSkin (props.skinGuide);

  return (
    <div styleName="case-ojectives-container">
      <div styleName="img-container" className={css(myStyles.caseContainer)}>
        <div styleName="secondary-button">
          <SecondaryButton
            textLabel={props.getLabel ('label_back')}
            clickFunction={() => onClickOfBack (props)}
          />
        </div>
      </div>
      <div styleName="case-objectives-holder">
        <CaseStudy {...props} />
        <Objectives {...props} />
        <div styleName="button">
          <FilledButton
            textLabel={props.getLabel ('label_continue_cap')}
            clickFunction={() => onClickOfContinue (props)}
          />
        </div>
      </div>
    </div>
  );
};

export default applyWrappers (renderCaseAndObjective, styles);
