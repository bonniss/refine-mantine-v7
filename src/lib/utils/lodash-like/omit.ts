// @ts-nocheck
function omit(obj, fieldList: (keyof typeof obj)[]) {
  const result = {};
  for (const key in obj) {
    if (!fieldList.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

export default omit;
