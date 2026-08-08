import React from "react";
import { Circle, Ellipse, Line, Text as SvgText } from "react-native-svg";

import BaseSVG from "../BaseSVG";

export default function SphereSVG({
  size = 90,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Sphere */}
      <Circle
        cx="50"
        cy="45"
        r="28"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Equator */}
      <Ellipse
        cx="50"
        cy="45"
        rx="28"
        ry="9"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
      />

      {/* Hidden Meridian */}
      <Ellipse
        cx="50"
        cy="45"
        rx="9"
        ry="28"
        fill="none"
        stroke={color}
        strokeWidth="1.3"
        strokeDasharray="4 3"
        opacity="0.55"
      />

      {/* Center */}
      <Circle cx="50" cy="45" r="2.3" fill={color} />

      {/* Radius */}
      <Line x1="50" y1="45" x2="78" y2="45" stroke={color} strokeWidth="1.8" />

      {/* Radius Label */}
      <SvgText x="82" y="48" fill={color} fontSize="11" fontStyle="italic">
        r
      </SvgText>
    </BaseSVG>
  );
}
