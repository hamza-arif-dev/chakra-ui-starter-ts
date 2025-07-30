import type { ChakraProviderProps as CChakraProviderProps } from "@chakra-ui/react";
import { ChakraProvider as CChakraProvider } from "@chakra-ui/react";

export type ChakraProviderProps = CChakraProviderProps;

export const ChakraProvider = (props: ChakraProviderProps) => {
  const { value, children } = props;
  return <CChakraProvider value={value}>{children}</CChakraProvider>;
};
