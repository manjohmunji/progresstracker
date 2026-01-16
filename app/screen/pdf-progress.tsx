import { useTheme } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function PDFProgress() {
  const { colors } = useTheme();

  const pdfs = [
    { title: "Math Notes", pagesRead: 40, totalPages: 120 },
    { title: "Physics Notes", pagesRead: 60, totalPages: 90 },
    { title: "Chemistry Notes", pagesRead: 30, totalPages: 75 },
  ];

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <Text style={[styles.title, { color: colors.text }]}>
        PDF Progress
      </Text>

      {pdfs.map((pdf, index) => {
        const percent = Math.round(
          (pdf.pagesRead / pdf.totalPages) * 100
        );

        return (
          <View
            key={index}
            style={[styles.card, { backgroundColor: colors.card }]}
          >
            <Text style={[styles.pdfTitle, { color: colors.text }]}>
              {pdf.title}
            </Text>

            <View style={styles.progressBarBackground}>
              <View
                style={[
                  styles.progressBarFill,
                  { width: `${percent}%`, backgroundColor: colors.primary },
                ]}
              />
            </View>

            <Text style={{ color: colors.text, marginTop: 6 }}>
              {pdf.pagesRead}/{pdf.totalPages} pages ({percent}%)
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 20 },
  card: {
    padding: 16,
    borderRadius: 10,
    marginBottom: 14,
  },
  pdfTitle: { fontSize: 16, fontWeight: "600", marginBottom: 10 },
  progressBarBackground: {
    height: 16,
    borderRadius: 8,
    backgroundColor: "#E0E0E0",
    overflow: "hidden",
  },
  progressBarFill: { height: "100%" },
});
