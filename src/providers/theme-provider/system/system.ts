import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { semanticTokens } from "./semanticTokens";
import { buttonRecipe } from "../../../components";

const config = defineConfig({
  theme: {
    semanticTokens: { ...semanticTokens },
    recipes: {
      button: buttonRecipe,
    },
  },
});

export const system = createSystem(defaultConfig, config);
