import React from 'react';
import styles from './planningHeader.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import InfoComponent from 'commonComponents/infoComponent';
import { hexToRgbA } from 'util/styleUtil';

const planningHeader = (props) => {

    const myStyles = getSkin(props.skinGuide);
    const skin = props.skinGuide.globalProfiles.palette;

    let tabNumber = 0;

    const getSelectedTabDescription = () => {
        if (props.selectedTabNumber === 1) {
            return props.getLabel('label_view_feature_description');
        }

        if (props.selectedTabNumber === 2) {
            return props.getLabel('label_choose_prd_description');
        }

        return 'No Description';
    }

    const renderTab = (tabTitle, tabTitleInfo) => {
        tabNumber++;

        let tabNumberStyle = css(myStyles.tabNumber);
        let tabTitleStyle = css(myStyles.tabTitle);

        if (tabNumber !== props.selectedTabNumber) {
            tabNumberStyle = css(myStyles.tabNumber, myStyles.tabNumberDisabled);
            tabTitleStyle = css(myStyles.tabTitle, myStyles.tabTitleDisabled);
        }

        return (
            <div styleName="tab-container">
                <div className={tabNumberStyle} styleName="tab-number">
                    {tabNumber}
                </div>
                <div className={tabTitleStyle} styleName="tab-title">
                    {props.getLabel(tabTitle)}
                </div>
                <InfoComponent
                    tooltipText={props.getLabel(tabTitleInfo)}
                    alignTooltipKey="TOP"
                    propStyles={{
                        width: '12px',
                        height: '12px'
                    }}
                    svgColor={hexToRgbA(skin.grayColor4, 0.5)}
                />
            </div>
        );
    }

    return (
        <div styleName="planning-header-container">
            <div styleName="tabs-container">
                {renderTab('label_view_feature', 'label_view_feature_info')}
                <div className={css(myStyles.tabSeperationLine)} styleName="tab-seperation-line" />
                {renderTab('label_choose_prd', 'label_choose_prd_info')}
            </div>
            <div className={css(myStyles.selectedTabDescription)} styleName="selected-tab-description">
                {getSelectedTabDescription()}
            </div>
            <div className={css(myStyles.seperationLine)} styleName="seperation-line" />
        </div>
    );
}

export default applyWrappers(planningHeader, styles);