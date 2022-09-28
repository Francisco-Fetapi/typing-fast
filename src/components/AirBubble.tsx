import { useSelector } from "react-redux";
import { Bubble } from "../entities/Bubble";
import { selectBubbles } from "../store/App.selectors";
import { AirBubbleContainer } from "../styles/General";

interface Props {
  bubble: Bubble;
}

export default function AirBubble({ bubble }: Props) {
  return (
    <AirBubbleContainer
      sx={{
        top: `${bubble.top}%`,
        left: `${bubble.left}%`,
        transition: `all ${bubble.secondsToFall}s ease`,
        backgroundColor: bubble.bgcolor,
        color: bubble.color,
      }}
    >
      {bubble.letter.toUpperCase()}
    </AirBubbleContainer>
  );
}
