import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { COLORS } from "./theme";

export const LightNavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.theme,
    background: COLORS.light.background,
    card: COLORS.light.card,
    text: COLORS.light.text,
    border: COLORS.light.border,
    primary: COLORS.light.primary,
  },
};

export const DarkNavTheme = {
  ...DarkTheme,
  theme: {
    ...DarkTheme.theme,
    background: COLORS.dark.background,
    card: COLORS.dark.card,
    text: COLORS.dark.text,
    border: COLORS.dark.border,
    primary: COLORS.dark.primary,
  },
};