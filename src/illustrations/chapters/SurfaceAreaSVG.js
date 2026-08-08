import React from "react";
import { Path, Line } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function SurfaceAreaSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Cube */}
      <Path
        d="M28 36 L58 36 L58 66 L28 66 Z"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <Path
        d="M28 36 L40 26 L70 26 L58 36 Z"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <Path
        d="M58 36 L70 26 L70 56 L58 66 Z"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Face Hatching */}

      <Line x1="31" y1="40" x2="40" y2="49" stroke={color} strokeWidth="1.4" />
      <Line x1="39" y1="40" x2="48" y2="49" stroke={color} strokeWidth="1.4" />
      <Line x1="47" y1="40" x2="56" y2="49" stroke={color} strokeWidth="1.4" />

      <Line x1="42" y1="29" x2="50" y2="35" stroke={color} strokeWidth="1.4" />
      <Line x1="50" y1="29" x2="58" y2="35" stroke={color} strokeWidth="1.4" />
      <Line x1="58" y1="29" x2="66" y2="35" stroke={color} strokeWidth="1.4" />
    </BaseSVG>
  );
}
