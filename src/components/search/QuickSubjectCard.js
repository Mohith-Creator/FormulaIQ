import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

export default function QuickSubjectCard({ subject, onPress }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <Pressable
      style={[
        styles.card,
        (subject.id === "mensuration" || subject.id === "numberSystem") && {
          marginRight: 0,
        },
      ]}
      onPress={() => onPress(subject)}
    >
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: subject.theme.primary,
          },
        ]}
      >
        <Image source={subject.homeIcon} style={styles.icon} />
      </View>
      <Text numberOfLines={1} style={styles.title}>
        {subject.title}
      </Text>
      <Text style={styles.subtitle}>{subject.formulaCount} formulas</Text>
    </Pressable>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    card: {
      width: "31%",
      aspectRatio: 0.9,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
      paddingVertical: 14,
      marginRight: "3.5%",
      marginBottom: 14,
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
      width: 54,
      height: 54,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 16,
      marginBottom: 12,
    },

    icon: {
      width: 28,
      height: 28,
      resizeMode: "contain",
    },

    title: {
      fontSize: 14,
      fontWeight: "700",
      color: theme.text,
      textAlign: "center",
    },

    subtitle: {
      marginTop: 4,
      fontSize: 11,
      fontWeight: "500",
      color: theme.textSecondary,
      textAlign: "center",
    },
  });
