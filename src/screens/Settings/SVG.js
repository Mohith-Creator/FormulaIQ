import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import COLORS from "../../constants/colors";

import {
  RectangleSVG,
  SquareSVG,
  CircleSVG,
  TriangleSVG,
  TriangleSidesSVG,
  KiteSVG,
  ParallelogramSVG,
  RhombusSVG,
  TrapeziumSVG,
  SectorSVG,
  SemicircleSVG,
  CubeSVG,
  CuboidSVG,
  SphereSVG,
  CylinderSVG,
  ConeSVG,
  HemisphereSVG,
} from "../../illustrations/shapes";

const SHAPES = [
  { name: "Rectangle", Component: RectangleSVG },
  { name: "Square", Component: SquareSVG },
  { name: "Circle", Component: CircleSVG },
  { name: "Triangle", Component: TriangleSVG },
  { name: "Triangle Sides", Component: TriangleSidesSVG },
  { name: "Kite", Component: KiteSVG },
  { name: "Parallelogram", Component: ParallelogramSVG },
  { name: "Rhombus", Component: RhombusSVG },
  { name: "Trapezium", Component: TrapeziumSVG },
  { name: "Sector", Component: SectorSVG },
  { name: "Semicircle", Component: SemicircleSVG },

  { name: "Cube", Component: CubeSVG },
  { name: "Cuboid", Component: CuboidSVG },
  { name: "Sphere", Component: SphereSVG },
  { name: "Cylinder", Component: CylinderSVG },
  { name: "Cone", Component: ConeSVG },
  { name: "Hemisphere", Component: HemisphereSVG },
];

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.heading}>SVG Playground</Text>
        <View style={styles.grid}>
          {SHAPES.map(({ name, Component }) => (
            <View key={name} style={styles.item}>
              <Component size={72} />
              <Text style={styles.label}>{name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    padding: 20,
    paddingTop: 44,
    paddingBottom: 100,
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 24,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  item: {
    width: "31%",
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },

  label: {
    marginTop: 12,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.text,
  },
});
