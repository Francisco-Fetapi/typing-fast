import { useSelector } from "react-redux";
import { Bubble } from "../entities/Bubble";
import { selectBubble } from "../store/App.selectors";
import { AirBubbleContainer } from "../styles/General";

interface Props {
  bubble: Bubble;
}

export default function AirBubble({ bubble }: Props) {
  return <AirBubbleContainer>{bubble.letter}</AirBubbleContainer>;
}
