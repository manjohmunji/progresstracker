import { router } from "expo-router";
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const ORANGE = "#6f00ff";

export default function ReadingTracker() {
  const books = [
    {
      title: "Rich Dad Poor Dad",
      progress: 55,
      cover: require("../assets/images/book1.jpg"),
    },
    {
      title: "Atomic Habits",
      progress: 20,
      cover: require("../assets/images/book1.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Text style={styles.header}>Your Reading Tracker</Text>
        <Text style={styles.subText}>Stay consistent. Stay sharp.</Text>

        {/* Big Progress Ring */}
        <View style={styles.progressRing}>
          <View style={styles.progressCircle}>
            <Text style={styles.progressPercent}>72%</Text>
            <Text style={styles.progressLabel}>This Week</Text>
          </View>
        </View>

        {/* Section Title */}
        <Text style={styles.sectionTitle}>Currently Reading</Text>

        {/* Book Cards */}
        {books.map((book, index) => (
          <View key={index} style={styles.bookCard}>
            <Image source={book.cover} style={styles.cover} />

            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>{book.title}</Text>

              <View style={styles.trackBar}>
                <View
                  style={[
                    styles.trackFill,
                    { width: `${book.progress}%` },
                  ]}
                />
              </View>

              <Text style={styles.progressText}>
                {book.progress}% completed
              </Text>
            </View>
          </View>
        ))}

        {/* Bottom Spacing */}
        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Floating Upload Button */}
      <TouchableOpacity style={styles.floatingBtn} 
        onPress={() => router.push("../../screen/pdf-progress")}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 26,
    fontWeight: "800",
    marginTop: 20,
    color: "#f50808f3",
  },

  subText: {
    color: "rgb(92, 7, 7)",
    marginBottom: 20,
  },

  /* Progress Ring */
  progressRing: {
    alignItems: "center",
    marginVertical: 20,
  },

  progressCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 12,
    borderColor: ORANGE,
    alignItems: "center",
    justifyContent: "center",
  },

  progressPercent: {
    fontSize: 32,
    fontWeight: "800",
    color: "#000",
  },

  progressLabel: {
    color: "#555",
    fontSize: 14,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 10,
  },

  /* Book Card */
  bookCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 4,
    shadowColor: "#110202",
  },

  cover: {
    width: 90,
    height: 130,
    borderRadius: 10,
  },

  bookInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },

  bookTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },

  trackBar: {
    width: "100%",
    height: 10,
    backgroundColor: "#eee",
    borderRadius: 5,
    marginVertical: 6,
  },

  trackFill: {
    height: 10,
    backgroundColor: ORANGE,
    borderRadius: 5,
  },

  progressText: {
    fontSize: 12,
    color: "#555",
  },

  /* Floating Button */
  floatingBtn: {
    position: "absolute",
    bottom: 30,
    right: 25,
    backgroundColor: ORANGE,
    width: 65,
    height: 65,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },

  plus: {
    fontSize: 40,
    color: "#fff",
    marginTop: -4,
  },
});
