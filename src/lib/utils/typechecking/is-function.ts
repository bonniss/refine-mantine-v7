function isFunction(func: any): func is ((...args: any[]) => any) {
  return typeof func === 'function'
}

export default isFunction
