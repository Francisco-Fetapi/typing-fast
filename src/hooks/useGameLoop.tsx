import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBubbles, selectTimer } from "../store/App.selectors";
import { setBubbles } from "../store/App.store";

export default function useGameLoop() {
  const seconds = useSelector(selectTimer);
  const bubbles = useSelector(selectBubbles);
  const dispatch = useDispatch();

  useEffect(() => {
    const newBubbles = bubbles.map((bubble) => bubble.update());
    dispatch(setBubbles(newBubbles));
  }, [seconds]);
  return {};
}
