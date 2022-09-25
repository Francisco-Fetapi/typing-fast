import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBubbles } from "../store/App.selectors";
import { setBubbles } from "../store/App.store";

const UPDATE_ALL_IN_EACH = 100; //100 milliseconds

export default function useGameLoop() {
  const [mseconds, setMseconds] = useState(0);
  const bubbles = useSelector(selectBubbles);
  const dispatch = useDispatch();

  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    timer.current = setTimeout(() => {
      setMseconds(mseconds + 1);
    }, UPDATE_ALL_IN_EACH);
  }, [mseconds]);

  useEffect(() => {
    const newBubbles = bubbles.map((bubble) => bubble.update());
    dispatch(setBubbles(newBubbles));
  }, [mseconds]);
  return {};
}
