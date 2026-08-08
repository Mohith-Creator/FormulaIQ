import React from "react";
import { Line, Polygon, Text as SvgText } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function TrigonometricRatiosSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      <Polygon
        points="28,72 72,72 72,28"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <Line x1="68" y1="72" x2="68" y2="68" stroke={color} strokeWidth="1.5" />

      <Line x1="72" y1="68" x2="68" y2="68" stroke={color} strokeWidth="1.5" />

      <SvgText x="38" y="78" fill={color} fontSize="8">
        cos
      </SvgText>

      <SvgText x="74" y="54" fill={color} fontSize="8">
        sin
      </SvgText>

      <SvgText x="46" y="45" fill={color} fontSize="8">
        tan
      </SvgText>

      <SvgText x="60" y="69" fill={color} fontSize="8">
        θ
      </SvgText>
    </BaseSVG>
  );
}
