import React from "react";
import { Ellipse, Line, Path, Circle, Text as SvgText } from "react-native-svg";

import BaseSVG from "../BaseSVG";

export default function ConeSVG({
  size = 90,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Cone Body */}
      <Path
        d="
          M50 18
          L25 68
          L75 68
          Z
        "
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {/* Base Ellipse */}
      <Ellipse
        cx="50"
        cy="68"
        rx="25"
        ry="8"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Center */}
      <Circle cx="50" cy="68" r="2.2" fill={color} />

      {/* Height */}
      <Line x1="50" y1="18" x2="50" y2="68" stroke={color} strokeWidth="1.6" />

      {/* Height Label */}
      <SvgText x="54" y="46" fill={color} fontSize="11" fontStyle="italic">
        h
      </SvgText>

      {/* Radius */}
      <Line x1="50" y1="68" x2="75" y2="68" stroke={color} strokeWidth="1.6" />

      <SvgText x="79" y="64" fill={color} fontSize="11" fontStyle="italic">
        r
      </SvgText>

      {/* Slant Height */}
      <SvgText x="28" y="39" fill={color} fontSize="11" fontStyle="italic">
        l
      </SvgText>

      {/* Height Dimension */}
      <Line x1="14" y1="18" x2="14" y2="68" stroke={color} strokeWidth="1.5" />

      <Line x1="11" y1="18" x2="17" y2="18" stroke={color} strokeWidth="1.5" />

      <Line x1="11" y1="68" x2="17" y2="68" stroke={color} strokeWidth="1.5" />

      <SvgText
        x="8"
        y="46"
        fill={color}
        fontSize="11"
        fontStyle="italic"
        textAnchor="middle"
      >
        h
      </SvgText>
    </BaseSVG>
  );
}
