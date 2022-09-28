import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBubbles, selectTimer } from "../store/App.selectors";
import { addBubble, setBubbles } from "../store/App.store";

const UPDATE_ALL_IN_EACH = 300; //100 milliseconds

export default function useGameLoop() {
  const [mseconds, setMseconds] = useState(0);
  const bubbles = useSelector(selectBubbles);
  const dispatch = useDispatch();
  const seconds = useSelector(selectTimer);

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
    dispatch(addBubble());
  }, [seconds % 5 === 0]);
  return {};
}
