import isEmpty from './is-empty'
import isPlainObject from './is-plain-object'

export default (obj: any) => {
  return isPlainObject(obj) && isEmpty(obj)
}
