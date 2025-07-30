"use client";

import { LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "./useColorMode.ts";

export const ColorModeIcon = () => {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? <LuMoon /> : <LuSun />;
};
