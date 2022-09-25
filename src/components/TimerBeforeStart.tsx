import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import useBoolean from "../hooks/useBoolean";

export default function TimerBeforeStart() {
  const backdrop = useBoolean();

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop.open}
        onClick={backdrop.handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
