import React from "react";
import { Polygon, Text as SvgText } from "react-native-svg";

import BaseSVG from "../BaseSVG";

export default function TriangleSidesSVG({
  size = 90,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* Triangle */}
      <Polygon
        points="50,18 22,70 78,70"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Side a */}
      <SvgText
        x="50"
        y="84"
        fill={color}
        fontSize="11"
        textAnchor="middle"
        fontStyle="italic"
      >
        a
      </SvgText>

      {/* Side b */}
      <SvgText
        x="71"
        y="42"
        fill={color}
        fontSize="11"
        textAnchor="middle"
        fontStyle="italic"
      >
        b
      </SvgText>

      {/* Side c */}
      <SvgText
        x="29"
        y="42"
        fill={color}
        fontSize="11"
        textAnchor="middle"
        fontStyle="italic"
      >
        c
      </SvgText>

      {/* Optional vertices */}
      {/* <SvgText
        x="50"
        y="12"
        fill={color}
        fontSize="9"
        textAnchor="middle"
      >
        A
      </SvgText>

      <SvgText
        x="17"
        y="75"
        fill={color}
        fontSize="9"
      >
        B
      </SvgText>

      <SvgText
        x="81"
        y="75"
        fill={color}
        fontSize="9"
      >
        C
      </SvgText> */}
    </BaseSVG>
  );
}
