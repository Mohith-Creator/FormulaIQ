import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SplashScreen({ onFinish }) {
  const screenOpacity = useRef(new Animated.Value(1)).current;

  const robotOpacity = useRef(new Animated.Value(0)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const badgeOpacity = useRef(new Animated.Value(0)).current;

  const robotScale = useRef(new Animated.Value(0.85)).current;
  const logoTranslate = useRef(new Animated.Value(18)).current;
  const robotFloat = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(robotOpacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),

        Animated.spring(robotScale, {
          toValue: 1,
          friction: 5,
          tension: 70,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),

        Animated.timing(logoTranslate, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),

      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 450,
        useNativeDriver: true,
      }),

      Animated.timing(badgeOpacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(robotFloat, {
          toValue: -8,
          duration: 1800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),

        Animated.timing(robotFloat, {
          toValue: 8,
          duration: 1800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start();

    const timer = setTimeout(() => {
      Animated.timing(screenOpacity, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }).start(() => onFinish());
    }, 2700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: screenOpacity,
        },
      ]}
    >
      <LinearGradient
        colors={["#FFFFFF", "#F8FAFC", "#EEF6FF"]}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.content}>
        <View style={styles.glow} />
        <Animated.Image
          source={require("../../../assets/robots/main-robot.png")}
          style={[
            styles.robot,
            {
              opacity: robotOpacity,
              transform: [{ scale: robotScale }, { translateY: robotFloat }],
            },
          ]}
        />
        <Animated.Image
          source={require("../../../assets/branding/word-mark.png")}
          resizeMode="contain"
          style={[
            styles.logo,
            {
              opacity: logoOpacity,
              transform: [{ translateY: logoTranslate }],
            },
          ]}
        />

        <Animated.Text
          style={[
            styles.tagline,
            {
              opacity: textOpacity,
            },
          ]}
        >
          Your Smart Formula Companion
        </Animated.Text>
      </View>
      <Animated.Text
        style={[
          styles.footer,
          {
            opacity: textOpacity,
          },
        ]}
      >
        Learn Faster • Remember Better
      </Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -70,
    paddingHorizontal: 32,
  },

  glow: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: "#DBEAFE",
    opacity: 0.45,
  },

  robot: {
    width: 210,
    height: 210,
  },

  logo: {
    width: 260,
    height: 64,
    marginTop:-8,
  },

  tagline: {
    marginTop: 38,
    fontSize: 15,
    fontWeight: "500",
    color: "#64748B",
    letterSpacing: 0.3,
    textAlign: "center",
    lineHeight: 22,
  },

  footer: {
    position: "absolute",
    bottom: 55,
    alignSelf: "center",
    fontSize: 13,
    fontWeight: "500",
    color: "#94A3B8",
    letterSpacing: 0.3,
  },
});
