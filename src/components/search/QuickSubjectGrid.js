import React from "react";
import { View, StyleSheet } from "react-native";

import formulaService from "../../services/formulaService";

import SearchSectionHeader from "./SearchSectionHeader";
import QuickSubjectCard from "./QuickSubjectCard";

export default function QuickSubjectGrid({ onSubjectPress }) {
  const subjects = formulaService.getSubjects();

  return (
    <>
      <SearchSectionHeader title="Quick Access"/>
      <View style={styles.grid}>
        {subjects.map((subject) => (
          <QuickSubjectCard
            key={subject.id}
            subject={subject}
            onPress={onSubjectPress}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 18,
  },
});
