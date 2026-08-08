import React from "react";
import { Line, Path, Text as SvgText } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function LogarithmsSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      <Line x1="20" y1="75" x2="80" y2="75" stroke={color} strokeWidth="2" />

      <Line x1="20" y1="20" x2="20" y2="75" stroke={color} strokeWidth="2" />

      <Path
        d="M25 70 C30 55 40 42 80 28"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <SvgText x="55" y="88" fill={color} fontSize="10" fontWeight="700">
        log
      </SvgText>
    </BaseSVG>
  );
}
