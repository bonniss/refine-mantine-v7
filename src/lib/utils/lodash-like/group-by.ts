/* eslint-disable no-return-assign */
/* eslint-disable no-sequences */
// @ts-nocheck
const groupBy = (arr, fn) =>
  arr.reduce((r, v, i, a, k = fn(v)) => ((r[k] || (r[k] = [])).push(v), r), {})
export default groupBy
