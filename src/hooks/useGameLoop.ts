import { useEffect, useRef, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bubble } from "../entities/Bubble";
import { ILetter, Letters } from "../entities/ILetter";
import selectRandomElement from "../helpers/selectRandomElement";
import {
  selectBubbles,
  selectLettersFall,
  selectLimitLettersFall,
  selectTimer,
} from "../store/App.selectors";
import {
  addBubble,
  increaseLettersFail,
  pauseTimer,
  pressKey,
  setBubbles,
  showMessageBackdrop,
} from "../store/App.store";
import useBackdrop from "./useBackdrop";

const UPDATE_ALL_IN_EACH = 300; //in milliseconds
const INTERVALS = [3, 2, 5];

export default function useGameLoop() {
  const [mseconds, setMseconds] = useState(0);
  const bubbles = useSelector(selectBubbles);
  const dispatch = useDispatch();
  const seconds = useSelector(selectTimer);
  const lettersFall = useSelector(selectLettersFall);
  const limitLettersFall = useSelector(selectLimitLettersFall);
  const { backdropGameOver } = useBackdrop();
  const gameOver = lettersFall === limitLettersFall;
  const intervalToAddNewBubble = useMemo(
    () => selectRandomElement(INTERVALS),
    [seconds]
  );

  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (!gameOver) {
      timer.current = setTimeout(() => {
        setMseconds(mseconds + 1);
      }, UPDATE_ALL_IN_EACH);
    }
  }, [mseconds, gameOver]);

  useEffect(() => {
    let updatedBubbles = bubbles.map((bubble) => bubble.update());
    updatedBubbles = updatedBubbles.filter((bubble) => {
      if (!bubble.isInside) {
        dispatch(increaseLettersFail());
        return false;
      }
      return bubble.isInside;
    });
    Bubble.increaseBubbleSpeedToFall();
    dispatch(setBubbles(updatedBubbles));
  }, [mseconds]);

  useEffect(() => {
    dispatch(addBubble());
  }, [seconds % intervalToAddNewBubble === 0]);

  useEffect(() => {
    if (gameOver) {
      dispatch(setBubbles([]));
      dispatch(pauseTimer());
      dispatch(showMessageBackdrop(backdropGameOver({})));
    }
  }, [gameOver]);

  useEffect(() => {
    window.onkeydown = (e) => {
      if (Letters.includes(e.key as ILetter)) {
        const key = e.key as ILetter;
        dispatch(pressKey(key));
      }
    };
  }, []);
  return { gameOver };
}
