import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "recent-searches";

const searchService = {
  async getRecentSearches() {
    const value = await AsyncStorage.getItem(KEY);
    return value ? JSON.parse(value) : [];
  },

  async addRecentSearch(search) {
    if (!search) return;
    const recent = await this.getRecentSearches();
    const updated = [search, ...recent.filter((item) => item !== search)].slice(
      0,
      8,
    );
    await AsyncStorage.setItem(KEY, JSON.stringify(updated));
  },

  async removeRecentSearch(search) {
    const searches = await this.getRecentSearches();
    const updated = searches.filter((item) => item !== search);
    await AsyncStorage.setItem(KEY, JSON.stringify(updated));
    return updated;
  },

  async clearRecentSearches() {
    await AsyncStorage.removeItem(KEY);
  },
};

export default searchService;
