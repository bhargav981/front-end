import actionConsts from 'constants/actions/actions';

const setIntroData = (payload) => {
  return {type: actionConsts.SET_INTRO_DATA, payload};
};

const setIntroPage = (payload) => {
  return {type: actionConsts.SET_INTRO_PAGE, payload};
}

const toggleTranscript = (flag) => {
  return {type: actionConsts.TOGGLE_TRANSCRIPT, flag};
}

const enableContinueButton = (flag) => {
  return {type: actionConsts.ENABLE_CONTINUE, flag};
}

export {setIntroData, setIntroPage, toggleTranscript,enableContinueButton};
