import { useTheme, colors } from "@mui/material";

import { useMemo } from "react";

type IColorKey = keyof typeof colors.blue;
interface Color {
  textColor: string;
  bgColor: string;
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
          bgColor: val,
          textColor: theme.palette.getContrastText(val),
        });
      });
    }
    return infoColors;
  }, []);

  return allColors;
}
