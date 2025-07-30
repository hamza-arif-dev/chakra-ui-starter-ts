import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    fontWeight: "semibold",
    borderRadius: "md",
    transition: "all 0.2s",
    lineHeight: "1.2",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    visual: {
      primary: {
        bg: "blue.500",
        color: "white",
        _hover: { bg: "blue.600" },
        _active: { bg: "blue.700" },
      },
      secondary: {
        border: "1px solid",
        borderColor: "gray.300",
        bg: "white",
        color: "gray.800",
        _hover: { bg: "gray.50" },
        _active: { bg: "gray.100" },
      },
      link: {
        bg: "transparent",
        color: "blue.500",
        textDecoration: "underline",
        px: 0,
        py: 0,
        height: "auto",
        _hover: { color: "blue.600" },
        _active: { color: "blue.700" },
      },
      text: {
        bg: "transparent",
        color: "gray.800",
        _hover: { bg: "gray.50" },
        _active: { bg: "gray.100" },
      },
    },
    size: {
      sm: {
        px: "3",
        py: "1.5",
        fontSize: "sm",
        h: "8",
        minW: "8",
      },
      md: {
        px: "4",
        py: "2",
        fontSize: "md",
        h: "10",
        minW: "10",
      },
      lg: {
        px: "5",
        py: "2.5",
        fontSize: "lg",
        h: "12",
        minW: "12",
      },
    },
  },
  defaultVariants: {
    visual: "primary",
    size: "md",
  },
});
