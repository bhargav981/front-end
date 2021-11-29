import React from 'react';
import './tutorialSequence.css';
import teamMembersStyle from 'components/metricsHeader/teamMembers/teamMembers.module.sass';
import customerStyle from 'components/metricsHeader/customers/customers.module.sass'
import sprintCompStyle from 'components/metricsHeader/sprintComponent/sprintComponent.module.sass';

const getSimPlanningSteps = (step1Header, step1Text, step2Header, step2Text, cponame, cpotitle, tutorialImage) => {
    return [
        {
            target: "." + teamMembersStyle["tm-container"], //get first mail
            content: (
                <div className='step-1-container'>
                    <div className='step-1-container-img-box'>
                        <img src={tutorialImage}
                            style={{ width: '100%', height: '56px' }}
                        />
                        <div className='img-text'>{cponame}</div>
                        <div className='img-text'>{cpotitle}</div>
                    </div>
                    <div className='step-1-container-text-box'>
                        <div className='step-1-container-header'>{step1Header}</div>
                        <div className='step-1-container-text'>{step1Text}</div>
                    </div>
                </div>
            ),
            textAlign: "center",
            disableBeacon: true,
            disableOverlayClose: true,
            hideFooter: true,
            spotlightClicks: true,
            placement: "bottom",
            styles: {
                options: {
                    zIndex: 10000
                }
            }
        },
        {
            target: "." + customerStyle["customers-container"], //get first mail
            content: (
                <div className='step-1-container'>
                    <div className='step-1-container-img-box'>
                        <img src={tutorialImage}
                            style={{ width: '100%', height: '56px' }}
                        />
                        <div className='img-text'>{cponame}</div>
                        <div className='img-text'>{cpotitle}</div>
                    </div>
                    <div className='step-1-container-text-box'>
                        <div className='step-1-container-header'>{step2Header}</div>
                        <div className='step-1-container-text'>{step2Text}</div>
                    </div>
                </div>
            ),
            textAlign: "center",
            disableBeacon: true,
            disableOverlayClose: true,
            hideFooter: true,
            spotlightClicks: true,
            placement: "bottom",
            styles: {
                options: {
                    zIndex: 10000
                }
            }
        }
    ]
};

const getSprintPlanningSteps = (step1Text, step2Text, step3Text, stepMetricsTutorial, stepMVPTutorial, cponame, cpotitle, tutorialImage) => {
    return [
        {
            target: ".metric-tutorial",
            content: (
                <div className='step-1-container'>
                    <div className='step-2-container-img-box'>
                        <img src={tutorialImage}
                            style={{ width: '100%', height: '36px' }}
                        />
                        <div className='img-text'>{cponame}</div>
                        <div className='img-text'>{cpotitle}</div>
                    </div>
                    <div className='step-2-container-text-box'>
                        <div className='step-2-container-text'>
                            {stepMetricsTutorial}
                        </div>
                    </div>
                </div>
            ),
            textAlign: "center",
            placement: "bottom",
            disableBeacon: true,
            disableOverlayClose: true,
            styles: {
                options: {
                    zIndex: 10000
                }
            }
        },
        {
            target: ".metric-tutorial-mvp",
            content: (
                <div className='step-1-container'>
                    <div className='step-2-container-img-box'>
                        <img src={tutorialImage}
                            style={{ width: '100%', height: '36px' }}
                        />
                        <div className='img-text'>{cponame}</div>
                        <div className='img-text'>{cpotitle}</div>
                    </div>
                    <div className='step-2-container-text-box'>
                        <div className='step-2-container-text'>
                            {stepMVPTutorial}
                        </div>
                    </div>
                </div>
            ),
            textAlign: "center",
            placement: "bottom",
            disableBeacon: true,
            disableOverlayClose: true,
            styles: {
                options: {
                    zIndex: 10000
                }
            }
        },
        {
            target: "." + sprintCompStyle["sprint-container"],
            content: (
                <div className='step-1-container'>
                    <div className='step-2-container-img-box'>
                        <img src={tutorialImage}
                            style={{ width: '100%', height: '36px' }}
                        />
                        <div className='img-text'>{cponame}</div>
                        <div className='img-text'>{cpotitle}</div>
                    </div>
                    <div className='step-2-container-text-box'>
                        <div className='step-2-container-text'>
                            {step1Text}
                        </div>
                    </div>
                </div>
            ),
            textAlign: "center",
            placement: "bottom",
            disableBeacon: true,
            disableOverlayClose: true,
            styles: {
                options: {
                    zIndex: 10000
                }
            }
        },
        {
            target: "#task-card-0",
            content: (
                <div className='step-1-container'>
                    <div className='step-2-container-img-box'>
                        <img src={tutorialImage}
                            style={{ width: '100%', height: '36px' }}
                        />
                        <div className='img-text'>{cponame}</div>
                        <div className='img-text'>{cpotitle}</div>
                    </div>
                    <div className='step-2-container-text-box'>
                        <div className='step-2-container-text'>
                            {step2Text}
                        </div>
                    </div>
                </div>
            ),
            textAlign: "center",
            placement: "right",
            disableBeacon: true,
            disableOverlayClose: true,
            styles: {
                options: {
                    zIndex: 10000
                }
            }
        },
        {
            target: "#zoomed-card", //get first mail
            content: (
                <div className='step-3-container' dangerouslySetInnerHTML={{ __html: step3Text }} >
                </div >
            ),
            textAlign: "center",
            placement: "right",
            disableBeacon: true,
            disableOverlayClose: true,
            styles: {
                options: {
                    zIndex: 10000
                }
            }
        }
    ]
}

