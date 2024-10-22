function prettyPrintJson(str: string, spaces = 2) {
  try {
    return JSON.stringify(JSON.parse(str), null, spaces);
  } catch (error) {
    console.error(error);
  }

  return str;
}
export default prettyPrintJson;
