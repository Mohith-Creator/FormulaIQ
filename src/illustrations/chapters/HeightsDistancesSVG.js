import React from "react";
import { Line, Circle, Path } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function HeightsDistancesSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Ground */}
      <Line
        x1="15"
        y1="75"
        x2="85"
        y2="75"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Building */}
      <Line
        x1="70"
        y1="75"
        x2="70"
        y2="25"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Line of Sight */}
      <Line
        x1="25"
        y1="75"
        x2="70"
        y2="25"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Observer */}
      <Circle cx="25" cy="75" r="2.5" fill={color} />

      {/* Angle Arc */}
      <Path
        d="M35 75 A10 10 0 0 0 32 68"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
      />
    </BaseSVG>
  );
}
