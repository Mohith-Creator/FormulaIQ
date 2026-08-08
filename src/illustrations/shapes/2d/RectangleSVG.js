import React from "react";
import { Rect, Line, Text as SvgText } from "react-native-svg";

import BaseSVG from "../BaseSVG";

export default function RectangleSVG({
  size = 90,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Rectangle */}
      <Rect
        x="18"
        y="24"
        width="54"
        height="36"
        rx="2"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Bottom Length Line */}
      <Line x1="18" y1="70" x2="72" y2="70" stroke={color} strokeWidth="1.5" />

      {/* Right Breadth Line */}
      <Line x1="80" y1="24" x2="80" y2="60" stroke={color} strokeWidth="1.5" />

      {/* Length Label */}
      <SvgText
        x="45"
        y="84"
        fill={color}
        fontSize="11"
        textAnchor="middle"
        fontStyle="italic"
      >
        l
      </SvgText>

      {/* Breadth Label */}
      <SvgText x="86" y="45" fill={color} fontSize="11" fontStyle="italic">
        b
      </SvgText>
    </BaseSVG>
  );
}
