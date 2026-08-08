import React from "react";
import { Path, Line } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function VolumeSVG({
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

      {/* Interior Grid */}

      <Line
        x1="38"
        y1="36"
        x2="38"
        y2="66"
        stroke={color}
        strokeWidth="1.2"
        opacity="0.7"
      />
      <Line
        x1="48"
        y1="36"
        x2="48"
        y2="66"
        stroke={color}
        strokeWidth="1.2"
        opacity="0.7"
      />

      <Line
        x1="28"
        y1="46"
        x2="58"
        y2="46"
        stroke={color}
        strokeWidth="1.2"
        opacity="0.7"
      />
      <Line
        x1="28"
        y1="56"
        x2="58"
        y2="56"
        stroke={color}
        strokeWidth="1.2"
        opacity="0.7"
      />
    </BaseSVG>
  );
}
