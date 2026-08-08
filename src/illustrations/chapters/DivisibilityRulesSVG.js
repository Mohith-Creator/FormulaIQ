import React from "react";
import { Circle, Line, Polyline, Text as SvgText } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function DivisibilityRulesSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Number */}
      <Circle
        cx="28"
        cy="50"
        r="13"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <SvgText
        x="28"
        y="54"
        textAnchor="middle"
        fill={color}
        fontSize="11"
        fontWeight="700"
      >
        24
      </SvgText>

      {/* Arrow */}
      <Line x1="41" y1="50" x2="63" y2="50" stroke={color} strokeWidth="2" />

      <Polyline
        points="58,45 63,50 58,55"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Check Circle */}
      <Circle
        cx="76"
        cy="50"
        r="10"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <Polyline
        points="71,50 75,54 81,46"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseSVG>
  );
}
