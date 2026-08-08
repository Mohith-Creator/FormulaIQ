import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { useSettings } from "../../context/SettingsContext";

import formulaService from "../../services/formulaService";
import searchService from "../../services/searchService";

import SearchHero from "../../components/search/SearchHero";
import QuickSubjectGrid from "../../components/search/QuickSubjectGrid";
import RecentSearchList from "../../components/search/RecentSearchList";
import PopularSearchList from "../../components/search/PopularSearchList";
import SearchResultsList from "../../components/search/SearchResultsList";
import NoResults from "../../components/search/NoResults";

export default function SearchScreen({ navigation }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  const isFocused = useIsFocused();
  
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    loadRecentSearches();
  }, []);

  const loadRecentSearches = async () => {
    const searches = await searchService.getRecentSearches();
    setRecentSearches(searches);
  };

  const results = useMemo(() => {
    return formulaService.searchFormulas(query);
  }, [query]);

  const handleFormulaPress = async (formula) => {
    await searchService.addRecentSearch(formula.title);
    await loadRecentSearches();

    navigation.navigate("Home", {
      screen: "FormulaDetails",
      params: {
        subject: formula.subject,
        chapter: formula.chapter,
        formula,
      },
    });
  };

  const handleSearchChip = (text) => {
    setQuery(text);
  };

  const handleRemoveRecent = async (text) => {
    await searchService.removeRecentSearch(text);
    await loadRecentSearches();
  };

  const handleClearRecent = async () => {
    await searchService.clearRecentSearches();
    setRecentSearches([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <SearchHero
          value={query}
          onChangeText={setQuery}
          onClear={() => setQuery("")}
          autoFocus={isFocused}
        />

        {query.trim() === "" ? (
          <>
            <QuickSubjectGrid
              onSubjectPress={(subject) =>
                navigation.navigate("Home", {
                  screen: "Subject",
                  params: { subject },
                })
              }
            />

            {recentSearches.length > 0 && (
              <RecentSearchList
                searches={recentSearches}
                onPress={handleSearchChip}
                onRemove={handleRemoveRecent}
                onClear={handleClearRecent}
              />
            )}

            <PopularSearchList
              searches={formulaService.getPopularSearches()}
              onPress={handleSearchChip}
            />
          </>
        ) : results.length > 0 ? (
          <SearchResultsList
            results={results}
            onFormulaPress={handleFormulaPress}
          />
        ) : (
          <NoResults />
        )}
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
  });
