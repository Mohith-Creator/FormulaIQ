import React, { useMemo, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";

import { useSettings } from "../../context/SettingsContext";

import FormulaCard from "../../components/formula/FormulaCard";
import FormulaHeader from "../../components/formula/FormulaHeader";
import CategoryChips from "../../components/formula/CategoryChips";

import formulaService from "../../services/formulaService";

export default function FormulaListScreen({ navigation, route }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  const { subject, chapter } = route.params;

  const [selectedCategory, setSelectedCategory] = useState("All");

  const formulas = formulaService.getFormulas(subject.id, chapter.id);

  const categories = useMemo(() => {
    const unique = [...new Set(formulas.map((f) => f.category))];
    return ["All", ...unique];
  }, [formulas]);

  const filteredFormulas =
    selectedCategory === "All"
      ? formulas
      : formulas.filter((formula) => formula.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredFormulas}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <FormulaCard
              formula={item}
              theme={subject.theme}
              onPress={() =>
                navigation.navigate("FormulaDetails", {
                  subject,
                  chapter,
                  formula: item,
                })
              }
            />
          </View>
        )}
        ListHeaderComponent={
          <>
            <FormulaHeader
              chapter={chapter}
              subject={subject}
              formulaCount={filteredFormulas.length}
              onBack={() => navigation.goBack()}
            />

            <CategoryChips
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
              theme={subject.theme}
            />
          </>
        }
      />
    </SafeAreaView>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },

    content: {
      paddingBottom: 110,
    },

    cardContainer: {
      paddingHorizontal: 20,
    },
  });
