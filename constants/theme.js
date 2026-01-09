import { useColorScheme } from "react-native";
import { COLORS } from "../theme/colors";

const scheme = useColorScheme();
const theme = scheme === "dark" ? COLORS.dark : COLORS.light;