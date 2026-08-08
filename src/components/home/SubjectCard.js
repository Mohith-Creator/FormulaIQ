import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

export default function SubjectCard({
  title,
  homeIcon,
  theme: subjectTheme,
  subtitle,
  onPress,
}) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: subjectTheme.primary,
          },
        ]}
      >
        <Image source={homeIcon} style={styles.icon} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Ionicons name="chevron-forward" size={22} color={theme.textSecondary} />
    </Pressable>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    card: {
      height: 94,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.surface,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: theme.border,
      paddingHorizontal: 16,
      marginBottom: 14,
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: theme.dark ? 0.16 : 0.03,
      shadowRadius: 4,
      elevation: 1,
    },

    pressed: {
      opacity: 0.92,
      transform: [{ scale: 0.98 }],
    },

    iconContainer: {
      width: 60,
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 16,
    },

    icon: {
      width: 36,
      height: 36,
      resizeMode: "contain",
    },

    content: {
      flex: 1,
      marginLeft: 18,
    },

    title: {
      fontSize: 17,
      fontWeight: "700",
      color: theme.text,
    },

    subtitle: {
      marginTop: 4,
      fontSize: 15,
      fontWeight: "500",
      color: theme.textSecondary,
    },
  });
