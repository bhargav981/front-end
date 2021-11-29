import React from 'react';
import styles from './dropDown.module.sass';
import applyWrappers from 'wrappers/ComponentWrapper';
import {checkIfPresent} from 'util/utilFunctions';

const DropDown = (props) => {
  const skin = props.skinGuide.globalProfiles.palette
  let color = skin.grayColor4;
  if (checkIfPresent(props.svgColor)) {
    color = props.svgColor;
  }
  return (
    <div styleName="main-component">
      <svg
        width="12"
        height="6"
        viewBox="0 0 12 6"
        fill="none">
        <path
          d="M6.35355 0.353553L11.1464 5.14645C11.4614 5.46143 11.2383 6 10.7929 6L1.20711 6C0.761655 6 0.538571 5.46143 0.853554 5.14645L5.64645 0.353553C5.84171 0.158291 6.15829 0.158291 6.35355 0.353553Z"
          fill="#031A20"/>
      </svg>
    </div>
  );
}

export default applyWrappers(DropDown, styles);
