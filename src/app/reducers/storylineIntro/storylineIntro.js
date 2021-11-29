import actionConsts from 'constants/actions/actions';

const initialState = {
  introPage: null
  // aboutYourCompanyDesc: "label_about_company_desc", aboutYourCompanyTitle:
  // "label_about_company_title", aboutYourTeamDesc: "label_about_team_desc",
  // aboutYourTeamTitle: "label_about_team_title", caseStudyDesc:
  // "label_case_description", caseStudyTitle: "label_case_title", companyName:
  // "label_company_name", competitorName: "label_competitor_name",
  // objectivesDesc: "label_objectives_desc", objectivesTitle:
  // "label_objectives_title", playingConditionsDesc:
  // "label_playing_conditions_desc", playingConditionsTitle:
  // "label_playing_conditions_title", trackerName: "label_tracker_name",
  // welcomeTextDesc: "label_welcome_desc", welcomeTextTitle:
  // "label_welcome_title"
};

const storylineIntro = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionConsts.INIT_GAME_DATA:
      return Object.assign({}, state, action.payload.storylineIntro, {
        introPage: 1
      }, {
        isTranscriptOpen: true
      }, {isContinueEnabled: action.payload.userState.isGameStarted});
    case actionConsts.SET_INTRO_PAGE:
      return Object.assign({}, state, {introPage: action.payload})

    case actionConsts.TOGGLE_TRANSCRIPT:
      return Object.assign({}, state, {isTranscriptOpen: action.flag})

    case actionConsts.ENABLE_CONTINUE:
      return Object.assign({}, state, {isContinueEnabled: action.flag})

    default:
      return state;
  }
};

export default storylineIntro;