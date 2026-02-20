import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput
} from "react-native";

export default function LoginScreen({ navigation } : { navigation: any }) {
  const { colors } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      return Alert.alert("Error", "Please fill all fields");
    }

    // TODO: Call your backend login API here
    Alert.alert("Success", `Logged in as ${email}`);
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <Text style={[styles.title, { color: colors.primary }]}>
        Login
      </Text>

      {/* Email */}
      <TextInput
        placeholder="Email"
        placeholderTextColor={colors.text + "99"}
        style={[styles.input, { borderColor: colors.primary, color: colors.text }]}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password */}
      <TextInput
        placeholder="Password"
        placeholderTextColor={colors.text + "99"}
        style={[styles.input, { borderColor: colors.primary, color: colors.text }]}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Login Button */}
      <Pressable
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}
         onPress={() => router.push("/screen/pdf-progress")}>Login</Text>
      </Pressable>

      {/* Link to Register */}
      <Pressable onPress={() => router.push("/(auth)/register")}>
        <Text style={[styles.registerText, { color: colors.text }]}>
          Don't have an account? Register
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 32,
    textAlign: "center",
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  registerText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});