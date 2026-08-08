import React from "react";
import { Line, Circle, Text, G } from "react-native-svg";
import BaseSVG from "./BaseSVG";

export default function LinesAnglesSVG({
  size = 100,
  color = "#2563EB",
  strokeWidth = 1.5, // Thinner lines
}) {
  return (
    <BaseSVG size={size} viewBox="0 0 100 100">
      <G translateY={10} translateX={-2}>
        {/* ================= Parallel Line A ================= */}
        <Line
          x1="10"
          y1="30"
          x2="90"
          y2="30"
          stroke={color}
          strokeWidth={strokeWidth}
        />

        {/* ================= Parallel Line B ================= */}
        <Line
          x1="10"
          y1="70"
          x2="90"
          y2="70"
          stroke={color}
          strokeWidth={strokeWidth}
        />

        {/* ================= Transversal ================= */}
        <Line
          x1="35"
          y1="5"
          x2="65"
          y2="95"
          stroke={color}
          strokeWidth={strokeWidth}
        />

        {/* ================= Intersection Circles ================= */}
        <Circle
          cx="43.3"
          cy="30"
          r="7"
          fill="none"
          stroke={color}
          strokeWidth={1}
        />

        <Circle
          cx="56.7"
          cy="70"
          r="7"
          fill="none"
          stroke={color}
          strokeWidth={1}
        />

        {/* ================= Labels ================= */}

        <Text x="2" y="33.5" fontSize="9" fontWeight="800" fill={color}>
          A
        </Text>

        <Text x="2" y="73.5" fontSize="9" fontWeight="800" fill={color}>
          B
        </Text>

        <Text x="30" y="4" fontSize="9" fontWeight="800" fill={color}>
          P
        </Text>

        {/* ================= Top Intersection ================= */}

        <Text x="33" y="25" fontSize="9" fontWeight="800" fill={color}>
          1
        </Text>

        <Text x="51" y="25" fontSize="9" fontWeight="800" fill={color}>
          2
        </Text>

        <Text x="51" y="41" fontSize="9" fontWeight="800" fill={color}>
          3
        </Text>

        <Text x="31" y="41" fontSize="9" fontWeight="800" fill={color}>
          4
        </Text>

        {/* ================= Bottom Intersection ================= */}

        <Text x="43" y="65" fontSize="9" fontWeight="800" fill={color}>
          5
        </Text>

        <Text x="63" y="65" fontSize="9" fontWeight="800" fill={color}>
          6
        </Text>

        <Text x="64" y="81" fontSize="9" fontWeight="800" fill={color}>
          7
        </Text>

        <Text x="43" y="81" fontSize="9" fontWeight="800" fill={color}>
          8
        </Text>
      </G>
    </BaseSVG>
  );
}
