import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import COLORS from "../../constants/colors";
import formulaService from "../../services/formulaService";

export default function SearchDashboard() {
  const subjects = formulaService.getSubjects();

  const subjectCount = subjects.length;

  const chapterCount = subjects.reduce(
    (sum, subject) => sum + subject.chapterCount,
    0,
  );

  const formulaCount = subjects.reduce(
    (sum, subject) => sum + subject.formulaCount,
    0,
  );

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons name="search-outline" size={34} color={COLORS.primary} />
      </View>

      <Text style={styles.title}>Search Formulas</Text>

      <Text style={styles.subtitle}>
        Instantly search every formula, identity and theorem across FormulaIQ.
      </Text>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.number}>{formulaCount}</Text>
          <Text style={styles.label}>Formulas</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.stat}>
          <Text style={styles.number}>{chapterCount}</Text>
          <Text style={styles.label}>Chapters</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.stat}>
          <Text style={styles.number}>{subjectCount}</Text>
          <Text style={styles.label}>Subjects</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 30,

    padding: 26,

    backgroundColor: COLORS.surface,

    borderRadius: 24,

    borderWidth: 1,
    borderColor: COLORS.border,
  },

  icon: {
    width: 64,
    height: 64,

    borderRadius: 18,

    backgroundColor: "#EFF6FF",

    justifyContent: "center",
    alignItems: "center",

    alignSelf: "center",

    marginBottom: 18,
  },

  title: {
    fontSize: 24,
    fontWeight: "800",

    color: COLORS.text,

    textAlign: "center",
  },

  subtitle: {
    marginTop: 10,

    fontSize: 16,

    lineHeight: 25,

    textAlign: "center",

    color: COLORS.textSecondary,
  },

  stats: {
    flexDirection: "row",

    justifyContent: "space-around",

    alignItems: "center",

    marginTop: 24,
  },

  stat: {
    alignItems: "center",
  },

  number: {
    fontSize: 24,
    fontWeight: "800",

    color: COLORS.text,
  },

  label: {
    marginTop: 4,

    fontSize: 13,

    color: COLORS.textSecondary,
  },

  divider: {
    width: 1,
    height: 36,

    backgroundColor: COLORS.border,
  },
});
