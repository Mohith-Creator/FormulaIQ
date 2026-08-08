import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import SHAPE_ILLUSTRATIONS from "../../constants/shapeIllustrations";

export default function ShapeIllustration({
  shape,
  size = 80,
  color = "#2563EB",
}) {
  const ShapeComponent = SHAPE_ILLUSTRATIONS[shape];

  if (!ShapeComponent) {
    return (
      <View
        style={{
          width: size,
          height: size,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="calculator-outline" size={size * 0.45} color={color} />
      </View>
    );
  }

  return <ShapeComponent size={size} color={color} />;
}
