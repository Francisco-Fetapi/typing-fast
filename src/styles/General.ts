import { Typography, Paper, Box } from "@mui/material";
import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const Text = styled(Typography)`` as typeof Typography;

export const ProgressContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 15px;
`;

export const AirBubbleContainer = styled(Box)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
` as typeof Box;
