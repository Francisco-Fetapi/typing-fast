import ProgressBar from "../components/ProgressBar";
import TimerBeforeStart from "../components/TimerBeforeStart";
import { AppContainer } from "../styles/General";

export default function Home() {
  return (
    <AppContainer>
      <TimerBeforeStart />
      <ProgressBar />
    </AppContainer>
  );
}
