import { useTranslate } from '@refinedev/core';
import isNullOrUndefined from '@/lib/utils/typechecking/is-null-or-undefined';

export const useTranslateEnum = () => {
  const translate = useTranslate();
  return (_enum: string, value?: string) => {
    const key = `enums.${_enum}${isNullOrUndefined(value) ? '.label' : `.values.${value}.label`}`;
    const term = translate(key);
    if (!term || term === key) {
      return value || _enum;
    }
    return term;
  };
};
