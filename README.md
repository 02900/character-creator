# Character Creator Application

A modern web application for character creation and management with an interactive dashboard. This project is built using [Next.js](https://nextjs.org/) with the App Router pattern.

## Project Overview

This Character Creator application provides a dashboard for managing character information, with features for data visualization, tabular data display, and interactive components.

### Technology Stack

- **Framework**: Next.js 15.3.1 with App Router
- **Language**: TypeScript
- **UI Libraries**:
  - React 19.0.0
  - Tailwind CSS 4.0
  - Radix UI components (@radix-ui/react-*)
  - DND Kit for drag-and-drop functionality
  - Recharts for data visualization
  - Lucide icons and Tabler icons
- **Data Management**:
  - JSON data sources
  - Tanstack React Table for data tables
- **Theme Management**: next-themes for dark/light mode support

### Project Structure

```
src/
├── app/               # Pages and routes using App Router
│   ├── dashboard/     # Dashboard page with character data
│   ├── characters/    # Character management pages
│   └── page.tsx       # Homepage
├── components/        # Reusable UI components
│   ├── ui/            # Base UI components (buttons, inputs, etc.)
│   └── shared/        # Shared composite components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and libraries
│   ├── i18n/          # Internationalization
│   ├── types.ts       # TypeScript type definitions
│   └── utils/         # Helper functions
└── modules/           # Feature modules
    └── character-creator/  # Character creator module
        ├── store/            # Centralized Zustand store
        │   └── useCharacterCreatorStore.ts  # Single source of truth for state
        │
        ├── hooks/            # Form-specific hooks
        │   ├── useStyleForm.ts       # Style form state access
        │   ├── useRaceClassForm.ts   # Race/class form state access
        │   ├── useCharacterForm.ts   # Character form state access
        │   ├── useWeaponsForm.ts     # Weapons form state access
        │   ├── useSpellsForm.ts      # Spells form state access
        │   ├── useBackgroundForm.ts  # Background form state access
        │   ├── useCompositionForm.ts # Composition form state access
        │   └── useCharacterPreview.ts # Character preview state access
        │
        ├── components/     # Module-specific components
        │   ├── CharacterPreview/  # Modular component structure
        │   │   ├── components/    # Sub-components
        │   │   └── index.tsx      # Main component file
        │   │
        │   └── forms/             # Form components
        │       ├── CharacterForm/ # Character form with modular structure
        │       │   ├── components/ # Form sections as components
        │       │   └── index.tsx   # Main form component
        │       │
        │       ├── CompositionForm/ # Similar modular structure
        │       ├── RaceClassForm/   # Similar modular structure
        │       ├── SpellsForm/      # Similar modular structure
        │       ├── StyleForm/       # Similar modular structure
        │       ├── WeaponsForm/     # Similar modular structure
        │       └── BackgroundForm/  # Similar modular structure
        │
        ├── data/           # Module-specific data and API
        ├── utils/          # Module-specific utilities
        └── CharacterCreator.tsx  # Main module component
```

### Component Organization

Components follow a modular pattern with clear separation of concerns:

- **Main Component** (`index.tsx`): Simple orchestration of sub-components
- **Components Folder**: Individual UI sections of the form or feature
- **Centralized Store**: A single Zustand store that manages the entire application state
- **Specialized Hooks**: Form-specific hooks that access only the relevant parts of the central store

## Features

- Interactive dashboard with data visualization
- Data tables for character information management
- Modern UI with support for dark/light themes
- Drag-and-drop functionality for organizing content
- Responsive design for desktop and mobile devices
- Centralized state management with Zustand
- Modular architecture with specialized state access hooks

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a custom font from Vercel.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [React Documentation](https://react.dev/) - learn about React 19 features
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/docs) - accessible UI primitive components

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
