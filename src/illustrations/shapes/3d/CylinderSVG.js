import React from "react";
import { Ellipse, Line, Circle, Text as SvgText } from "react-native-svg";

import BaseSVG from "../BaseSVG";

export default function CylinderSVG({
  size = 90,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Top Ellipse */}
      <Ellipse
        cx="50"
        cy="28"
        rx="25"
        ry="8"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Left Side */}
      <Line
        x1="25"
        y1="28"
        x2="25"
        y2="68"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Right Side */}
      <Line
        x1="75"
        y1="28"
        x2="75"
        y2="68"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Bottom Ellipse */}
      <Ellipse
        cx="50"
        cy="68"
        rx="25"
        ry="8"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Center */}
      <Circle cx="50" cy="28" r="2.2" fill={color} />

      {/* Radius */}
      <Line x1="50" y1="28" x2="74" y2="28" stroke={color} strokeWidth="1.6" />

      {/* Radius Label */}
      <SvgText x="78" y="24" fill={color} fontSize="11" fontStyle="italic">
        r
      </SvgText>

      {/* Height Dimension */}
      <Line x1="16" y1="28" x2="16" y2="68" stroke={color} strokeWidth="1.5" />

      <Line x1="13" y1="28" x2="19" y2="28" stroke={color} strokeWidth="1.5" />

      <Line x1="13" y1="68" x2="19" y2="68" stroke={color} strokeWidth="1.5" />

      <SvgText
        x="10"
        y="51"
        fill={color}
        fontSize="11"
        fontStyle="italic"
        textAnchor="middle"
      >
        h
      </SvgText>
    </BaseSVG>
  );
}
