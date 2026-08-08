import React from "react";
import { Line, Circle } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function CoordinateGeometrySVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Axes */}
      <Line
        x1="18"
        y1="50"
        x2="82"
        y2="50"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <Line
        x1="50"
        y1="18"
        x2="50"
        y2="82"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Points */}
      <Circle cx="64" cy="34" r="3" fill={color} />
      <Circle cx="34" cy="64" r="3" fill={color} />
      <Circle cx="70" cy="66" r="3" fill={color} />
    </BaseSVG>
  );
}
