import React from "react";
import Svg, {
  Circle,
  Rect,
  Line,
  Path,
  Text as SvgText,
} from "react-native-svg";

export default function SearchIllustration({
  width = 150,
  height = 150,
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 160 160">
      {/* Background floating circle */}
      <Circle
        cx="80"
        cy="80"
        r="54"
        fill="#EFF6FF"
      />

      {/* Search Lens */}
      <Circle
        cx="78"
        cy="76"
        r="22"
        stroke="#2563EB"
        strokeWidth="3"
        fill="white"
      />

      <Line
        x1="94"
        y1="92"
        x2="112"
        y2="110"
        stroke="#2563EB"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Floating Circle */}
      <Circle
        cx="40"
        cy="42"
        r="8"
        stroke="#10B981"
        strokeWidth="3"
        fill="none"
      />

      {/* Floating Triangle */}
      <Path
        d="M120 38 L132 58 L108 58 Z"
        stroke="#F97316"
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />

      {/* Floating Square */}
      <Rect
        x="30"
        y="108"
        width="16"
        height="16"
        rx="3"
        stroke="#8B5CF6"
        strokeWidth="3"
        fill="none"
      />

      {/* Small Dots */}
      <Circle cx="120" cy="100" r="3" fill="#2563EB" />
      <Circle cx="28" cy="82" r="3" fill="#10B981" />
      <Circle cx="132" cy="82" r="3" fill="#F97316" />

      {/* Formula Text */}
      <SvgText
        x="28"
        y="28"
        fontSize="12"
        fontWeight="700"
        fill="#2563EB"
      >
        x²
      </SvgText>

      <SvgText
        x="116"
        y="126"
        fontSize="12"
        fontWeight="700"
        fill="#8B5CF6"
      >
        π
      </SvgText>

      <SvgText
        x="118"
        y="24"
        fontSize="11"
        fontWeight="700"
        fill="#10B981"
      >
        √x
      </SvgText>

      <SvgText
        x="20"
        y="144"
        fontSize="11"
        fontWeight="700"
        fill="#F97316"
      >
        sinθ
      </SvgText>
    </Svg>
  );
}