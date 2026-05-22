import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import {
  LocaleContext,
  localeCopy,
  localeOptions,
  localeStorageKey,
} from './locale'
import type { Locale } from './locale'

function getInitialLocale(): Locale {
  const storedLocale = window.localStorage.getItem(localeStorageKey)

  if (storedLocale === 'en' || storedLocale === 'zh') {
    return storedLocale
  }

  return window.navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    window.localStorage.setItem(localeStorageKey, locale)
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      copy: localeCopy[locale],
      localeOptions,
    }),
    [locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
