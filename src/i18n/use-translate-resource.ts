import { useTranslate } from '@refinedev/core';

export const useTranslateResource = () => {
  const translate = useTranslate();

  return (resourceName?: string) => {
    const key = `entities.${resourceName}.label`;
    const term = translate(key);
    if (!term || term === key) {
      return resourceName;
    }
    return term;
  };
};
