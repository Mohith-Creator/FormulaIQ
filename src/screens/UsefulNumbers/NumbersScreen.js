import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import { useSettings } from "../../context/SettingsContext";

import NumbersHeader from "../../components/numbers/NumbersHeader";
import NumbersSection from "../../components/numbers/NumbersSection";
import NumberCard from "../../components/numbers/NumberCard";
import NumberLargeCard from "../../components/numbers/NumberLargeCard";

import PiSVG from "../../illustrations/numbers/PiSVG";

import numbersService from "../../services/numbersService";

const basicImage = require("../../../assets/xn.png");
const trigoImage = require("../../../assets/trigonometry.png");

const ROUTES = {
  squares: "Squares",
  cubes: "Cubes",
  "prime-numbers": "PrimeNumbers",
  "standard-angles": "StandardAngles",
  "trigonometric-values": "TrigonometricValues",
};

const SECTIONS = {
  Basics: {
    title: "Basic",
    subtitle: "Learn the fundamental number patterns.",
    image: basicImage,
    color: "#2563EB",
    lightColor: "#EEF4FF",
    columns: 2,
  },

  Mathematics: {
    title: "Mathematics",
    subtitle: "Explore important number concepts.",
    icon: PiSVG,
    color: "#16A34A",
    lightColor: "#ECFDF3",
    columns: 1,
  },

  Trigonometry: {
    title: "Trigonometry",
    subtitle: "Essential values and identities.",
    image: trigoImage,
    color: "#7C3AED",
    lightColor: "#F5F3FF",
    columns: 2,
  },
};

export default function NumbersScreen({ navigation }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  const numbers = numbersService.getNumbers();
  const groupedNumbers = numbers.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
    return groups;
  }, {});

  const handlePress = (item) => {
    navigation.navigate(ROUTES[item.id]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <NumbersHeader />

        {Object.entries(groupedNumbers).map(([category, items]) => {
          const section = SECTIONS[category];
          return (
            <NumbersSection
              key={category}
              title={section.title}
              subtitle={section.subtitle}
              icon={section.icon}
              image={section.image}
              color={section.color}
              lightColor={section.lightColor}
            >
              {section.columns === 2 ? (
                <View style={styles.row}>
                  {items.map((item, index) => (
                    <View
                      key={item.id}
                      style={[
                        styles.halfCard,
                        index === 0 ? styles.leftCard : styles.rightCard,
                      ]}
                    >
                      <NumberCard
                        item={item}
                        color={section.color}
                        lightColor={section.lightColor}
                        onPress={() => handlePress(item)}
                      />
                    </View>
                  ))}
                </View>
              ) : (
                items.map((item) => (
                  <NumberLargeCard
                    key={item.id}
                    item={item}
                    color={section.color}
                    lightColor={section.lightColor}
                    onPress={() => handlePress(item)}
                  />
                ))
              )}
            </NumbersSection>
          );
        })}
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
      paddingBottom: 120,
    },

    row: {
      flexDirection: "row",
    },

    halfCard: {
      flex: 1,
    },

    leftCard: {
      marginRight: 8,
    },

    rightCard: {
      marginLeft: 8,
    },
  });
