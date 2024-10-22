const testUrl = (inp: string): boolean => {
  try {
    // eslint-disable-next-line no-new
    new URL(inp)
    return true
  } catch {
    return false
  }
}

export default testUrl
