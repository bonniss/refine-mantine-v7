import { useResource, useTranslate } from '@refinedev/core';

export const useTranslateResourceField = (resourceName?: string) => {
  const { resource } = useResource();
  const namespace = resourceName ?? resource?.name;
  const translate = useTranslate();
  return (field: string, ...args: any[]) => {
    const key = `entities.${namespace}.fields.${field}.label`;
    const term = translate(key, ...args);
    if (!term || term === key) {
      return field;
    }
    return term;
  };
};
