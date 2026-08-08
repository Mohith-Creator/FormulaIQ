import React from "react";
import { Circle, Line, Polyline } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function ProgressionsSVG({ size = 100, color = "#2563EB" }) {
  return (
    <BaseSVG size={size}>
      <Circle cx="22" cy="70" r="3" fill={color} />
      <Circle cx="40" cy="58" r="3" fill={color} />
      <Circle cx="58" cy="44" r="3" fill={color} />
      <Circle cx="76" cy="26" r="3" fill={color} />

      <Line x1="22" y1="70" x2="40" y2="58" stroke={color} strokeWidth="2" />
      <Line x1="40" y1="58" x2="58" y2="44" stroke={color} strokeWidth="2" />
      <Line x1="58" y1="44" x2="76" y2="26" stroke={color} strokeWidth="2" />

      <Polyline
        points="72,27 76,26 74,30"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
    </BaseSVG>
  );
}
