import { useTheme } from "next-themes";
import type { ColorModeProvider } from "./ColorModeProvider.tsx";

export interface UseColorModeReturn {
  colorMode: ColorModeProvider;
  setColorMode: (colorMode: ColorModeProvider) => void;
  toggleColorMode: () => void;
}

export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme();
  const colorMode = forcedTheme || resolvedTheme;
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return {
    colorMode: colorMode as ColorModeProvider,
    setColorMode: setTheme,
    toggleColorMode,
  };
}
