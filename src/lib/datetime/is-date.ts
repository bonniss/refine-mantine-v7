export default (date: unknown): date is Date =>
  Object.prototype.toString.call(date) === '[object Date]';
