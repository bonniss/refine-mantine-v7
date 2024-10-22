/**
 * Check if value is falsey or empty object or empty array
 * @param obj
 * @returns return `true` for empty array, empty object and falsey values
 */
const isEmpty = (obj: any) =>
  [Object, Array].includes((obj || {}).constructor) &&
  !Object.entries(obj || {}).length
export default isEmpty
