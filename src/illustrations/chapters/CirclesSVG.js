import React from "react";
import { Circle, Line } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function CirclesSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      <Circle
        cx="50"
        cy="50"
        r="28"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <Circle cx="50" cy="50" r="2.5" fill={color} />

      <Line x1="50" y1="50" x2="78" y2="50" stroke={color} strokeWidth="2" />
    </BaseSVG>
  );
}
