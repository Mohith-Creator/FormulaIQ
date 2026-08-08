import React from "react";
import { Text, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

import FractionSVG from "./FractionSVG";

export default function MathValue({ value, color }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  const textColor = color || theme.text;

  switch (value) {
    case "1/√2":
      return <FractionSVG numerator="1" denominator="√2" color={textColor} />;

    case "1/2":
      return <FractionSVG numerator="1" denominator="2" color={textColor} />;

    case "1/√3":
      return <FractionSVG numerator="1" denominator="√3" color={textColor} />;

    case "2/√3":
      return <FractionSVG numerator="2" denominator="√3" color={textColor} />;

    case "√3/2":
      return <FractionSVG numerator="√3" denominator="2" color={textColor} />;

    case "√2/2":
      return <FractionSVG numerator="√2" denominator="2" color={textColor} />;

    default:
      return (
        <Text
          style={[
            styles.text,
            {
              color: textColor,
            },
          ]}
        >
          {value}
        </Text>
      );
  }
}

const getStyles = (theme) =>
  StyleSheet.create({
    text: {
      fontSize: 15,
      fontWeight: "600",
      textAlign: "center",
      color: theme.text,
    },
  });
