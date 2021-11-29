import React from 'react';
import styles from './prds.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import PlanningHeader from '../planningHeader';
import { checkIfPresent } from 'util/utilFunctions';
import InfoComponent from 'commonComponents/infoComponent';
import SelectedTaskButton from 'svgComponents/selectedTaskButton';
import { compareOnId } from 'util/utilFunctions';

const prds = (props) => {

    const myStyles = getSkin(props.skinGuide);

    const isPrdSelected = (prd) => prd.id === props.userPrds.selectedPrdId

    const renderCostOrDays = (title, value, info) => {
        return (
            <div styleName="prd-cost-day-content">
                <div className={css(myStyles.costDayTitle)} styleName="prd-cost-day-title">{props.getLabel(title)}</div>
                <div className={css(myStyles.costDayTitleValueSeperator)} styleName="cost-day-title-value-sepetator" />
                <div className={css(myStyles.costDayValue)} styleName="prd-cost-day-value">{value}</div>
                <InfoComponent
                    tooltipText={props.getLabel(info)}
                    alignTooltipKey="TOP"
                    propStyles={{
                        width: '10px',
                        height: '10px',
                        marginTop: '2px'
                    }}
                />
            </div>
        );
    }

    const renderRadioButton = (prd) => {
        if (isPrdSelected(prd)) {
            return (
                <div styleName="radio-circle">
                    <SelectedTaskButton />
                </div>
            );
        }
        return <div className={css(myStyles.uncheckedRadioCircle)} styleName="radio-circle" />
    }

    const renderPrdImage = (prd) => {
        if (checkIfPresent(prd.imageKey)) {
            return <img alt={`prd-${prd.imageKey}`} src={props.getImage(prd.imageKey.toUpperCase())} />;
        }

        return <img alt="default-prd" src={props.getImage('IMG_DEFAULT_PRD')} />;
    }

    const renderPrdsList = () => {
        const prdsList = props.prds.prdsList.sort(compareOnId);
        return prdsList.map(prd => {
            let prdCardStyle = myStyles.prdCard;

            if (isPrdSelected(prd)) {
                prdCardStyle = myStyles.selectedPrdCard
            }

            return (
                <div
                    key={prd.id}
                    className={css(prdCardStyle)}
                    styleName="prd-card"
                    onClick={() => props.setUserPrd(prd.id)}
                >
                    <div styleName="prd-image-container">
                        {renderPrdImage(prd)}
                    </div>
                    {renderRadioButton(prd)}
                    <div className={css(myStyles.prdTitle)} styleName="prd-title">
                        {props.getLabel(prd.name)}
                    </div>
                    <div className={css(myStyles.prdDescription)} styleName="prd-description">
                        {props.getLabel(prd.description)}
                    </div>
                    <div className={css(myStyles.seperatorLine)} styleName="seperator-line" />
                    <div styleName="prd-cost-days-container">
                        {renderCostOrDays(prd.costTitle, `$${prd.cost}`, prd.costDescription)}
                        {renderCostOrDays(prd.effortTitle, `${props.getLabel('label_number_days','',{DAY_NUMBER:prd.effort})}`, prd.effortDescription)}
                    </div>
                </div>
            );
        });
    }

    const disableStyle = {
        pointerEvents: 'none',
        opacity: 0.5
    }

    return (
        <div styleName="prds-container">
            <div styleName="prds-content">
                <PlanningHeader selectedTabNumber={2} />
                <div styleName="prds-list-container">
                    <div styleName="prds-list" style={props.disableSelection ? disableStyle : {}}>
                        {renderPrdsList()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default applyWrappers(prds, styles);