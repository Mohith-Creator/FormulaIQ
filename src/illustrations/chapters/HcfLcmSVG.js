import React from "react";
import { Circle, Line, Text as SvgText } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function HcfLcmSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Numbers */}
      <Circle
        cx="30"
        cy="25"
        r="10"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <Circle
        cx="70"
        cy="25"
        r="10"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <SvgText x="30" y="29" textAnchor="middle" fill={color} fontSize="9">
        12
      </SvgText>

      <SvgText x="70" y="29" textAnchor="middle" fill={color} fontSize="9">
        18
      </SvgText>

      {/* Connecting Lines */}
      <Line x1="30" y1="35" x2="50" y2="60" stroke={color} strokeWidth="2" />

      <Line x1="70" y1="35" x2="50" y2="60" stroke={color} strokeWidth="2" />

      {/* Common Node */}
      <Circle
        cx="50"
        cy="65"
        r="10"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <SvgText x="50" y="69" textAnchor="middle" fill={color} fontSize="9">
        6
      </SvgText>
    </BaseSVG>
  );
}
