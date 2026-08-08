import React from "react";
import { Circle, Line, Path, Text as SvgText } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function StandardAnglesSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Quarter Arc */}
      <Path
        d="M25 75 A50 50 0 0 1 75 25"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Origin */}
      <Circle cx="25" cy="75" r="2.3" fill={color} />

      {/* 0° */}
      <Line
        x1="25"
        y1="75"
        x2="75"
        y2="75"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* 30° */}
      <Line x1="25" y1="75" x2="68" y2="50" stroke={color} strokeWidth="2" />

      {/* 45° */}
      <Line x1="25" y1="75" x2="60" y2="40" stroke={color} strokeWidth="2" />

      {/* 60° */}
      <Line x1="25" y1="75" x2="50" y2="32" stroke={color} strokeWidth="2" />

      {/* 90° */}
      <Line
        x1="25"
        y1="75"
        x2="25"
        y2="25"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Labels */}
      <SvgText x="77" y="79" fill={color} fontSize="8">
        0°
      </SvgText>

      <SvgText x="67" y="46" fill={color} fontSize="8">
        30°
      </SvgText>

      <SvgText x="59" y="37" fill={color} fontSize="8">
        45°
      </SvgText>

      <SvgText x="48" y="28" fill={color} fontSize="8">
        60°
      </SvgText>

      <SvgText x="10" y="24" fill={color} fontSize="8">
        90°
      </SvgText>
    </BaseSVG>
  );
}
