export const getTestPageIndex = state => {
  return state.testScore.testPageIndex;
};

export const getQuestionListForTest = state => {
  return state.testScore.questionsListForTest;
};

export const getUserAnswersOnTest = state => {
  return state.testScore.userAnswersOnTest;
};

export const getTestInfo = state => {
  return state.testScore.currentTestInfo;
};
