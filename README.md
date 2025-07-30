# ⚡ Vite + TypeScript Chakra UI v3 Design System Starter

This is a lightweight boilerplate project for building a **design system** using **Vite**, **TypeScript**, and **Chakra UI v3**. It includes:

- A custom `ThemeProvider` setup with basic theme configurations.
- Chakra UI v3 integration.
- A sample `Button` component with a Storybook story to demonstrate component development and documentation.

---

## 🚀 Features

- ✅ **Vite** for blazing-fast builds and hot module replacement (HMR)
- ✅ **TypeScript** for static typing
- ✅ **Chakra UI v3** with semantic tokens and custom theme setup
- ✅ **Storybook** integration for UI component development and documentation
- ✅ Modular structure for scalable component libraries

---

## 📁 Project Structure

src/
├── components/
│ ├── button/
│ │ ├── Button.tsx # Button component
│ │ ├── button.recipe.ts # Chakra recipe for Button styling
│ │ └── button.stories.tsx # Storybook story for Button
│ ├── input/
│ ├── toaster/
│ ├── toggle/
│ ├── tooltip/
│ └── index.ts # Exports for components
│
├── hooks/ # Custom React hooks
│
├── layout/ # Layout components
│
├── providers/
│ ├── chakra-provider/ # ChakraProvider with theme setup
│ ├── color-mode/ # Color mode configuration
│ ├── theme-provider/ # Unified ThemeProvider entry
│ └── index.ts # Exports for providers
│
├── typography/
│
└── utils/
  └── index.ts

---

## 🧱 Chakra Theme Setup

- Chakra `ThemeProvider` is configured in `providers/theme-provider/`.
- The ChakraProvider and color mode handling are split into reusable modules under `providers/`.
- Component styling is enhanced using Chakra's `recipe` system (`button.recipe.ts`).

---

## 📚 Storybook Integration

Storybook is used for isolated component development. The `Button` component includes a demo story in `button.stories.tsx` to demonstrate how to structure and test UI components.

### Run Storybook

```bash
npm run storybook
