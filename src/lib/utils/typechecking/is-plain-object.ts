/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
export default function isPlainObject(value): value is Record {
  if (typeof value !== 'object' || value === null) return false

  if (Object.prototype.toString.call(value) !== '[object Object]') return false

  const proto = Object.getPrototypeOf(value)
  if (proto === null) return true

  const Ctor =
    Object.prototype.hasOwnProperty.call(proto, 'constructor') &&
    proto.constructor
  return (
    typeof Ctor === 'function' &&
    Ctor instanceof Ctor &&
    Function.prototype.call(Ctor) === Function.prototype.call(value)
  )
}