const getSprintExecutionSteps = (step1Text, step2Text, cponame, cpotitle, tutorialImage) => {
    return [
        {
            target: "#actions-list-container", //get first mail
            content: (
                <div className='step-1-container'>
                    <div className='step-2-container-img-box'>
                        <img src={tutorialImage}
                            style={{ width: '100%', height: '36px' }}
                        />
                        <div className='img-text'>{cponame}</div>
                        <div className='img-text'>{cpotitle}</div>
                    </div>
                    <div className='step-2-container-text-box'>
                        <div className='step-2-container-text' dangerouslySetInnerHTML={{ __html: step1Text }}></div>
                    </div>
                </div>
            ),
            textAlign: "center",
            placement: "left",
            disableBeacon: true,
            disableScrolling: true,
            disableOverlayClose: true,
            styles: {
                options: {
                    zIndex: 10000
                }
            }
        },
        {
            target: "#label_action_4_title", //get first mail
            content: (
                <div className='step-1-container'>
                    <div className='step-2-container-img-box'>
                        <img src={tutorialImage}
                            style={{ width: '100%', height: '36px' }}
                        />
                        <div className='img-text'>{cponame}</div>
                        <div className='img-text'>{cpotitle}</div>
                    </div>
                    <div className='step-2-container-text-box'>
                        <div className='step-2-container-text'>
                            {step2Text}
                        </div>
                    </div>
                </div>
            ),
            textAlign: "center",
            disableBeacon: true,
            disableOverlayClose: true,
            disableScrolling: true,
            hideFooter: true,
            spotlightClicks: true,
            placement: "left",
            styles: {
                options: {
                    zIndex: 10000
                }
            }
        }
    ]
}

const getBlockerSteps = (step1Text) => {
    return [
        {
            target: "#task-card-blocker", //get first mail
            content: (
                <div className='step-4-container'>
                    <div className='step-2-container-text-box'>
                        <div className='step-2-container-text' dangerouslySetInnerHTML={{ __html: step1Text }}></div>
                    </div>
                </div>
            ),
            textAlign: "center",
            placement: "right",
            disableBeacon: true,
            disableOverlayClose: true,
            hideFooter: true,
            spotlightClicks: true,
            styles: {
                options: {
                    zIndex: 10000
                }
            }
        }
    ]
}

