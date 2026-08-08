import React from "react";
import { Polygon, Line, Text as SvgText } from "react-native-svg";

import BaseSVG from "../BaseSVG";

export default function TrapeziumSVG({
  size = 90,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Trapezium */}
      <Polygon
        points="32,25 68,25 80,60 20,60"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {/* Height */}
      <Line
        x1="32"
        y1="25"
        x2="32"
        y2="60"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />

      {/* Top Base */}
      <Line x1="32" y1="16" x2="68" y2="16" stroke={color} strokeWidth="1.5" />

      {/* Bottom Base */}
      <Line x1="20" y1="72" x2="80" y2="72" stroke={color} strokeWidth="1.5" />

      {/* Height Dimension */}
      <Line x1="12" y1="25" x2="12" y2="60" stroke={color} strokeWidth="1.5" />

      {/* Labels */}
      <SvgText
        x="50"
        y="12"
        fill={color}
        fontSize="11"
        textAnchor="middle"
        fontStyle="italic"
      >
        a
      </SvgText>

      <SvgText
        x="50"
        y="86"
        fill={color}
        fontSize="11"
        textAnchor="middle"
        fontStyle="italic"
      >
        b
      </SvgText>

      <SvgText x="2" y="45" fill={color} fontSize="11" fontStyle="italic">
        h
      </SvgText>
    </BaseSVG>
  );
}
