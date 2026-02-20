import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ReadingTracker from "../../components/ReadingTracker";
type TabType = "dashboard" | "pdf-progress" | "upload-pdf";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");
  const { colors } = useTheme();

  const userName = "steph";
  const progress = 45;
  

  // ---------------- DASHBOARD TAB ----------------
  const renderDashboardTab = () => (
    
    <SafeAreaView style={{ flex: 1 }}>
      <ReadingTracker />
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { backgroundColor: colors.background },
        ]}
      >
        <Text style={[styles.welcome, { color: colors.primary }]}>
          Welcome, {userName}!
        </Text>

        {/* Progress Section */}
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

        {/* Actions Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Actions
          </Text>

          <Pressable
            style={[styles.portalCard, { backgroundColor: colors.card }]}
            onPress={() => setActiveTab("upload-pdf")}
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
            onPress={() => setActiveTab("pdf-progress")}
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

  // ---------------- PDF PROGRESS TAB ----------------
  const renderPdfProgressTab = () => (
    <View style={styles.center}>
      <Text style={styles.placeholderText}>PDF Progress Screen</Text>
    </View>
  );

  // ---------------- UPLOAD PDF TAB ----------------
  const renderUploadPdfTab = () => (
    <View style={styles.center}>
      <Text style={styles.placeholderText}>Upload PDF Screen</Text>
    </View>
  );

  // ---------------- MAIN RETURN ----------------
  return (
    <View style={styles.container1}>
      <View style={styles.content}>
        {activeTab === "dashboard" && renderDashboardTab()}
        {activeTab === "pdf-progress" && renderPdfProgressTab()}
        {activeTab === "upload-pdf" && renderUploadPdfTab()}
      </View>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab("dashboard")}
        >
          <FontAwesome
            name="home"
            size={22}
            color={activeTab === "dashboard" ? "#007AFF" : "#666"}
          />
          <Text
            style={[
              styles.tabButtonText,
              activeTab === "dashboard" && styles.activeTabText,
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab("pdf-progress")}
        >
          <FontAwesome
            name="file-pdf-o"
            size={22}
            color={activeTab === "pdf-progress" ? "#007AFF" : "#666"}
          />
          <Text
            style={[
              styles.tabButtonText,
              activeTab === "pdf-progress" && styles.activeTabText,
            ]}
          >
            Progress
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab("upload-pdf")}
        >
          <FontAwesome
            name="upload"
            size={22}
            color={activeTab === "upload-pdf" ? "#007AFF" : "#666"}
          />
          <Text
            style={[
              styles.tabButtonText,
              activeTab === "upload-pdf" && styles.activeTabText,
            ]}
          >
            Upload
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ---------------- STYLES ----------------
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
  container1: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  content: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  tabButton: {
    alignItems: "center",
  },
  tabButtonText: {
    fontSize: 12,
    color: "#666",
  },
  activeTabText: {
    color: "#007AFF",
    fontWeight: "600",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: "600",
  },
});

