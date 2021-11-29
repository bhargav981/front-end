import React from 'react';
import styles from './confirmation.module.sass';
import getSkin from './skin.js';
import { css } from 'aphrodite/no-important';
import applyWrappers from 'wrappers/ComponentWrapper';
import FilledButton from 'commonComponents/buttons/filledButton';
import updateRoute from 'util/webAppRoutes/updateRoute';
import RightArrow from 'svgComponents/rightArrow';

const confirmation = (props) => {

    const myStyles = getSkin(props.skinGuide);

    const moveToExecution = () => {
        updateRoute({ route: `execution/sprint/${props.userState.currentSprintNumber + 1}/planning` });
    }

    const onClickConfirmation = () => {
        props.updateCurrentPhase(
            {
                phaseId: 2
            }
        );
        props.startSprint(
            {
                sprintId: props.userState.currentSprintNumber + 1
            },
            moveToExecution
        );
    }

    const getPrdName = () => {
        let selectedPrdId = props.userPrds.selectedPrdId;

        if (!selectedPrdId && props.userPrds.userPrdsList.length > 0) {
            selectedPrdId = props.userPrds.userPrdsList[
                props.userPrds.userPrdsList.length - 1
            ].prdId;
        }

        if (!selectedPrdId) {
            return null;
        }

        const selectedPrd = props.prds.prdsList.filter(
            prd => prd.id === selectedPrdId
        )[0];

        return props.getLabel(selectedPrd.name);
    }

    const renderDayOrBudget = (title, value) => {
        return (
            <div>
                <div className={css(myStyles.dayBudgetTitle)} styleName="day-budget-title">{title}</div>
                <div className={css(myStyles.dayBudgetValue)} styleName="day-budget-value">{value}</div>
            </div>
        );
    }

    return (
        <div styleName="confirmation-container">
            <div styleName="confirmation-content">
                <div styleName="confirmation-card-container">
                    <div className={css(myStyles.confirmationCard)} styleName="confirmation-card">
                        <div className={css(myStyles.confirmationTitle)} styleName="confirmation-title">
                            You're done with the overall planning for your product!
                        </div>
                        <div styleName="phase-container">
                            <div className={css(myStyles.greyCircle)} styleName="circle"></div>
                            <div className={css(myStyles.planningPhaseName)}>PLANNING</div>
                            <div styleName="arrow">
                                <RightArrow />
                            </div>
                            <div className={css(myStyles.orageCircle)} styleName="circle"></div>
                            <div className={css(myStyles.executionPhaseName)}>EXECUTION</div>
                        </div>
                        <div className={css(myStyles.selectedPrdMessage)} styleName="selected-prd-message">
                            You've chosen to go ahead with a/an {getPrdName()} PRD
                    </div>
                        <div className={css(myStyles.dayBudgetContainer)} styleName="day-budget-container">
                            {renderDayOrBudget('Days remaining', '70 Days')}
                            {renderDayOrBudget('Budget remaining', '$4800')}
                        </div>
                    </div>
                </div>
                <div styleName="button-container">
                    <FilledButton textLabel="continue" clickFunction={onClickConfirmation} />
                </div>
            </div>
        </div>
    );
}

export default applyWrappers(confirmation, styles);