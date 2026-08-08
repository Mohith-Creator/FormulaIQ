import React from "react";
import { Rect, Path, Text as SvgText } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function SquaresCubesSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Square */}
      <Rect
        x="18"
        y="36"
        width="24"
        height="24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <SvgText
        x="30"
        y="74"
        textAnchor="middle"
        fill={color}
        fontSize="10"
        fontWeight="600"
      >
        x²
      </SvgText>

      {/* Cube */}
      <Path
        d="
          M58 36
          L76 36
          L76 54
          L58 54
          Z
        "
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <Path
        d="
          M58 36
          L65 30
          L83 30
          L76 36
        "
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <Path
        d="
          M76 36
          L83 30
          L83 48
          L76 54
        "
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      <SvgText
        x="70"
        y="74"
        textAnchor="middle"
        fill={color}
        fontSize="10"
        fontWeight="600"
      >
        x³
      </SvgText>
    </BaseSVG>
  );
}
