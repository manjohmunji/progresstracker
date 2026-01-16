import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {
  const { colors } = useTheme();

  const userName = "steph";
  const progress = 45;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { backgroundColor: colors.background },
        ]}
      >
        <Text style={[styles.welcome, { color: colors.primary }]}>
          Welcome, {userName}!
        </Text>

        {/* Progress Summary */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Overall Reading Progress
          </Text>

          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${progress}%`, backgroundColor: colors.primary },
              ]}
            />
          </View>

          <Text style={{ color: colors.text, marginTop: 6 }}>
            {progress}% completed
          </Text>
        </View>

        {/* Portals */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Actions
          </Text>

          <Pressable
            style={[styles.portalCard, { backgroundColor: colors.card }]}
            onPress={() => router.push("/screen/upload-pdf")}
          >
            <Text style={[styles.portalTitle, { color: colors.text }]}>
              Upload PDF
            </Text>
            <Text style={{ color: colors.text }}>
              Add a new PDF to your library
            </Text>
          </Pressable>

          <Pressable
            style={[styles.portalCard, { backgroundColor: colors.card }]}
            onPress={() => router.push("/screen/pdf-progress")}
          >
            <Text style={[styles.portalTitle, { color: colors.text }]}>
              Track PDF Progress
            </Text>
            <Text style={{ color: colors.text }}>
              View reading progress per PDF
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  welcome: { fontSize: 24, fontWeight: "700", marginBottom: 20 },
  section: { marginBottom: 30 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 12 },
  progressBarBackground: {
    height: 18,
    borderRadius: 9,
    backgroundColor: "#E0E0E0",
    overflow: "hidden",
  },
  progressBarFill: { height: "100%" },
  portalCard: {
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  portalTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
});
