import { useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectBubbles } from "../store/App.selectors";
import AirBubble from "./AirBubble";
import { playTimer } from "../store/App.store";
import useGameLoop from "../hooks/useGameLoop";

export default function BubbleField() {
  const bubbles = useSelector(selectBubbles);
  const dispatch = useDispatch();
  useGameLoop();

  useEffect(() => {
    dispatch(playTimer());
  }, []);

  return (
    <Box position="absolute" height="100vh" width="100vw" top={0}>
      {bubbles.map((bubble) => (
        <AirBubble bubble={bubble} />
      ))}
    </Box>
  );
}
