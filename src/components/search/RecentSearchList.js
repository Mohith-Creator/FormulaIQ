import React from "react";

import SearchSectionHeader from "./SearchSectionHeader";
import RecentSearchCard from "./RecentSearchCard";

export default function RecentSearchList({
  searches,
  onPress,
  onRemove,
  onClear,
}) {
  if (!searches.length) return null;
  return (
    <>
      <SearchSectionHeader
        title="Recent Searches"
        action="Clear"
        onPress={onClear}
      />
      {searches.map((item) => (
        <RecentSearchCard
          key={item}
          title={item}
          onPress={() => onPress(item)}
          onRemove={() => onRemove(item)}
        />
      ))}
    </>
  );
}
