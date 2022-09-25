import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTimer, selectTimerPaused } from "../store/App.selectors";
import { setTimer } from "../store/App.store";

export default function useTimer() {
  const seconds = useSelector(selectTimer);
  const timerPaused = useSelector(selectTimerPaused);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!timerPaused) {
      timer.current = setTimeout(() => {
        dispatch(setTimer(seconds + 1));
      }, 1 * 1000);
    }
  }, [seconds, timerPaused]);

  return { seconds };
}
