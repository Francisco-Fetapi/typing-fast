import { useTheme, colors } from "@mui/material";

import { useMemo } from "react";

type IColorKey = keyof typeof colors.blue;
export interface Color {
  color: string;
  backgroundColor: string;
}

export default function useMuiColors() {
  const theme = useTheme();
  let color: keyof typeof colors;

  let allColors = useMemo<Color[]>(() => {
    const infoColors: Color[] = [];
    for (color in colors) {
      let colorName = colors[color];
      Object.values(colorName).forEach((val) => {
        infoColors.push({
          backgroundColor: val,
          color: theme.palette.getContrastText(val),
        });
      });
    }
    return infoColors;
  }, []);

  return allColors;
}
