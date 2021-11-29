import React from 'react';
import styles from './filledButton.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import { checkIfPresent } from 'util/utilFunctions';

class FilledButton extends React.Component {


    onClickOfFilledButton = () => {
        if (checkIfPresent(this.props.disableButton)) {
            if (this.props.disableButton === true) {
                return;
            } else {
                if (checkIfPresent(this.props.clickFunction)) {
                    this.props.clickFunction();
                }
            }
        } else {
            if (checkIfPresent(this.props.clickFunction)) {
                this.props.clickFunction();
            }
        }
    }

    render() {
        const myStyles = getSkin(this.props.skinGuide);
        let buttonShadowStyle = css(myStyles.buttonStyle);
        const isDisabled = checkIfPresent(this.props.disableButton)
            ? this.props.disableButton ? 1 : 0
            : 0;

        if (isDisabled) {
            buttonShadowStyle = css(myStyles.buttonStyleDisabled);
        } else {
            buttonShadowStyle = css(myStyles.buttonStyle);
        }

        return (
            <div
                className={buttonShadowStyle}
                styleName="button-style" onClick={this.onClickOfFilledButton}
                style={{
                    opacity: isDisabled ? 0.5 : 1,
                    cursor: isDisabled ? 'not-allowed' : 'pointer'
                }}
            >
                <div className={css(myStyles.buttonText)}>
                    {this.props.textLabel}
                </div>
            </div>
        );
    }
}

export default applyWrappers(FilledButton, styles);