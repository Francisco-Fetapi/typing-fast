import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import TimerBeforeStart from "../components/TimerBeforeStart";
import { AppContainer } from "../styles/General";

const SECONDS_BEFORE_START = 3;

export default function Home() {
  const [seconds, setSeconds] = useState(SECONDS_BEFORE_START);
  return (
    <AppContainer>
      <TimerBeforeStart seconds={seconds} setSeconds={setSeconds} />
      <ProgressBar />
    </AppContainer>
  );
}