const getSprintPlanningFinalSprintSteps = (simProgressStepDesc, stepSprintDesc, cponame, cpotitle, tutorialImage) => {
    return [
        {
            target:  "#sim-progress",
            content: (
                <div className='step-1-container'>
                    <div className='step-2-container-img-box'>
                        <img src={tutorialImage}
                            style={{ width: '100%', height: '36px' }}
                        />
                        <div className='img-text'>{cponame}</div>
                        <div className='img-text'>{cpotitle}</div>
                    </div>
                    <div className='step-2-container-text-box'>
                        <div className='step-2-container-text'>
                            {simProgressStepDesc}
                        </div>
                    </div>
                </div>
            ),
            textAlign: "center",
            placement: "bottom",
            disableBeacon: true,
            disableOverlayClose: true,
            styles: {
                options: {
                    zIndex: 10000
                }
            }
        },
        {
            target: "." + sprintCompStyle["sprint-container"],
            content: (
                <div className='step-1-container'>
                    <div className='step-2-container-img-box'>
                        <img src={tutorialImage}
                            style={{ width: '100%', height: '36px' }}
                        />
                        <div className='img-text'>{cponame}</div>
                        <div className='img-text'>{cpotitle}</div>
                    </div>
                    <div className='step-2-container-text-box'>
                        <div className='step-2-container-text'>
                            {stepSprintDesc}
                        </div>
                    </div>
                </div>
            ),
            textAlign: "center",
            placement: "bottom",
            disableBeacon: true,
            disableOverlayClose: true,
            styles: {
                options: {
                    zIndex: 10000
                }
            }
        }
    ]
}

const getSprintReportSteps = (simVelocity,sprintAcuracyStepDesc, simEfficiency, simMVPPopupDesc, cponame, cpotitle, tutorialImage) => {
    return [
        {
            target:  "#metric-velocity",
            content: (
                <div className='step-1-container'>
                    <div className='step-2-container-img-box'>
                        <img src={tutorialImage}
                            style={{ width: '100%', height: '36px' }}
                        />
                        <div className='img-text'>{cponame}</div>
                        <div className='img-text'>{cpotitle}</div>
                    </div>
                    <div className='step-2-container-text-box'>
                        <div className='step-2-container-text'>
                            {simVelocity}
                        </div>
                    </div>
                </div>
            ),
            textAlign: "center",
            placement: "right",
            disableBeacon: true,
            disableOverlayClose: true,
            styles: {
                options: {
                    zIndex: 10000
                }
            }
        },
        {
            target:  "#metric-accuracy",
            content: (
                <div className='step-1-container'>
                    <div className='step-2-container-img-box'>
                        <img src={tutorialImage}
                            style={{ width: '100%', height: '36px' }}
                        />
                        <div className='img-text'>{cponame}</div>
                        <div className='img-text'>{cpotitle}</div>
                    </div>
                    <div className='step-2-container-text-box'>
                        <div className='step-2-container-text'>
                            {sprintAcuracyStepDesc}
                        </div>
                    </div>
                </div>
            ),
            textAlign: "center",
            placement: "right",
            disableBeacon: true,
            disableOverlayClose: true,
            styles: {
                options: {
                    zIndex: 10000
                }
            }
        },
        {
            target:  "#metric-efficiency",
            content: (
                <div className='step-1-container'>
                    <div className='step-2-container-img-box'>
                        <img src={tutorialImage}
                            style={{ width: '100%', height: '36px' }}
                        />
                        <div className='img-text'>{cponame}</div>
                        <div className='img-text'>{cpotitle}</div>
                    </div>
                    <div className='step-2-container-text-box'>
                        <div className='step-2-container-text'>
                            {simEfficiency}
                        </div>
                    </div>
                </div>
            ),
            textAlign: "center",
            placement: "right",
            disableBeacon: true,
            disableOverlayClose: true,
            styles: {
                options: {
                    zIndex: 10000
                }
            }
        },
        {
            target: "#sim-mvp",
            content: (
                <div className='step-1-container'>
                    <div className='step-2-container-img-box'>
                        <img src={tutorialImage}
                            style={{ width: '100%', height: '36px' }}
                        />
                        <div className='img-text'>{cponame}</div>
                        <div className='img-text'>{cpotitle}</div>
                    </div>
                    <div className='step-2-container-text-box'>
                        <div className='step-2-container-text'>
                            {simMVPPopupDesc}
                        </div>
                    </div>
                </div>
            ),
            textAlign: "center",
            placement: "bottom",
            disableBeacon: true,
            disableOverlayClose: true,
            hideFooter: true,
            spotlightClicks: true,
            styles: {
                options: {
                    zIndex: 10000
                }
            }
        }
    ]
}

export default { getSimPlanningSteps, getSprintPlanningSteps, getSprintExecutionSteps, getBlockerSteps, getSprintPlanningFinalSprintSteps, getSprintReportSteps }