import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Dashboard() {
  const { colors } = useTheme();

  // Placeholder data for now
  const userName = "Mbaya Courage";
  const progress = 45; // Example progress in percentage
  const uploadedPDFs = [
    { title: "Math Notes", pages: 120 },
    { title: "Physics Notes", pages: 90 },
    { title: "Chemistry Notes", pages: 75 },
  ];

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* Header */}
      <Text style={[styles.welcome, { color: colors.primary }]}>
        Welcome, {userName}!
      </Text>

      {/* Progress */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Reading Progress
        </Text>
        <View style={styles.progressBarBackground}>
          <View
            style={[
              styles.progressBarFill,
              { width: `${progress}%`, backgroundColor: colors.primary },
            ]}
          />
        </View>
        <Text style={{ color: colors.text, marginTop: 4 }}>{progress}% completed</Text>
      </View>

      {/* Uploaded PDFs */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Your PDFs
        </Text>
        {uploadedPDFs.map((pdf, index) => (
          <Pressable
            key={index}
            style={[styles.pdfCard, { backgroundColor: colors.card }]}
            onPress={() => router.push(`/(auth)/login`)}
          >
            <Text style={[styles.pdfTitle, { color: colors.text }]}>{pdf.title}</Text>
            <Text style={{ color: colors.text }}>{pdf.pages} pages</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  welcome: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  progressBarBackground: {
    height: 20,
    borderRadius: 10,
    backgroundColor: "#E0E0E0",
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 10,
  },
  pdfCard: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  pdfTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
});