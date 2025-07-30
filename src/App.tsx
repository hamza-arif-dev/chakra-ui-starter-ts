import { ThemeProvider } from "./providers";
import { Box, VStack } from "./layout";
import { ColorModeButton } from "./providers/color-mode";
import { Button } from "./components";

export const App = () => {
  return (
    <ThemeProvider>
      <VStack padding="md" gap="lg" alignItems="flex-start">
        <ColorModeButton />
        <Button variant="primary">Hello</Button>
        <Box padding="sm" background="bg.subtle">
          Hello World
        </Box>
        <Box padding="sm" background="bg.success">
          Hello World
        </Box>
        <Box padding="sm" background="bg.warning">
          Hello World
        </Box>
        <Box padding="sm" background="bg.error">
          Hello World
        </Box>
        <Box padding="sm" background="bg.info">
          Hello World
        </Box>
      </VStack>
    </ThemeProvider>
  );
};
