import { useEffect, useRef } from "react";
import Backdrop from "@mui/material/Backdrop";
import useBoolean from "../hooks/useBoolean";
import { Text } from "../styles/General";

interface Props {
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
}

export default function TimerBeforeStart({ seconds, setSeconds }: Props) {
  const backdrop = useBoolean(true);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (seconds !== 0) {
      timer.current = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1 * 1000);
    } else {
      clearTimeout(timer.current);
      backdrop.handleClose();
    }
  }, [seconds]);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop.open}
      >
        <Text variant="h1">{seconds}</Text>
      </Backdrop>
    </div>
  );
}
