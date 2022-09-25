import { useEffect, useState, useRef } from "react";
import Backdrop from "@mui/material/Backdrop";
import useBoolean from "../hooks/useBoolean";
import { Text } from "../styles/General";

const SECONDS_BEFORE_START = 3;

export default function TimerBeforeStart() {
  const backdrop = useBoolean();
  const [seconds, setSeconds] = useState(SECONDS_BEFORE_START);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    backdrop.handleOpen();
  }, []);
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
