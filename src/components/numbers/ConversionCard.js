import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

export default function ConversionCard() {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <Ionicons name="swap-horizontal" size={20} color={theme.primary} />
        </View>
        <Text style={styles.title}>Angle Conversion</Text>
      </View>
      <Text style={styles.item}>180° = π radians</Text>
      <Text style={styles.item}>π radians = 180°</Text>
      <View style={styles.divider} />
      <Text style={styles.item}>1° = π / 180 radians</Text>
      <Text style={styles.item}>1 radian ≈ 57.2958°</Text>
      <View style={styles.tip}>
        <Ionicons name="bulb-outline" size={18} color="#D97706" />
        <View style={styles.tipContent}>
          <Text style={styles.tipTitle}>Quick Tip</Text>
          <Text style={styles.tipText}>
            Degrees → Radians : Multiply by π / 180
          </Text>
          <Text style={styles.tipText}>
            Radians → Degrees : Multiply by 180 / π
          </Text>
        </View>
      </View>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    card: {
      marginHorizontal: 20,
      marginBottom: 24,
      padding: 20,
      backgroundColor: theme.surface,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.border,
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: theme.dark ? 0.16 : 0.04,
      shadowRadius: 8,
      elevation: 2,
    },

    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 18,
    },

    icon: {
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 12,
      backgroundColor: theme.primaryLight,
      marginRight: 12,
    },

    title: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.text,
    },

    item: {
      fontSize: 16,
      lineHeight: 26,
      color: theme.text,
      marginBottom: 8,
    },

    divider: {
      height: 1,
      backgroundColor: theme.border,
      marginVertical: 16,
    },

    tip: {
      flexDirection: "row",
      marginTop: 18,
      padding: 16,
      borderRadius: 16,
      backgroundColor: "#FEF3C7",
    },

    tipContent: {
      flex: 1,
      marginLeft: 12,
    },

    tipTitle: {
      fontSize: 15,
      fontWeight: "700",
      color: "#92400E",
      marginBottom: 6,
    },

    tipText: {
      fontSize: 14,
      lineHeight: 22,
      color: "#92400E",
    },
  });
