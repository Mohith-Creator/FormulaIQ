import React from "react";
import { Polygon, Line, Text as SvgText } from "react-native-svg";

import BaseSVG from "../BaseSVG";

export default function KiteSVG({
  size = 90,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Kite */}
      <Polygon
        points="50,18 72,42 50,72 28,42"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {/* Vertical Diagonal */}
      <Line
        x1="50"
        y1="18"
        x2="50"
        y2="72"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />

      {/* Horizontal Diagonal */}
      <Line
        x1="28"
        y1="42"
        x2="72"
        y2="42"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />

      {/* d₁ Label */}
      <SvgText
        x="50"
        y="14"
        fill={color}
        fontSize="11"
        textAnchor="middle"
        fontStyle="italic"
      >
        d₁
      </SvgText>

      {/* d₂ Label */}
      <SvgText x="75" y="45" fill={color} fontSize="11" fontStyle="italic">
        d₂
      </SvgText>
    </BaseSVG>
  );
}
