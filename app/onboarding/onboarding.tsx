import { COLORS } from "@/constants/theme";
import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function OnboardingScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: COLORS.light.background }]}>
      
      {/* Logo / App Name */}
      <Text style={[styles.logo, { color: COLORS.primary }]}>
        PDF Tracker
      </Text>

      {/* Headline */}
      <Text style={[styles.title, { color: COLORS.light.text }]}>
        Read Smarter
      </Text>

      {/* Description */}
      <Text style={[styles.subtitle, { color: COLORS.light.text }]}>
        Upload your PDF notes, track your reading progress, and continue from where you stopped.
      </Text>

      {/* Features */}
      <View style={styles.features}>
        <Text style={[styles.featureText, { color: COLORS.light.text }]}>
          • Upload PDF notes
        </Text>
        <Text style={[styles.featureText, { color: COLORS.light.text }]}>
          • Track progress automatically
        </Text>
        <Text style={[styles.featureText, { color: COLORS.light.text }]}>
          • Resume anytime
        </Text>
      </View>

      {/* Button */}
      <Pressable
        style={[
          styles.button,
          { backgroundColor: COLORS.primary }
        ]}
        onPress={() => router.push("/(auth)/register")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },

  logo: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 12,
  },

  title: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 24,
  },

  features: {
    marginBottom: 40,
  },

  featureText: {
    fontSize: 16,
    marginBottom: 8,
  },

  button: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});