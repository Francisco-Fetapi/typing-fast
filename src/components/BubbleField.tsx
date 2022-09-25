import { useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectBubble } from "../store/App.selectors";
import AirBubble from "./AirBubble";
import { playTimer } from "../store/App.store";

export default function BubbleField() {
  const bubbles = useSelector(selectBubble);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playTimer());
  }, []);

  return (
    <Box position="absolute" height="100vh" width="100wh" top={0}>
      {bubbles.map((bubble) => (
        <AirBubble bubble={bubble} />
      ))}
    </Box>
  );
}
