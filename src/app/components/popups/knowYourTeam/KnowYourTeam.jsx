import React from 'react';
import styles from './knowYourTeam.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import Close from 'svgComponents/close';
import Skill from 'svgComponents/skill';
import Morale from 'svgComponents/morale';
import applyWrappers from 'wrappers/ComponentWrapper';

const KnowYourTeam = (props) => {
    const closePopup = () => {
        const { tutorial } = props;

        //Start next tutorial step
        if (tutorial.stepIndex === 1) {
            props.startTutorial()
        }

        props.setUiState({
            showOverlay: false,
            overlayComponentType: '',
            highlightDesktopHeader: false,
            highlightMetricsHeader: false,
            overlayComponent: ''
        });
    }

    const getMetricColor = (value) => {
        if (value < 45) {
            return { backgroundColor: '#D63228' };
        } else if (value < 70) {
            return { backgroundColor: '#FFD452' };
        } else {
            return { backgroundColor: '#36B496' };
        }
    }

    const renderTeamMembers = () => {
        return props.teamMembers.teamList.map((item, i) => {
            return (
                <div key={i} styleName="card-style" className={css(myStyles.cardContainer)}>
                    <div styleName="card-header">
                        <div styleName="tm-member-details">
                            <img alt="avatar" width="38px" height="38px" src={item.avatar} />
                            <div styleName="tm-member-text-details">
                                <div styleName="name-details">
                                    <div className={css(myStyles.tmMemberName)}>{props.getLabel(item.name)}</div>
                                    <div className={css(myStyles.tmMemberDesignation)}>{props.getLabel(item.designation)}</div>
                                </div>
                                <div styleName="tm-member-stats">
                                    <div styleName="tm-skill-stats">
                                        <div styleName="skill-stats-header" className={css(myStyles.statName)}>
                                            <div styleName="skill-icon"><Skill /></div>
                                            {props.getLabel('label_skill')}
                                        </div>
                                        <div styleName='stat-value' style={getMetricColor(item.skill)} className={css(myStyles.statValue)}>{item.skill}%</div>
                                    </div>
                                    <div styleName="tm-morale-stats">
                                        <div styleName="skill-stats-header" className={css(myStyles.statName)}>
                                            <div styleName="skill-icon"><Morale /></div>
                                            {props.getLabel('label_morale')}
                                        </div>
                                        <div styleName='stat-value' style={getMetricColor(item.morale)} className={css(myStyles.statValue)}>{item.morale}%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                    <div className={css(myStyles.cardDesc)}>{props.getLabel(item.description)}</div>
                </div >
            );
        })
    }

    const myStyles = getSkin(props.skinGuide);
    const competitorName = props.getLabel (props.storylineIntro.competitorName);
    const appName = props.getLabel (props.storylineIntro.trackerName);
    const companyName = props.getLabel (props.storylineIntro.companyName);

    const kytInfo = props
    .getLabel('label_kyt_info')
    .replace (/%{COMPANY_NAME}/g, companyName)
    .replace (/%{TRACKER_NAME}/g, appName)
    .replace (/%{COMPETITOR_NAME}/g, competitorName);
    return (
        <div styleName="main-component">
            <div styleName="header-container" className={css(myStyles.headerContainer)}>
                <div className={css(myStyles.headerText)}>{props.getLabel('label_kyt_title')}</div>
                <div styleName="close-icon" onClick={closePopup}>
                    <Close />
                </div>
            </div>
            <div styleName="popup-body" className={css(myStyles.bodyContainer)}>
                <div className={css(myStyles.teamInfoText)}>
                    {props.getLabel('label_kyt_info', '', {
                        TRACKER_NAME: props.getLabel('label_tracker_name')
                    })}
                </div>
                {renderTeamMembers()}
            </div>
        </div>
    );
}

export default applyWrappers(KnowYourTeam, styles);