import { useTheme } from "@react-navigation/native";
import * as DocumentPicker from "expo-document-picker";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function UploadPDF() {
  const { colors } = useTheme();

  const pickPDF = async () => {
    await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
      copyToCacheDirectory: true,
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Upload PDF
      </Text>

      <Pressable
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={pickPDF}
      >
        <Text style={styles.buttonText}>Select PDF</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 30 },
  button: {
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
