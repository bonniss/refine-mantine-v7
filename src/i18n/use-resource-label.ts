import { useResource, useTranslate } from '@refinedev/core';

export const useResourceLabel = (resourceName?: string) => {
  const { resource } = useResource();
  const namespace = resourceName ?? resource?.name;
  const translate = useTranslate();

  const key = `entities.${namespace}.label`;
  const term = translate(key);
  if (!term || term === key) {
    return namespace;
  }
  return term;
};
