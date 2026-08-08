import React from "react";
import { Ellipse, Line, Path, Circle, Text as SvgText } from "react-native-svg";

import BaseSVG from "../BaseSVG";

export default function HemisphereSVG({
  size = 90,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Hemisphere */}
      <Path
        d="
          M25 35
          L75 35
          A25 25 0 0 1 25 35
          Z
        "
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {/* Top Ellipse */}
      <Ellipse
        cx="50"
        cy="35"
        rx="25"
        ry="8"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Center */}
      <Circle cx="50" cy="35" r="2.2" fill={color} />

      {/* Radius */}
      <Line x1="50" y1="35" x2="75" y2="35" stroke={color} strokeWidth="1.6" />

      {/* Radius Label */}
      <SvgText x="79" y="31" fill={color} fontSize="11" fontStyle="italic">
        r
      </SvgText>
    </BaseSVG>
  );
}
