import AsyncStorage from "@react-native-async-storage/async-storage";

const THEME_KEY = "APP_THEME";

export const saveTheme = async (theme) => {
  await AsyncStorage.setItem(THEME_KEY, theme);
};

export const getTheme = async () => {
  return await AsyncStorage.getItem(THEME_KEY);
};