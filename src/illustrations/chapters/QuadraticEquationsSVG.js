import React from "react";
import { Path, Text as SvgText } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function QuadraticEquationsSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      <Path
        d="M20 70 Q50 20 80 70"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <SvgText
        x="50"
        y="88"
        textAnchor="middle"
        fill={color}
        fontSize="12"
        fontWeight="700"
      >
        x²
      </SvgText>
    </BaseSVG>
  );
}
