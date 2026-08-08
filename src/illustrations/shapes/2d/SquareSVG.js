import React from "react";
import { Rect, Line, Text as SvgText } from "react-native-svg";

import BaseSVG from "../BaseSVG";

export default function SquareSVG({
  size = 90,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Square */}
      <Rect
        x="24"
        y="22"
        width="40"
        height="40"
        rx="2"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Bottom Length Line */}
      <Line x1="24" y1="72" x2="64" y2="72" stroke={color} strokeWidth="1.5" />

      {/* Right Side Length Line */}
      <Line x1="74" y1="22" x2="74" y2="62" stroke={color} strokeWidth="1.5" />

      {/* Bottom Label */}
      <SvgText
        x="44"
        y="86"
        fill={color}
        fontSize="11"
        textAnchor="middle"
        fontStyle="italic"
      >
        S
      </SvgText>

      {/* Right Label */}
      <SvgText x="80" y="45" fill={color} fontSize="11" fontStyle="italic">
        S
      </SvgText>
    </BaseSVG>
  );
}
