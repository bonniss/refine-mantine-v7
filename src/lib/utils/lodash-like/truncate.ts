import { ELLIPSIS, EMPTY_STRING } from '../constants/symbols'
import isString from '../typechecking/is-string'

// @ts-nocheck
const DEFAULT_LENGTH = 80
function truncate(
  str: string | undefined,
  opts:
    | number
    | {
        length?: number
        omission?: string
      } = DEFAULT_LENGTH
) {
  if (!str) return EMPTY_STRING
  if (!isString(str)) return str

  const _length = typeof opts === 'number' ? opts : opts?.length ?? DEFAULT_LENGTH
  const _omission = typeof opts === 'number' || !opts?.omission ? ELLIPSIS : opts.omission

  return str.length < _length ? str : str.slice(0, _length) + _omission
}

export default truncate
