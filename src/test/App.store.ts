import { configureStore } from "@reduxjs/toolkit";
import { App, middlewares, sliceCreator } from "../store/App.store";

const initialState: App = {
  darkMode: false,
  timerPaused: true,
  timer: 0,
  lettersObtained: 0,
  lettersFall: 12,
  limitLettersFall: 20,
  bubbles: [],
  score: 0,
  backdrop: {
    title: "",
    message: "",
    open: false,
  },
};

const app = sliceCreator(initialState);

export const store = configureStore({
  reducer: {
    app: app.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewares),
});

export default store;
