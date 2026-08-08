import React from "react";
import { View } from "react-native";

import SearchResultCard from "./SearchResultCard";

export default function SearchResultsList({ results, onFormulaPress }) {
  return (
    <View>
      {results.map((item, index) => (
        <SearchResultCard
          key={`${item.chapterId}-${item.id}`}
          result={item}
          isLast={index === results.length - 1}
          onPress={() => onFormulaPress(item)}
        />
      ))}
    </View>
  );
}
