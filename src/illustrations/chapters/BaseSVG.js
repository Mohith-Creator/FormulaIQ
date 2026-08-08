import React from "react";
import Svg from "react-native-svg";

export default function BaseSVG({
  size = 100,
  viewBox = "0 0 100 100",
  children,
}) {
  return (
    <Svg width={size} height={size} viewBox={viewBox} fill="none">
      {children}
    </Svg>
  );
}
