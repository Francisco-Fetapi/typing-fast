import { useEffect, useRef, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import selectRandomElement from "../helpers/selectRandomElement";
import { selectBubbles, selectTimer } from "../store/App.selectors";
import { addBubble, setBubbles } from "../store/App.store";

const UPDATE_ALL_IN_EACH = 300; //100 milliseconds
const INTERVALS_TO_FALL = [3, 5, 8, 11, 12, 15];

export default function useGameLoop() {
  const [mseconds, setMseconds] = useState(0);
  const bubbles = useSelector(selectBubbles);
  const dispatch = useDispatch();
  const seconds = useSelector(selectTimer);
  const interval = useMemo(() => {
    return selectRandomElement(INTERVALS_TO_FALL);
  }, [seconds]);

  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    timer.current = setTimeout(() => {
      setMseconds(mseconds + 1);
    }, UPDATE_ALL_IN_EACH);
  }, [mseconds]);

  useEffect(() => {
    let updatedBubbles = bubbles.map((bubble) => bubble.update());
    updatedBubbles = updatedBubbles.filter((bubble) => bubble.isInside);
    dispatch(setBubbles(updatedBubbles));
  }, [mseconds]);

  useEffect(() => {
    7;
    dispatch(addBubble());
  }, [seconds % interval === 0]);
  return {};
}
