import React from "react";
import { Rect, Polygon } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function QuadrilateralsSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      <Rect
        x="10"
        y="18"
        width="24"
        height="20"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <Polygon
        points="48,18 68,18 74,38 54,38"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <Polygon
        points="18,60 30,48 42,60 30,72"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <Polygon
        points="56,60 76,60 82,76 50,76"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </BaseSVG>
  );
}
