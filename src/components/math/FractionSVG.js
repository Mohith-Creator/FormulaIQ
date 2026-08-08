import React from "react";
import Svg, { Line, Text as SvgText } from "react-native-svg";

export default function FractionSVG({
  numerator,
  denominator,
  width = 52,
  height = 42,
  color = "#0F172A",
  fontSize = 14,
  strokeWidth = 1.5,
}) {
  const center = width / 2;

  return (
    <Svg width={width} height={height}>
      {/* Numerator */}
      <SvgText
        x={center}
        y={12}
        fill={color}
        fontSize={fontSize}
        fontWeight="600"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {numerator}
      </SvgText>

      {/* Fraction Bar */}
      <Line
        x1={14}
        y1={20}
        x2={width - 14}
        y2={20}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Denominator */}
      <SvgText
        x={center}
        y={33}
        fill={color}
        fontSize={fontSize}
        fontWeight="600"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {denominator}
      </SvgText>
    </Svg>
  );
}
