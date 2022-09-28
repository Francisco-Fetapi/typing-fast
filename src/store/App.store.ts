import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { BackdropProps } from "../components/GameBackdrop";
import { Bubble } from "../entities/Bubble";
import { ILetter } from "../entities/ILetter";
import useStatePersist from "../hooks/useStatePersist";

export const THEME_KEY_IN_LOCALSTORAGE = "darkMode";
export const SCORE_KEY_IN_LOCAL_STORAGE = "score";

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
  score: number;
  backdrop: BackdropProps;
}

export const initialState: App = {
  darkMode: useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE).get(),
  timerPaused: true,
  timer: 0,
  lettersObtained: 0,
  lettersFall: 15,
  limitLettersFall: 200,
  bubbles: [],
  score: useStatePersist<number>(SCORE_KEY_IN_LOCAL_STORAGE).get() | 0,
  backdrop: {
    title: "",
    message: "",
    open: false,
  },
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
        Bubble.availableLetters = state.bubbles.map((bubble) => bubble.letter);
        const newBubble = new Bubble();
        state.bubbles.unshift(newBubble);
      },
      pressKey(state, action: PayloadAction<ILetter>) {
        const catched = state.bubbles
          .find((bubble) => bubble.letter === action.payload)
          ?.catchIt();
        if (catched) {
          state.lettersObtained++;
        }
      },
      updateScore(state, action: PayloadAction<number>) {
        state.score = Math.max(state.score, action.payload);
      },
      increaseLettersFail(state) {
        state.lettersFall++;
      },
      increaseLettersObtained(state) {
        state.lettersObtained++;
      },
      showMessageBackdrop(state, action: PayloadAction<BackdropProps>) {
        state.backdrop.open = true;
        Object.assign(state.backdrop, action.payload);
      },
      hideMessageBackdrop(state) {
        state.backdrop.open = false;
      },
    },
  });
}

export const app = sliceCreator(initialState);

export const middlewares = {
  serializableCheck: {
    // Ignore these paths in the state
    ignoredPaths: ["app.bubbles", "payload.0", "app.backdrop"],
    ignoredActions: [
      "app/setBubbles",
      "app/addBubble",
      "app/showMessageBackdrop",
    ],
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
  updateScore,
  increaseLettersFail,
  increaseLettersObtained,
  showMessageBackdrop,
  hideMessageBackdrop,
  pressKey,
} = app.actions;

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
