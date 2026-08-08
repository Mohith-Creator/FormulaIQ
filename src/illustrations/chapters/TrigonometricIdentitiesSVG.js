import React from "react";
import { Polygon, Text as SvgText } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function TrigonometricIdentitiesSVG({
  size = 100,
  color = "#2563EB",
}) {
  return (
    <BaseSVG size={size}>
      <Polygon
        points="25,72 75,72 75,28"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
      />

      <SvgText x="50" y="90" textAnchor="middle" fill={color} fontSize="8">
        sin²θ + cos²θ = 1
      </SvgText>
    </BaseSVG>
  );
}
