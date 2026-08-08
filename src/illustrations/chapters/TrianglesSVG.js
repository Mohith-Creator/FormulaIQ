import React from "react";
import { Polygon } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function TrianglesSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Equilateral */}
      <Polygon
        points="22,38 35,16 48,38"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Right */}
      <Polygon
        points="14,78 38,78 38,54"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Isosceles */}
      <Polygon
        points="60,78 78,38 92,78"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </BaseSVG>
  );
}
