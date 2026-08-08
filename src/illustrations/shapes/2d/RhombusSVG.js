import React from "react";
import { Polygon, Line, Text as SvgText } from "react-native-svg";

import BaseSVG from "../BaseSVG";

export default function RhombusSVG({
  size = 90,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Rhombus */}
      <Polygon
        points="50,20 75,45 50,70 25,45"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {/* Vertical Diagonal */}
      <Line
        x1="50"
        y1="20"
        x2="50"
        y2="70"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />

      {/* Horizontal Diagonal */}
      <Line
        x1="25"
        y1="45"
        x2="75"
        y2="45"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />

      {/* d₁ Label */}
      <SvgText x="78" y="47" fill={color} fontSize="11" fontStyle="italic">
        d₁
      </SvgText>

      {/* d₂ Label */}
      <SvgText x="52" y="17" fill={color} fontSize="11" fontStyle="italic">
        d₂
      </SvgText>
    </BaseSVG>
  );
}
