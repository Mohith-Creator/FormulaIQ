import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import SubjectCard from "./SubjectCard";

import formulaService from "../../services/formulaService";

export default function SubjectsList({ onSubjectPress }) {
  const subjects = formulaService.getSubjects();

  const renderItem = ({ item }) => (
    <SubjectCard
      {...item}
      chapterCount={item.chapterCount}
      onPress={() => onSubjectPress?.(item)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={subjects}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },

  list: {
    paddingBottom: 15,
  },
});
