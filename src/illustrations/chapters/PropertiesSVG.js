import React from "react";
import { Polygon, Circle, Line } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function PropertiesSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      <Polygon
        points="50,20 22,72 78,72"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Angle markers */}
      <Circle cx="50" cy="20" r="2" fill={color} />
      <Circle cx="22" cy="72" r="2" fill={color} />
      <Circle cx="78" cy="72" r="2" fill={color} />

      {/* Equal side marks */}
      <Line x1="38" y1="43" x2="42" y2="45" stroke={color} strokeWidth="2" />

      <Line x1="58" y1="43" x2="62" y2="45" stroke={color} strokeWidth="2" />
    </BaseSVG>
  );
}
