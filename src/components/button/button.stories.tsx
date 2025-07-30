import type { StoryFn } from "@storybook/types";

import { Button } from "./Button";
import { ThemeProvider } from "../../providers";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    visual: {
      control: "select",
      options: ["primary", "secondary", "link", "text"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    children: {
      control: "text",
    },
  },
  args: {
    visual: "primary",
    size: "md",
    children: "Click me",
  },
  decorators: [
    (Story: StoryFn) => (
      <ThemeProvider >
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

export const Primary = {
  args: {
    visual: "primary",
    children: "Primary Button",
  },
};

export const Secondary = {
  args: {
    visual: "secondary",
    children: "Secondary Button",
  },
};

export const Link = {
  args: {
    visual: "link",
    children: "Link Button",
  },
};

export const Text = {
  args: {
    visual: "text",
    children: "Text Button",
  },
};

export const Sizes = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button size="sm" visual="primary">
        Small
      </Button>
      <Button size="md" visual="primary">
        Medium
      </Button>
      <Button size="lg" visual="primary">
        Large
      </Button>
    </div>
  ),
};
