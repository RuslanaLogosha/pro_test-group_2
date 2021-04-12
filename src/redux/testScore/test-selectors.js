export const getTestPageIndex = state => state.testScore.testPageIndex;

export const getQuestionListForTest = state =>
  state.testScore.questionsListForTest;

export const getUserAnswersOnTest = state => state.testScore.userAnswersOnTest;

export const getTestInfo = state => state.testScore.currentTestInfo;
