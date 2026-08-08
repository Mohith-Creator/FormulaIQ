import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

export default function NumberCard({
  item,
  onPress,
  color,
  lightColor,
  isLarge = false,
}) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.card} onPress={onPress}>
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
      <Text numberOfLines={1} style={styles.title}>
        {item.title}
      </Text>
      <View style={[styles.bottomRow, isLarge && styles.largeBottomRow]}>
        <Text numberOfLines={3} style={styles.subtitle}>
          {item.subtitle}
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
    </TouchableOpacity>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    card: {
      flex: 1,
      height: 165,
      padding: 14,
      backgroundColor: theme.surface,
      borderRadius: 18,
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

    iconContainer: {
      width: 52,
      height: 52,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 14,
      marginBottom: 12,
    },

    icon: {
      width: 34,
      height: 34,
    },

    title: {
      fontSize: 17,
      fontWeight: "700",
      color: theme.text,
      marginBottom: 8,
    },

    bottomRow: {
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
    },

    largeBottomRow: {
      flex: 0,
    },

    subtitle: {
      flex: 1,
      paddingRight: 10,
      fontSize: 13,
      lineHeight: 19,
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
