import React, { Component } from 'react';
import styles from './primaryButton.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';

class PrimaryButton extends Component {

    onClickOfPrimaryButton = () => {
        const { clickFunction } = this.props;
        clickFunction();
    }

    render() {
        let buttonShadow = true;
        if (this.props.showButtonShadow !== undefined && this.props.showButtonShadow !== null) {
            buttonShadow = this.props.showButtonShadow;
        }
        const myStyles = getSkin(this.props.skinGuide);
        const buttonShadowStyle = buttonShadow
            ? css(myStyles.buttonStyle)
            : css(myStyles.buttonStyleWithoutShadow);
        return (
            <div
                className={buttonShadowStyle}
                styleName="button-style" onClick={this.onClickOfPrimaryButton}>
                <div className={css(myStyles.buttonText)} styleName="button-text">
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default applyWrappers(PrimaryButton, styles);
