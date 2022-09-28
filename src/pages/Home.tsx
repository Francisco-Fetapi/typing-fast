import { useState } from "react";
import { useSelector } from "react-redux";
import BubbleField from "../components/BubbleField";
import GameBackdrop from "../components/GameBackdrop";
import ProgressBar from "../components/ProgressBar";
import TimerBeforeStart from "../components/TimerBeforeStart";
import { Bubble } from "../entities/Bubble";
import useMuiColors from "../hooks/useMuiColors";
import { selectBackdropInfo } from "../store/App.selectors";
import { AppContainer } from "../styles/General";

const SECONDS_BEFORE_START = 1;

export default function Home() {
  const [seconds, setSeconds] = useState(SECONDS_BEFORE_START);
  const gameStarted = seconds === 0;
  const colors = useMuiColors();
  const backdrop = useSelector(selectBackdropInfo);

  if (Bubble.colors.length === 0) {
    Bubble.colors = colors;
  }
  return (
    <AppContainer>
      <TimerBeforeStart seconds={seconds} setSeconds={setSeconds} />
      {gameStarted && (
        <>
          <ProgressBar />
          <BubbleField />
          <GameBackdrop {...backdrop} />
        </>
      )}
    </AppContainer>
  );
}
