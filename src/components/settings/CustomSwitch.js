import React from "react";
import { Pressable, View, StyleSheet, Animated } from "react-native";

export default function CustomSwitch({
  value,
  onValueChange,
  color = "#2563EB",
}) {
  const translateX = React.useRef(new Animated.Value(value ? 20 : 3)).current;

  React.useEffect(() => {
    Animated.spring(translateX, {
      toValue: value ? 19.5 : 3.5,
      useNativeDriver: true,
      friction: 8,
      tension: 120,
    }).start();
  }, [value]);

  return (
    <Pressable
      onPress={() => onValueChange(!value)}
      style={[
        styles.track,
        {
          backgroundColor: value ? color : "#E5E7EB",
        },
      ]}
    >
      <Animated.View
        style={[
          styles.thumb,
          {
            transform: [{ translateX }],
          },
        ]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: {
    width: 46,
    height: 30,
    borderRadius: 999,
    justifyContent: "center",
  },

  thumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
});
