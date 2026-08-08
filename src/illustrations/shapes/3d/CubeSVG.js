import React from "react";
import { Path, Line, Text as SvgText } from "react-native-svg";

import BaseSVG from "../BaseSVG";

export default function CubeSVG({
  size = 90,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Front Face */}
      <Path
        d="
          M28 34
          L58 34
          L58 64
          L28 64
          Z
        "
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {/* Top Face */}
      <Path
        d="
          M28 34
          L40 24
          L70 24
          L58 34
          Z
        "
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {/* Side Face */}
      <Path
        d="
          M58 34
          L70 24
          L70 54
          L58 64
          Z
        "
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {/* Hidden Back Edge */}
      <Line
        x1="40"
        y1="24"
        x2="40"
        y2="54"
        stroke={color}
        strokeWidth="1.4"
        opacity="0.35"
      />

      {/* Top Back Edge */}
      <Line
        x1="40"
        y1="54"
        x2="70"
        y2="54"
        stroke={color}
        strokeWidth="1.4"
        opacity="0.35"
      />

      {/* Dimension Line */}
      <Line x1="28" y1="70" x2="58" y2="70" stroke={color} strokeWidth="1.5" />

      {/* Left Tick */}
      <Line x1="28" y1="67" x2="28" y2="73" stroke={color} strokeWidth="1.5" />

      {/* Right Tick */}
      <Line x1="58" y1="67" x2="58" y2="73" stroke={color} strokeWidth="1.5" />

      {/* Edge Label */}
      <SvgText
        x="43"
        y="82"
        fill={color}
        fontSize="11"
        fontStyle="italic"
        textAnchor="middle"
      >
        a
      </SvgText>
    </BaseSVG>
  );
}
