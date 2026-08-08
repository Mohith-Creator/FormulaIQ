import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

import FormulaHero from "../../components/formula/FormulaHero";
import FormulaCardLarge from "../../components/formula/FormulaCardLarge";
import FormulaSectionHeader from "../../components/formula/FormulaSectionHeader";
import DescriptionCard from "../../components/formula/DescriptionCard";
import VariableRow from "../../components/formula/VariableRow";
import ExampleCard from "../../components/formula/ExampleCard";
import NoteCard from "../../components/formula/NoteCard";

export default function FormulaDetailsScreen({ navigation, route }) {
  const { theme } = useSettings();

  const styles = getStyles(theme);

  const { subject, formula, chapter } = route.params;

  const subjectTheme = subject.theme;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <FormulaHero
          formula={formula}
          theme={subjectTheme}
          onBack={() => navigation.goBack()}
        />

        <FormulaCardLarge
          formula={formula}
          chapter={chapter}
          theme={subjectTheme}
        />

        <FormulaSectionHeader
          title="Description"
          icon="document-text-outline"
          theme={subjectTheme}
        />

        <DescriptionCard
          description={formula.description}
          theme={subjectTheme}
        />

        <FormulaSectionHeader
          title="Variables"
          icon="pricetag-outline"
          theme={subjectTheme}
        />

        {formula.variables.map((item, index) => (
          <VariableRow
            key={index}
            symbol={item.symbol}
            meaning={item.meaning}
            theme={subjectTheme}
          />
        ))}

        <FormulaSectionHeader
          title="Example"
          icon="create-outline"
          theme={subjectTheme}
        />

        <ExampleCard example={formula.example} theme={subjectTheme} />

        {formula.note ? (
          <>
            <FormulaSectionHeader
              title="Quick Tip"
              icon="bulb-outline"
              theme={subjectTheme}
              yellow
            />

            <NoteCard note={formula.note} />
          </>
        ) : null}
      </ScrollView>
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

    description: {
      marginHorizontal: 20,
      marginBottom: 20,
      fontSize: 17,
      lineHeight: 30,
      color: theme.textSecondary,
    },
  });
