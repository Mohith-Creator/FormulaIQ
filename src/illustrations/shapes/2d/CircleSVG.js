import React from "react";
import { Circle, Line, Text as SvgText } from "react-native-svg";

import BaseSVG from "../BaseSVG";

export default function CircleSVG({
  size = 90,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Circle */}
      <Circle
        cx="50"
        cy="45"
        r="22"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Center */}
      <Circle cx="50" cy="45" r="2.5" fill={color} />

      {/* Radius */}
      <Line x1="50" y1="45" x2="72" y2="45" stroke={color} strokeWidth="1.5" />

      {/* Radius Label */}
      <SvgText
        x="62"
        y="40"
        fill={color}
        fontSize="11"
        fontStyle="italic"
        textAnchor="middle"
      >
        r
      </SvgText>
    </BaseSVG>
  );
}
