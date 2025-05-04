import { createContext, useContext } from 'react';

export type Locale = 'en' | 'es';

export interface I18nContextType {
  locale: Locale;
  t: (key: string, params?: Record<string, string>) => string;
  changeLocale: (locale: Locale) => void;
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

// Helper function to get nested properties from objects using a dot path
export function getNestedValue(obj: Record<string, unknown>, path: string, params?: Record<string, string>): string {
  const keys = path.split('.');
  let value = keys.reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return path; // Return the key if translation not found
  }, obj);
  
  // Replace params if any
  if (typeof value === 'string' && params) {
    Object.entries(params).forEach(([key, val]) => {
      value = (value as string).replace(`{${key}}`, val);
    });
  }
  
  return typeof value === 'string' ? value : path;
}