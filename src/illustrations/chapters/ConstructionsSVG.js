import React from "react";
import { Line, Circle } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function ConstructionsSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Compass */}
      <Circle cx="50" cy="24" r="4" fill={color} />

      <Line
        x1="50"
        y1="28"
        x2="34"
        y2="74"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <Line
        x1="50"
        y1="28"
        x2="66"
        y2="74"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Ruler */}
      <Line
        x1="20"
        y1="80"
        x2="80"
        y2="80"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <Line x1="30" y1="77" x2="30" y2="83" stroke={color} strokeWidth="1.5" />
      <Line x1="40" y1="77" x2="40" y2="83" stroke={color} strokeWidth="1.5" />
      <Line x1="50" y1="77" x2="50" y2="83" stroke={color} strokeWidth="1.5" />
      <Line x1="60" y1="77" x2="60" y2="83" stroke={color} strokeWidth="1.5" />
      <Line x1="70" y1="77" x2="70" y2="83" stroke={color} strokeWidth="1.5" />
    </BaseSVG>
  );
}
