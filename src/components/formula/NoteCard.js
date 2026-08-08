import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NoteCard({ note }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{note}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FEF3C7",

    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#FCD34D",

    marginHorizontal: 20,
    marginBottom: 24,

    padding: 16,
  },

  text: {
    fontSize: 15,
    lineHeight: 24,

    color: "#92400E",

    fontWeight: "500",
  },
});
