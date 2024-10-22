// @ts-nocheck
function uniqBy(array, keyFn: (x: any) => string | number) {
  const seen = new Set()
  return array.filter(item => {
    const key = keyFn(item)
    if (seen.has(key)) {
      return false
    }
    seen.add(key)
    return true
  })
}

export default uniqBy
