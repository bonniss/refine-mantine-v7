import resources from '@/lib/refine/resources';
import { I18nProvider } from '@refinedev/core';

export const useLocaleResources = (translate: I18nProvider['translate']) => {
  if (!translate) return resources;
  const translated = resources.map(({ meta, ...attrs }) => ({
    ...attrs,
    meta: {
      ...meta,
      label: translate?.(`entities.${attrs.name}.label`),
    },
  }));
  return translated;
};
