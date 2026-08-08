import React from "react";
import { Line, Text as SvgText } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function RemaindersSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Division Bracket */}
      <Line
        x1="34"
        y1="24"
        x2="34"
        y2="72"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <Line
        x1="34"
        y1="24"
        x2="76"
        y2="24"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Divisor */}
      <SvgText x="20" y="45" fill={color} fontSize="12" fontWeight="700">
        5
      </SvgText>

      {/* Dividend */}
      <SvgText x="46" y="18" fill={color} fontSize="12" fontWeight="700">
        68
      </SvgText>

      {/* Quotient */}
      <SvgText x="46" y="44" fill={color} fontSize="11">
        13
      </SvgText>

      {/* Multiplication Result */}
      <SvgText x="46" y="60" fill={color} fontSize="11">
        65
      </SvgText>

      {/* Horizontal Line */}
      <Line x1="44" y1="64" x2="72" y2="64" stroke={color} strokeWidth="1.8" />

      {/* Remainder */}
      <SvgText x="56" y="80" fill={color} fontSize="12" fontWeight="700">
        3
      </SvgText>
    </BaseSVG>
  );
}
