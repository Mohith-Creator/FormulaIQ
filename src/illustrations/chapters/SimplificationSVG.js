import React from "react";
import { Text as SvgText, Line, Polyline } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function SimplificationSVG({ size = 100, color = "#2563EB" }) {
  return (
    <BaseSVG size={size}>
      <SvgText
        x="50"
        y="34"
        textAnchor="middle"
        fill={color}
        fontSize="12"
        fontWeight="700"
      >
        (x+2)-2
      </SvgText>

      <Line x1="50" y1="42" x2="50" y2="62" stroke={color} strokeWidth="2" />

      <Polyline
        points="46,58 50,62 54,58"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />

      <SvgText
        x="50"
        y="84"
        textAnchor="middle"
        fill={color}
        fontSize="18"
        fontWeight="700"
      >
        x
      </SvgText>
    </BaseSVG>
  );
}
