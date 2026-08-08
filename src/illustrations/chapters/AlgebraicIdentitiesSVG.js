import React from "react";
import { Rect, Text as SvgText, Line } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function AlgebraicIdentitiesSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      <Rect
        x="20"
        y="22"
        width="60"
        height="48"
        rx="8"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <SvgText
        x="50"
        y="48"
        textAnchor="middle"
        fill={color}
        fontSize="12"
        fontWeight="700"
      >
        (a+b)²
      </SvgText>

      <Line x1="30" y1="78" x2="70" y2="78" stroke={color} strokeWidth="2" />
    </BaseSVG>
  );
}
