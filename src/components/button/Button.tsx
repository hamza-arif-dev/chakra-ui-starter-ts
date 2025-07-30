"use client";

import { chakra, useRecipe, type HTMLChakraProps } from "@chakra-ui/react";
import { buttonRecipe } from "./button.recipe";
import type { RecipeVariantProps } from "@chakra-ui/react";

type ButtonVariants = RecipeVariantProps<typeof buttonRecipe>;

export type ButtonProps = HTMLChakraProps<"button"> & ButtonVariants;

export const Button = (props: ButtonProps) => {
  const { visual, size, ...restProps } = props;

  const recipe = useRecipe({ recipe: buttonRecipe });
  const styles = recipe({ visual, size });

  return <chakra.button css={styles} {...restProps} />;
};
