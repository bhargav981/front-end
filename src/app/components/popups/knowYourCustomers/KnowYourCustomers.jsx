import React from 'react';
import styles from './knowYourCustomers.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import Close from 'svgComponents/close';
import KycIcon from 'svgComponents/kycIcon'
import applyWrappers from 'wrappers/ComponentWrapper';

const KnowYourCustomers = (props) => {
    const closePopup = () => {
        props.setUiState({
            showOverlay: false,
            overlayComponentType: '',
            highlightDesktopHeader: false,
            highlightMetricsHeader: false,
            overlayComponent: ''
        });
    }

    const renderCustomers = () => {
        return props.customers.customerList.map((item, index) => {
            return (
                <div styleName="card-style" key={index} className={css(myStyles.cardContainer)}>
                    <div styleName="card-header">
                        <div styleName="tm-member-details">
                            <img alt="avatar" width="38px" height="38px" src={item.avatar} />
                            <div styleName="name-details">
                                <div className={css(myStyles.tmMemberName)}>{props.getLabel(item.name)}</div>
                                <div className={css(myStyles.tmMemberDesignation)}>{props.getLabel(item.designation)}</div>
                            </div>
                        </div>
                    </div>
                    <div className={css(myStyles.cardDesc)} dangerouslySetInnerHTML={{ __html: props.getLabel(item.description) }}></div>
                </div >
            );
        })
    }

    const myStyles = getSkin(props.skinGuide);

    const competitorName = props.getLabel(props.storylineIntro.competitorName);
    const appName = props.getLabel(props.storylineIntro.trackerName);
    const companyName = props.getLabel(props.storylineIntro.companyName);

    const kycInfo = props
        .getLabel('label_kyc_info')
        .replace(/%{COMPANY_NAME}/g, companyName)
        .replace(/%{TRACKER_NAME}/g, appName)
        .replace(/%{COMPETITOR_NAME}/g, competitorName);

    return (
        <div styleName="main-component">
            <div styleName="header-container" className={css(myStyles.headerContainer)}>
                <div className={css(myStyles.headerText)}>{props.getLabel('label_kyc_title')}</div>
                <div styleName="close-icon" onClick={closePopup}>
                    <Close />
                </div>
            </div>
            <div styleName="popup-body" className={css(myStyles.bodyContainer)}>
                <div className={css(myStyles.teamInfoText)}>
                    {props.getLabel('label_kyc_info', '', {
                        TRACKER_NAME: props.getLabel('label_tracker_name')
                    })}
                </div>
                {renderCustomers()}
            </div>
            <div styleName="footer-container" className={css(myStyles.footerContainer)}>
                <div styleName="footer-image" className={css(myStyles.footerImage)}>
                    <div styleName="cpo-details">
                        <img height="54px" width="54px" src="https://webassets.knolskape.com/misc/sindhu_anandhakrishnan/2019/07/22/35/cpo.svg" />
                        <div className={css(myStyles.cpoName)}>{props.getLabel('label_cpo_name')}</div>
                        <div className={css(myStyles.cpoPos)}>{props.getLabel('label_cpo_pos')}</div>
                    </div>
                </div>
                <div>
                    {props.getLabel('label_kyc_insights')}
                </div>
            </div>
        </div>
    );
}

export default applyWrappers(KnowYourCustomers, styles);