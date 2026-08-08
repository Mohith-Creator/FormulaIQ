import React from "react";
import { Path, Line, Text as SvgText } from "react-native-svg";

import BaseSVG from "../BaseSVG";

export default function CuboidSVG({
  size = 90,
  color = "#2563EB",
  strokeWidth = 2.5,
}) {
  return (
    <BaseSVG size={size}>
      {/* ================= Front Face ================= */}
      <Path
        d="
          M22 34
          L62 34
          L62 66
          L22 66
          Z
        "
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {/* ================= Top Face ================= */}
      <Path
        d="
          M22 34
          L36 22
          L76 22
          L62 34
          Z
        "
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {/* ================= Right Face ================= */}
      <Path
        d="
          M62 34
          L76 22
          L76 54
          L62 66
          Z
        "
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {/* ================= Hidden Edges ================= */}
      <Line
        x1="36"
        y1="22"
        x2="36"
        y2="54"
        stroke={color}
        strokeWidth="1.3"
        strokeDasharray="4 3"
        opacity="0.55"
      />

      <Line
        x1="36"
        y1="54"
        x2="76"
        y2="54"
        stroke={color}
        strokeWidth="1.3"
        strokeDasharray="4 3"
        opacity="0.55"
      />

      {/* ================= Height ================= */}

      <Line x1="12" y1="34" x2="12" y2="66" stroke={color} strokeWidth="1.5" />

      <Line x1="8" y1="34" x2="16" y2="34" stroke={color} strokeWidth="1.5" />

      <Line x1="8" y1="66" x2="16" y2="66" stroke={color} strokeWidth="1.5" />

      <SvgText x="2" y="53" fill={color} fontSize="11" fontStyle="italic">
        h
      </SvgText>

      {/* ================= Length ================= */}

      <Line x1="22" y1="74" x2="62" y2="74" stroke={color} strokeWidth="1.5" />

      <Line x1="22" y1="70" x2="22" y2="78" stroke={color} strokeWidth="1.5" />

      <Line x1="62" y1="70" x2="62" y2="78" stroke={color} strokeWidth="1.5" />

      <SvgText
        x="42"
        y="86"
        textAnchor="middle"
        fill={color}
        fontSize="11"
        fontStyle="italic"
      >
        l
      </SvgText>

      {/* ================= Breadth ================= */}

      <Line x1="69" y1="69" x2="81" y2="59" stroke={color} strokeWidth="1.5" />

      <Line x1="67" y1="71" x2="71" y2="67" stroke={color} strokeWidth="1.5" />

      <Line x1="79" y1="61" x2="83" y2="57" stroke={color} strokeWidth="1.5" />

      <SvgText x="75" y="75" fill={color} fontSize="11" fontStyle="italic">
        b
      </SvgText>
    </BaseSVG>
  );
}
