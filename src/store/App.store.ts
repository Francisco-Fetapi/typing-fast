import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { Bubble } from "../entities/Bubble";
import useStatePersist from "../hooks/useStatePersist";

export const THEME_KEY_IN_LOCALSTORAGE = "darkMode";

export interface IDarkMode {
  darkMode: boolean;
}
export interface App extends IDarkMode {
  timerPaused: boolean;
  timer: number;
  lettersObtained: number;
  lettersFall: number;
  limitLettersFall: number;
  bubbles: Bubble[];
}

export const initialState: App = {
  darkMode: useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE).get(),
  timerPaused: true,
  timer: 0,
  lettersObtained: 0,
  lettersFall: 12,
  limitLettersFall: 20,
  bubbles: [new Bubble(), new Bubble(), new Bubble(), new Bubble()],
};

function stateReseted(initialState: App): App {
  const darkMode = useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE).get();
  return { ...initialState, darkMode };
}

export function sliceCreator(initialState: App) {
  return createSlice({
    name: "app",
    initialState,
    reducers: {
      toggleTheme(state) {
        state.darkMode = !state.darkMode;
        const { save } = useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE);
        save(state.darkMode);
      },
      resetAllState(state, action: PayloadAction<boolean | undefined>) {
        if (action.payload) {
          return Object.assign(state, initialState);
        }
        Object.assign(state, stateReseted(initialState));
      },
      setTimer(state, action: PayloadAction<number>) {
        state.timer = action.payload;
      },
      playTimer(state) {
        state.timerPaused = false;
      },
      pauseTimer(state) {
        state.timerPaused = true;
      },
      setBubbles(state, action: PayloadAction<Bubble[]>) {
        state.bubbles = action.payload;
      },
      addBubble(state) {
        state.bubbles.unshift(new Bubble());
      },
    },
  });
}

export const app = sliceCreator(initialState);

export const middlewares = {
  serializableCheck: {
    // Ignore these paths in the state
    ignoredPaths: ["app.bubbles"],
  },
};
export const store = configureStore({
  reducer: {
    app: app.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewares),
});

export const {
  toggleTheme,
  resetAllState,
  setTimer,
  playTimer,
  pauseTimer,
  setBubbles,
  addBubble,
} = app.actions;

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
