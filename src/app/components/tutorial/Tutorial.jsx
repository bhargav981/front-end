import React from 'react';
import ReactJoyride, { ACTIONS, EVENTS } from 'react-joyride';

class Tutorial extends React.Component {

    getLabel = (key) => {
        return this.props.labels.labelsList[key];
    }

    stopOngoingTutorial = () => {
        this.props.pauseTutorial();
    }

    getNextStepNumber = (data) => {
        if (data.action === ACTIONS.PREV) {
            return this.props.tutorial.stepIndex - 1
        } else if (data.action === ACTIONS.NEXT) {
            return this.props.tutorial.stepIndex + 1
        } else if (data.action === ACTIONS.CLOSE) {
            this.stopOngoingTutorial()
        }
    }

    callback = (data) => {
        let nextStepId;
        const { tutorial } = this.props
        switch (data.type) {
            case EVENTS.STEP_AFTER:
                // eslint-disable-next-line
                if ((tutorial.type == "sprintPlanningScreen") || tutorial.type == "sprintExecutionScreen" || (tutorial.type == "sprintPlanningFinalScreen")
                || (tutorial.type == "sprintReportScreen")
                ) {
                    nextStepId = this.getNextStepNumber(data);
                    this.props.updateStepNumber(nextStepId);
                }
                break;
            default:
                break;
        }

        // eslint-disable-next-line
        if (tutorial.type == "sprintPlanningScreen" && tutorial.stepIndex === 5 && (data.index === 4 && data.status === "finished")) {
            this.props.endTutorial();
        }

        if (tutorial.type == "sprintPlanningFinalScreen" && tutorial.stepIndex === 2 && (data.index === 1 && data.status === "finished")) {
            this.props.endTutorial();
        }

        if (tutorial.type == "sprintReportScreen" && tutorial.stepIndex === 2 && (data.index === 1 && data.status === "finished")) {
            this.props.endTutorial();
        }
    }

    render() {
        const nextBtnText = this.getLabel('label_tut_next_button')
        const finishBtnText = this.getLabel('label_tut_finish_button')
        const previousBtnText = this.getLabel('label_previous')
        return (
            <ReactJoyride
                ref={(c) => (this.joyride = c)}
                continuous
                run={this.props.tutorial.isRunning}
                steps={this.props.tutorial.steps}
                stepIndex={this.props.tutorial.stepIndex}
                callback={this.callback}
                styles={
                    {
                        options: {
                            backgroundColor: 'white',
                            overlayColor: 'rgba(0, 0, 0, 0.85)',
                            primaryColor: 'black',
                            textColor: 'black',
                            arrowColor: 'white',
                        },
                        buttonClose: {
                            display: 'none',
                        }
                    }
                }
                // disableOverlay={false}
                locale={{ last: finishBtnText,back: previousBtnText, next: nextBtnText }}
                disableBeacon
                disableCloseOnEsc
                disableOverlayClose
                scrollToFirstStep
                showBackButton
                disableOverlayClicks
                disableScrolling
            />
        );
    }
}

Tutorial.propTypes = {};
Tutorial.defaultProps = {};

export default Tutorial;