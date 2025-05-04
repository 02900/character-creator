# Internationalization (i18n) Guidelines

This document outlines the internationalization approach for the Character Creator application. Following these patterns consistently will ensure a maintainable translation system as the application grows.

## Directory Structure

The i18n system follows a component-specific approach where translations are organized to mirror the application's component structure:

```
src/lib/i18n/
├── I18nProvider.tsx    # Context provider for the i18n system
├── index.ts            # Core i18n utilities and hooks
├── utils.ts            # Translation loading utilities
└── locales/            # Translation files organized by locale
    ├── en/             # English translations
    │   └── modules/    # Mirrors the src/modules structure
    │       └── character-creator/
    │           ├── components/
    │           │   └── forms/
    │           │       ├── PageSizeForm.ts
    │           │       ├── StyleForm.ts
    │           │       └── ...
    │           └── data/
    │               ├── races.ts
    │               └── classes.ts
    └── es/             # Spanish translations (follows same structure)
```

## Translation Key Pattern

Translation keys follow a consistent pattern that mirrors the component path:

```
modules.[module-name].components.[component-type].[ComponentName].[key]
```

For example:
- `modules.character-creator.components.forms.PageSizeForm.title`
- `modules.character-creator.components.data.races.elf.name`

### Rules for Keys

1. Use dot notation to create a nested hierarchy
2. Match the file/folder structure when possible
3. Keep keys camelCase for properties
4. Use the exact component name for component-specific translations

## Component Implementation

Components should import and use the i18n hook:

```tsx
import { useI18n } from "@/lib/i18n";

export function MyComponent() {
  const { t } = useI18n();
  
  return (
    <div>
      <h1>{t('modules.character-creator.components.forms.MyComponent.title')}</h1>
      <p>{t('modules.character-creator.components.forms.MyComponent.description')}</p>
    </div>
  );
}
```

## Translation File Structure

Translation files should export objects with the same name as their component:

```typescript
// src/lib/i18n/locales/en/modules/character-creator/components/forms/PageSizeForm.ts
export const PageSizeForm = {
  title: 'Page Size',
  description: 'Select the size of the coloring book page',
};
```

## Dynamic Data

For data that has properties dynamically accessed by ID:

```typescript
// src/lib/i18n/locales/en/modules/character-creator/data/races.ts
export const races = {
  human: {
    name: "Humans",
    description: "Long-lived beings famous for their beauty."
  },
  elf: {
    name: "Elves",
    description: "Magical forest dwellers."
  }
};
```

Access this data using:

```typescript
t(`modules.character-creator.components.data.races.${id}.name`)
```

## Format Strings with Parameters

For strings with dynamic content, use placeholder syntax:

```typescript
// In translation file
greeting: "Hello, {name}!"

// In component
t('path.to.greeting', { name: 'User' })
```

## Adding New Translations

1. Create a new translation file in each locale directory, following the component path
2. Add the translation exports with the same object structure
3. Update `utils.ts` to import and include the new translations
4. Use the translations in your component with the `useI18n` hook

## Language Selection

The application includes a language selector component that allows users to switch between available languages. The selected language is managed through the I18nProvider context.

---

By following these guidelines consistently, we ensure that:

1. Translations are organized logically
2. Components have clear access to their specific translations
3. The system scales well as more components are added
4. Maintenance remains straightforward
