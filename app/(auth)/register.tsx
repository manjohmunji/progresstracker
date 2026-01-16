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

export default function RegisterScreen({ navigation }: { navigation: any }) {
  const { colors } = useTheme();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Simple validation
  const handleRegister = () => {
    if (!username || !email || !phone || !password || !confirmPassword) {
      return Alert.alert("Error", "Please fill all fields");
    }

    if (password !== confirmPassword) {
      return Alert.alert("Error", "Passwords do not match");
    }

    // TODO: Send data to backend here
     Alert.alert(
      "Success",
      `Account created for ${username} (${email})!`,
      [
        { text: "Continue",
             onPress: () => router.push("/dashboard/dashboard")
             }    
      
      ]
    );
  }

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <Text style={[styles.title, { color: colors.primary }]}>
        Register
      </Text>

      {/* Username */}
      <TextInput
        placeholder="Username"
        placeholderTextColor={colors.text + "99"}
        style={[styles.input, { borderColor: colors.primary, color: colors.text }]}
        value={username}
        onChangeText={setUsername}
      />

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

      {/* Phone */}
      <TextInput
        placeholder="Phone Number"
        placeholderTextColor={colors.text + "99"}
        style={[styles.input, { borderColor: colors.primary, color: colors.text }]}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
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

      {/* Confirm Password */}
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor={colors.text + "99"}
        style={[styles.input, { borderColor: colors.primary, color: colors.text }]}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Register Button */}
      <Pressable
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={handleRegister}
       
      >
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>

      {/* Already have account */}
      <Pressable onPress={() => router.push("/(auth)/login")}>
        <Text style={[styles.loginText, { color: colors.text }]}>
          Already have an account? Login
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
  loginText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});