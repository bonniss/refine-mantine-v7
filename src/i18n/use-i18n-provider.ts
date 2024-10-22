import { useDidUpdate } from '@mantine/hooks';
import { I18nProvider } from '@refinedev/core';
import { useCallback, useState } from 'react';
import { SupportedLanguage, supportedLanguages } from '@/i18n/supported';

import enEntities from '@/i18n/lang/en/entities.json';
import enEnums from '@/i18n/lang/en/enums.json';

import { storage } from '@/lib/storage';
import { EMPTY_STRING } from '@/lib/utils/constants/symbols';
import getProperty from '@/lib/utils/dot-prop/get-property';
import replaceByKey from '@/lib/utils/template/replace-by-key';
import viEntities from '@/i18n/lang/vi/entities.json';
import viEnums from '@/i18n/lang/vi/enums.json';
import enRefine from './lang/en/refine.json';
import viRefine from './lang/vi/refine.json';
import { setDayjsLocale } from '@/lib/datetime';

const langs = {
  vi: {
    entities: { ...viEntities },
    enums: { ...viEnums },
    ...viRefine,
  },
  en: {
    entities: { ...enEntities },
    enums: { ...enEnums },
    ...enRefine,
  },
};

/**
 * Hook phụ trách dịch thuật trong app
 * @returns a Refine i18n provider
 */
const STORAGE_LANG_KEY = 'lang_key';
export const useI18nProvider = () => {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>(() => {
    const initialLocale = storage.get(STORAGE_LANG_KEY) ?? supportedLanguages[0];
    setDayjsLocale(initialLocale);
    return initialLocale;
  });

  const translate: I18nProvider['translate'] = (
    key: string,
    options?: any,
    defaultMessage?: string
  ) => {
    const dict = langs[currentLang];
    const msg = getProperty(dict, key);
    if (!msg) {
      return defaultMessage ?? EMPTY_STRING;
    }
    return replaceByKey(msg, options);
  };

  const changeLocale = (lang: SupportedLanguage) => {
    setCurrentLang(lang);
  };
  const getLocale = useCallback(() => currentLang, [currentLang]);

  useDidUpdate(() => {
    setDayjsLocale(currentLang);
    storage.set(STORAGE_LANG_KEY, currentLang);
  }, [currentLang]);

  return {
    i18nProvider: {
      translate,
      changeLocale,
      getLocale,
    } as I18nProvider,
  };
};
