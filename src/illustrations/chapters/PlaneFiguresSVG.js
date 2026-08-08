import React from "react";
import { Circle, Polygon, Rect } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function PlaneFiguresSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Triangle */}
      <Polygon
        points="50,14 38,34 62,34"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {/* Square */}
      <Rect
        x="18"
        y="50"
        width="24"
        height="24"
        rx="2"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Circle */}
      <Circle
        cx="70"
        cy="62"
        r="12"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </BaseSVG>
  );
}
