import isPlainObject from '../typechecking/is-plain-object';

export default (str: string, obj: any = {}, placeholderPattern = '{{%s}}') => {
  let res = str;
  if (str && isPlainObject(obj)) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        res = res.replace(placeholderPattern.replace('%s', key), element);
      }
    }
  }
  return res;
};
