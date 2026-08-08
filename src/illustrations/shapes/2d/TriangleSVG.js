import React from "react";
import { Polygon, Line, Text as SvgText } from "react-native-svg";

import BaseSVG from "../BaseSVG";

export default function TriangleSVG({
  size = 90,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Triangle */}
      <Polygon
        points="50,20 22,68 78,68"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {/* Height */}
      <Line
        x1="50"
        y1="20"
        x2="50"
        y2="68"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />

      {/* Base Dimension */}
      <Line x1="22" y1="78" x2="78" y2="78" stroke={color} strokeWidth="1.5" />

      {/* Height Dimension */}
      <Line x1="86" y1="20" x2="86" y2="68" stroke={color} strokeWidth="1.5" />

      {/* Base Label */}
      <SvgText
        x="50"
        y="92"
        fill={color}
        fontSize="11"
        textAnchor="middle"
        fontStyle="italic"
      >
        b
      </SvgText>

      {/* Height Label */}
      <SvgText x="90" y="47" fill={color} fontSize="11" fontStyle="italic">
        h
      </SvgText>
    </BaseSVG>
  );
}
