import React from "react";
import Svg, { Rect, Text as SvgText } from "react-native-svg";

export default function PiSVG({ width = 54, height = 54 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 54 54">
      <Rect width="54" height="54" rx="16" fill="#ECFDF3" />

      <SvgText
        x="27"
        y="38"
        fontSize="65"
        fontWeight="500"
        fill="#16A34A"
        textAnchor="middle"
      >
        π
      </SvgText>
    </Svg>
  );
}
