import React from "react";
import { Text as SvgText, Line } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function IndicesSurdsSVG({ size = 100, color = "#2563EB" }) {
  return (
    <BaseSVG size={size}>
      <SvgText x="26" y="42" fill={color} fontSize="18" fontWeight="700">
        x²
      </SvgText>

      <Line
        x1="20"
        y1="50"
        x2="80"
        y2="50"
        stroke={color}
        strokeWidth="2"
        opacity="0.3"
      />

      <SvgText x="26" y="72" fill={color} fontSize="18" fontWeight="700">
        √x
      </SvgText>
    </BaseSVG>
  );
}
