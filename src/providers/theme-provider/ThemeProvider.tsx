import { ChakraProvider } from "../chakra-provider";
import type { ReactNode } from "react";
import { system } from "./system";
import { ColorModeProvider } from "../color-mode";

export type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  );
};
