import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

import ReferenceHeader from "../../components/numbers/ReferenceHeader";
import PrimeNumberCard from "../../components/numbers/PrimeNumberCard";

import referenceService from "../../services/referenceService";

export default function PrimeNumbersScreen({ navigation }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  const primeNumbers = referenceService.getPrimeNumbers();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={primeNumbers}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.row}
        ListHeaderComponent={
          <ReferenceHeader
            title="Prime Numbers"
            subtitle="Prime numbers from 1 to 1000"
            onBack={() => navigation.goBack()}
          />
        }
        renderItem={({ item }) => <PrimeNumberCard number={item.number} />}
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
      paddingHorizontal: 14,
      paddingBottom: 110,
    },

    row: {
      justifyContent: "space-between",
    },
  });
