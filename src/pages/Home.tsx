import { useState } from "react";
import BubbleField from "../components/BubbleField";
import ProgressBar from "../components/ProgressBar";
import TimerBeforeStart from "../components/TimerBeforeStart";
import { Bubble } from "../entities/Bubble";
import useMuiColors from "../hooks/useMuiColors";
import { AppContainer } from "../styles/General";

const SECONDS_BEFORE_START = 1;

export default function Home() {
  const [seconds, setSeconds] = useState(SECONDS_BEFORE_START);
  const gameStarted = seconds === 0;
  const colors = useMuiColors();

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
        </>
      )}
    </AppContainer>
  );
}
