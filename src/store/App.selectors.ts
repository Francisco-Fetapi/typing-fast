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
