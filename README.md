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
│   └── page.tsx       # Homepage
├── components/        # Reusable UI components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and libraries
└── modules/           # Feature modules
```

## Features

- Interactive dashboard with data visualization
- Data tables for character information management
- Modern UI with support for dark/light themes
- Drag-and-drop functionality for organizing content
- Responsive design for desktop and mobile devices

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
