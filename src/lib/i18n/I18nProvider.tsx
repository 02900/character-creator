"use client";

import React, { useState, useMemo, useCallback } from 'react';
import { I18nContext, Locale, getNestedValue } from './index';
import { loadTranslations } from './utils';

const translations = loadTranslations();

interface I18nProviderProps {
  initialLocale?: Locale;
  children: React.ReactNode;
}

export function I18nProvider({ initialLocale = 'en', children }: I18nProviderProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const t = useCallback((key: string, params?: Record<string, string>) => {
    return getNestedValue(translations[locale], key, params);
  }, [locale]);

  const changeLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
  }, []);

  const contextValue = useMemo(() => ({
    locale,
    t,
    changeLocale,
  }), [locale, t, changeLocale]);

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
}
