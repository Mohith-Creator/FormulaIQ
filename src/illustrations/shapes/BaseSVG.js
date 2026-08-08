import React from "react";
import Svg from "react-native-svg";

export default function BaseSVG({
  size = 90,
  children,
}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
    >
      {children}
    </Svg>
  );
}