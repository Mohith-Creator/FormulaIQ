import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import COLORS from "../../constants/colors";

export default function EmptySearch() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconCircle}>
          <Ionicons name="search-outline" size={38} color={COLORS.primary} />
        </View>
      </View>
      <Text style={styles.title}>Search Anything</Text>
      <Text style={styles.subtitle}>
        Find formulas by title, chapter, subject, variable, or mathematical
        keyword.
      </Text>
      <View style={styles.tipCard}>
        <Ionicons name="bulb-outline" size={18} color="#F59E0B" />
        <Text style={styles.tipText}>
          Try searching{" "}
          <Text style={styles.bold}>Area, Quadratic, Sin, Circle, Cube</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    marginTop: 50,

    paddingHorizontal: 28,
  },

  iconContainer: {
    marginBottom: 24,
  },

  iconCircle: {
    width: 92,
    height: 92,

    borderRadius: 46,

    backgroundColor: "#EFF6FF",

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#DBEAFE",
  },

  title: {
    fontSize: 26,
    fontWeight: "800",

    color: COLORS.text,
  },

  subtitle: {
    marginTop: 12,

    textAlign: "center",

    fontSize: 16,
    lineHeight: 27,

    color: COLORS.textSecondary,

    maxWidth: 320,
  },

  tipCard: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 28,

    backgroundColor: "#FFFBEB",

    borderRadius: 16,

    borderWidth: 1,
    borderColor: "#FDE68A",

    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  tipText: {
    flex: 1,

    marginLeft: 10,

    fontSize: 14,
    lineHeight: 22,

    color: "#92400E",
  },

  bold: {
    fontWeight: "700",
  },
});
