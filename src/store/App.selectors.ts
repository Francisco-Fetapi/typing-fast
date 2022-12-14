import { RootState } from "./App.store";

export const selectTheme = (state: RootState) => state.app.darkMode;

export const selectTimer = (state: RootState) => state.app.timer;
export const selectLettersObtained = (state: RootState) =>
  state.app.lettersObtained;
export const selectLettersFall = (state: RootState) => state.app.lettersFall;
export const selectLimitLettersFall = (state: RootState) =>
  state.app.limitLettersFall;

export const selectProgressValue = (state: RootState) => {
  return (selectLettersFall(state) / selectLimitLettersFall(state)) * 100;
};

export const selectBubbles = (state: RootState) => {
  return state.app.bubbles;
};
export const selectScore = (state: RootState) => {
  return state.app.score;
};

export const selectTimerPaused = (state: RootState) => {
  return state.app.timerPaused;
};

export const selectBackdropInfo = (state: RootState) => {
  return state.app.backdrop;
};
