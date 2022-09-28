import { Box, Button, useTheme } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  hideMessageBackdrop,
  playTimer,
  resetAllState,
} from "../store/App.store";
import { BoxColumnCenter, Text } from "../styles/General";

export interface IButton {
  text: string;
  handleClick?: () => void;
}

type IColors =
  | "success"
  | "error"
  | "inherit"
  | "primary"
  | "secondary"
  | "info"
  | "warning";

interface IVariants {
  success: IColors | string;
  error: IColors | string;
}
export interface BackdropProps {
  title: string;
  secondaryTitle?: string;
  message: string;
  open: boolean;
  type?: keyof IVariants;
  primaryButton?: IButton;
  onMount?: () => void;
}

export default function GameBackdrop({
  open,
  title,
  message,
  type = "success",
  primaryButton,
  secondaryTitle,
  onMount,
}: BackdropProps) {
  const dispatch = useDispatch();
  const theme = useTheme();

  const variants: IVariants = {
    success: theme.palette.success.main,
    error: theme.palette.error.main,
  };

  const variant = variants[type];

  function repeat() {
    dispatch(resetAllState());
    dispatch(playTimer());
  }

  useEffect(() => {
    if (open) {
      onMount && onMount();
    } else {
      window.onkeyup = null;
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      window.onkeyup = (e) => {
        if (e.key === "Enter") {
          console.log(e.key);
          if (typeof primaryButton?.handleClick === "function") {
            primaryButton.handleClick();
          } else {
            close();
          }
        }
      };
    } else {
      window.onkeyup = null;
    }
  }, [open]);

  return (
    <div>
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "rgba(0,0,0,.9)",
        }}
        open={open}
      >
        <Box>
          <BoxColumnCenter>
            <Text
              variant="h5"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                color: variant,
              }}
            >
              {title}
            </Text>
            {secondaryTitle && (
              <Box position="absolute" bottom={20}>
                <Text
                  align="center"
                  sx={(theme) => ({
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    color: theme.palette.success.main,
                  })}
                  variant="subtitle2"
                >
                  {secondaryTitle}
                </Text>
              </Box>
            )}
            <Box mt={1.5} width={0.85}>
              <Text align="center" variant="subtitle2" color="white">
                {message}
              </Text>
            </Box>
          </BoxColumnCenter>

          <BoxColumnCenter mt={3}>
            {primaryButton && (
              <Button
                variant="contained"
                onClick={primaryButton.handleClick || repeat}
              >
                {primaryButton.text}
              </Button>
            )}
          </BoxColumnCenter>
        </Box>
      </Backdrop>
    </div>
  );
}
