import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { selectBubble } from "../store/App.selectors";
import AirBubble from "./AirBubble";

export default function BubbleField() {
  const bubbles = useSelector(selectBubble);
  return (
    <Box position="absolute" height="100vh" width="100wh" top={0}>
      {bubbles.map((bubble) => (
        <AirBubble bubble={bubble} />
      ))}
    </Box>
  );
}
