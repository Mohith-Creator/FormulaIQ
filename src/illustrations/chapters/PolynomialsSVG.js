import React from "react";
import { Path } from "react-native-svg";

import BaseSVG from "./BaseSVG";

export default function PolynomialsSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      <Path
        d="
          M15 65
          C25 30 40 30 50 55
          S70 85 85 40
        "
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </BaseSVG>
  );
}
