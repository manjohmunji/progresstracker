import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { DarkNavTheme, LightNavTheme } from "../constants/navigationTheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider
      value={colorScheme === "dark" ? DarkNavTheme : LightNavTheme}
    >
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor:
              colorScheme === "dark"
                ? DarkNavTheme.colors.card
                : LightNavTheme.colors.card,
          },
          headerTintColor:
            colorScheme === "dark"
              ? DarkNavTheme.colors.text
              : LightNavTheme.colors.text,
        }}
      >
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="dashboard" options={{ headerShown: false }} />
         <Stack.Screen name="screen" options={{ headerShown: false }} />
        <Stack.Screen

          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>

      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </ThemeProvider>
  );
}