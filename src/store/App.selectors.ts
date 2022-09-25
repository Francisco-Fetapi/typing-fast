import { App, RootState } from "./App.store";

export const selectTheme = (state: RootState) => state.app.darkMode;

type StateProps = keyof App;

export const selectTimer = (state: RootState) => state.app.timer;
