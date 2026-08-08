import React from "react";
import { Circle, Line, Text as SvgText } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function FactorsMultiplesSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Center Number */}
      <Circle
        cx="50"
        cy="50"
        r="12"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <SvgText
        x="50"
        y="54"
        textAnchor="middle"
        fill={color}
        fontSize="10"
        fontWeight="700"
      >
        6
      </SvgText>

      {/* Top Factors */}
      <Circle
        cx="28"
        cy="24"
        r="8"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />

      <Circle
        cx="72"
        cy="24"
        r="8"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />

      <SvgText x="28" y="28" textAnchor="middle" fill={color} fontSize="8">
        2
      </SvgText>

      <SvgText x="72" y="28" textAnchor="middle" fill={color} fontSize="8">
        3
      </SvgText>

      <Line x1="35" y1="30" x2="44" y2="40" stroke={color} strokeWidth="2" />

      <Line x1="65" y1="30" x2="56" y2="40" stroke={color} strokeWidth="2" />

      {/* Bottom Multiples */}
      <Circle
        cx="28"
        cy="80"
        r="8"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />

      <Circle
        cx="72"
        cy="80"
        r="8"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />

      <SvgText x="28" y="84" textAnchor="middle" fill={color} fontSize="8">
        12
      </SvgText>

      <SvgText x="72" y="84" textAnchor="middle" fill={color} fontSize="8">
        18
      </SvgText>

      <Line x1="44" y1="60" x2="35" y2="72" stroke={color} strokeWidth="2" />

      <Line x1="56" y1="60" x2="65" y2="72" stroke={color} strokeWidth="2" />
    </BaseSVG>
  );
}
