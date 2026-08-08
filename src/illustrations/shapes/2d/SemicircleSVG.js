import React from "react";
import { Path, Line, Circle, Text as SvgText } from "react-native-svg";

import BaseSVG from "../BaseSVG";

export default function SemicircleSVG({
  size = 90,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Semicircle */}
      <Path
        d="
          M25 60
          A25 25 0 0 1 75 60
        "
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Diameter */}
      <Line
        x1="25"
        y1="60"
        x2="75"
        y2="60"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Center */}
      <Circle cx="50" cy="60" r="2.4" fill={color} />

      {/* Radius */}
      <Line x1="50" y1="60" x2="75" y2="60" stroke={color} strokeWidth="1.5" />

      {/* Radius Label */}
      <SvgText x="63" y="55" fill={color} fontSize="11" fontStyle="italic">
        r
      </SvgText>

      {/* Diameter Label */}
      <SvgText
        x="50"
        y="78"
        fill={color}
        fontSize="11"
        textAnchor="middle"
        fontStyle="italic"
      >
        d
      </SvgText>
    </BaseSVG>
  );
}
