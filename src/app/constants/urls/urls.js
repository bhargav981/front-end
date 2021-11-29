import environment from 'util/environment';

const host = environment.REACT_APP_BACKEND_URL;

const urls = {
    GAME_API: `${host}/game`,
    USER_API: `${host}/user`,
    LOG_OUT: `${host}/logout`,
    POST_GAME_STARTED: `${host}/game-started`,
    POST_PLANNING_COMPLETED: `${host}/planning-completed`,
    POST_PRD_SELECTED: `${host}/prd-selected`,
    KNOLSKAPE_URL: 'https://www.knolskape.com',

    // user state api
    GAME_STARTED_API: `${host}/game-started`,
    GAME_COMPLETED_API: `${host}/game-completed`,
    SAVE_USER_TIMER: `${host}/save-user-timer`,
    CURRENT_PHASE_API: `${host}/update-phase`,
    CHOOSE_PRD_API: `${host}/choose-prd`,

    //sprint api
    ADD_TASK_TO_SPRINT: `${host}/add-stories-to-sprint`,
    SET_PRIORITY_FOR_TASKS: `${host}/set-priority-for-stories`,
    START_SPRINT: `${host}/start-sprint`,
    END_SPRINT: `${host}/end-sprint`,
    REPLAN_SPRINT: `${host}/replan-sprint`,

    //action urls
    POST_ACTION_URL: `${host}/ACTION_OPTIONS_ROUTE_PLACEHOLDER`,

    //leaderboard
    FETCH_LEADERBOARD: `${host}/leaderboard`,

    GET_PDF: `${host}/user-report-pdf`,
    MAIL_REPORT: `${host}/mail-report-pdf`,
};

export default urls;