import React from "react";
import { Circle, Text as SvgText } from "react-native-svg";

import BaseSVG from "./BaseSVG";

const NUMBERS = [
  { x: 24, y: 30, value: "2", prime: true },
  { x: 50, y: 30, value: "3", prime: true },
  { x: 76, y: 30, value: "4" },

  { x: 24, y: 54, value: "5", prime: true },
  { x: 50, y: 54, value: "6" },
  { x: 76, y: 54, value: "7", prime: true },

  { x: 24, y: 78, value: "8" },
  { x: 50, y: 78, value: "9" },
  { x: 76, y: 78, value: "11", prime: true },
];

export default function PrimeNumbersSVG({ size = 100, color = "#2563EB" }) {
  return (
    <BaseSVG size={size}>
      {NUMBERS.map((item) => (
        <React.Fragment key={item.value}>
          {item.prime && (
            <Circle
              cx={item.x}
              cy={item.y - 5}
              r="10"
              fill="none"
              stroke={color}
              strokeWidth="2"
            />
          )}

          <SvgText
            x={item.x}
            y={item.y - 1}
            textAnchor="middle"
            fill={color}
            fontSize="9"
            fontWeight={item.prime ? "700" : "500"}
          >
            {item.value}
          </SvgText>
        </React.Fragment>
      ))}
    </BaseSVG>
  );
}
