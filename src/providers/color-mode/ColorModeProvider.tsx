"use client";

import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider } from "next-themes";

export type ColorModeProviderProps = ThemeProviderProps;
export type ColorModeProvider = "light" | "dark";

export function ColorModeProvider(props: ColorModeProviderProps) {
  return <ThemeProvider attribute="class" disableTransitionOnChange {...props} />;
}
