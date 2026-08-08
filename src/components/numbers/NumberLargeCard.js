import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

export default function NumberLargeCard({ item, onPress, color, lightColor }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.card} onPress={onPress}>
      <View style={styles.content}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: lightColor,
            },
          ]}
        >
          <Image source={item.image} style={styles.icon} resizeMode="contain" />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.titleRow}>
            <Text numberOfLines={1} style={styles.title}>
              {item.title}
            </Text>
            <View
              style={[
                styles.arrow,
                {
                  backgroundColor: lightColor,
                },
              ]}
            >
              <Ionicons name="chevron-forward" size={15} color={color} />
            </View>
          </View>
          <Text numberOfLines={2} style={styles.subtitle}>
            {item.subtitle}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.surface,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 14,
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: theme.dark ? 0.16 : 0.04,
      shadowRadius: 8,
      elevation: 2,
    },

    content: {
      flexDirection: "row",
      alignItems: "center",
    },

    iconContainer: {
      width: 58,
      height: 58,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 16,
      marginRight: 14,
    },

    icon: {
      width: 34,
      height: 34,
    },

    textContainer: {
      flex: 1,
    },

    titleRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 4,
    },

    title: {
      flex: 1,
      marginRight: 10,
      fontSize: 18,
      fontWeight: "700",
      color: theme.text,
    },

    subtitle: {
      fontSize: 14,
      lineHeight: 20,
      color: theme.textSecondary,
    },

    arrow: {
      width: 28,
      height: 28,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 14,
      flexShrink: 0,
    },
  });
