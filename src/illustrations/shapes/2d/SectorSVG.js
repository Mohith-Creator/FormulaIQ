import React from "react";
import { Circle, Line, Path, Text as SvgText } from "react-native-svg";

import BaseSVG from "../BaseSVG";

export default function SectorSVG({
  size = 90,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Circle Outline */}
      <Circle
        cx="50"
        cy="45"
        r="30"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        opacity={0.35}
      />

      {/* Sector */}
      <Path
        d="
          M50 45
          L80 45
          A30 30 0 0 0 65 19
          Z
        "
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {/* Radius 1 */}
      <Line x1="50" y1="45" x2="80" y2="45" stroke={color} strokeWidth="1.5" />

      {/* Radius 2 */}
      <Line x1="50" y1="45" x2="65" y2="19" stroke={color} strokeWidth="1.5" />

      {/* Central Angle Arc */}
      <Path
        d="
          M63 45
          A13 13 0 0 0 57 33
        "
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Center Point */}
      <Circle cx="50" cy="45" r="2.4" fill={color} />

      {/* Radius Label */}
      <SvgText x="64" y="56" fill={color} fontSize="11" fontStyle="italic">
        r
      </SvgText>

      {/* Theta Label */}
      <SvgText x="63" y="38" fill={color} fontSize="10" fontStyle="italic">
        θ
      </SvgText>
    </BaseSVG>
  );
}
