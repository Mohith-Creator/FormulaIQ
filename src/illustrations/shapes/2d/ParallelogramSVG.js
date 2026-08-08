import React from "react";
import { Polygon, Line, Text as SvgText } from "react-native-svg";

import BaseSVG from "../BaseSVG";

export default function ParallelogramSVG({
  size = 90,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Parallelogram */}
      <Polygon
        points="30,25 75,25 65,60 20,60"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {/* Height (Dashed) */}
      <Line
        x1="30"
        y1="25"
        x2="30"
        y2="60"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />

      {/* Base Dimension */}
      <Line x1="20" y1="72" x2="65" y2="72" stroke={color} strokeWidth="1.5" />

      {/* Height Dimension */}
      <Line x1="12" y1="25" x2="12" y2="60" stroke={color} strokeWidth="1.5" />

      {/* Base Label */}
      <SvgText
        x="42"
        y="86"
        fill={color}
        fontSize="11"
        textAnchor="middle"
        fontStyle="italic"
      >
        b
      </SvgText>

      {/* Height Label */}
      <SvgText x="2" y="45" fill={color} fontSize="11" fontStyle="italic">
        h
      </SvgText>
    </BaseSVG>
  );
}
