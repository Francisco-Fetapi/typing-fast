import { useEffect, useRef, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bubble } from "../entities/Bubble";
import { ILetter, Letters } from "../entities/ILetter";
import selectRandomElement from "../helpers/selectRandomElement";
import {
  selectBubbles,
  selectLettersFall,
  selectLettersObtained,
  selectLimitLettersFall,
  selectScore,
  selectTimer,
} from "../store/App.selectors";
import {
  addBubble,
  increaseLettersFail,
  pauseTimer,
  pressKey,
  setBubbles,
  showMessageBackdrop,
  updateScore,
} from "../store/App.store";
import useBackdrop from "./useBackdrop";

const UPDATE_ALL_IN_EACH = 100; //in milliseconds
const INTERVALS = [3, 2, 5, 1, 4];

export default function useGameLoop() {
  const [mseconds, setMseconds] = useState(0);
  const bubbles = useSelector(selectBubbles);
  const dispatch = useDispatch();
  const seconds = useSelector(selectTimer);
  const lettersFall = useSelector(selectLettersFall);
  const limitLettersFall = useSelector(selectLimitLettersFall);
  const score = useSelector(selectScore);
  const lettersObtained = useSelector(selectLettersObtained);
  const { backdropGameOver } = useBackdrop();
  const gameOver = lettersFall >= limitLettersFall;
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
      if (bubble.isCatched) {
        if (mseconds % 10 === 0) {
          return false;
        }
      }

      return bubble.isInside;
    });

    dispatch(setBubbles(updatedBubbles));
  }, [mseconds]);

  useEffect(() => {
    dispatch(addBubble());
  }, [seconds % intervalToAddNewBubble === 0]);

  useEffect(() => {
    Bubble.increaseBubbleSpeedToFall();
  }, [seconds % 3 === 0]);

  useEffect(() => {
    if (gameOver) {
      dispatch(setBubbles([]));
      dispatch(pauseTimer());
      const newScore = lettersObtained > score;
      console.log("last", score, "new", lettersObtained);
      dispatch(updateScore(lettersObtained));

      dispatch(
        showMessageBackdrop(
          backdropGameOver({
            secondaryTitle: newScore
              ? `Novo recorde: ${lettersObtained}`
              : undefined,
          })
        )
      );
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
