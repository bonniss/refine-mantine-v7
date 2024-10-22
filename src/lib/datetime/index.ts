// With typescript, read this:
// https://github.com/iamkun/dayjs/issues/1367#issuecomment-779394889
// HACK: `dayjs` đã có sẵn trong antd@5
import type { ConfigType as DayjsInput, ManipulateType } from 'dayjs';
import dayjs, { Dayjs, isDayjs } from 'dayjs';

import 'dayjs/locale/vi';
import 'dayjs/locale/en';

import customParseFormat from 'dayjs/plugin/customParseFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { EMPTY_STRING } from '../utils/constants/symbols';

export { DayjsInput };

dayjs.locale('vi');

/// DAYJS CONFIGURATION
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);

const localTimeZone = 'Asia/Ho_Chi_Minh';

export const setDayjsLocale = (locale: string) => {
  dayjs.locale(locale);
};

export const DFM = {
  LOCALE_VN_HYPHEN: 'DD-MM-YYYY',
  LOCALE_VN_SLASH: 'DD/MM/YYYY',
  LOCALE_VN_YY_HYPHEN: 'DD-MM-YY',
  YYYYMMDD_HYPHEN: 'YYYY-MM-DD',
  YYYYMMDD_NOSPACE: 'YYYYMMDD',
  DDMMMMYYYY_SPACE: 'DD MMMM YYYY',
};

export const TFM = {
  HM24: 'HH:mm',
  HMS24: 'HH:mm:ss',
};

export const DTFM = {
  ISO_UTC_TO_SECONDS: `${DFM.YYYYMMDD_HYPHEN}T${TFM.HMS24}[Z]`,
  DATE_YYYYMMDD_HYPHEN__HMS24: `${DFM.YYYYMMDD_HYPHEN} ${TFM.HMS24}`,
  DATE_VN_HYPHEN__HM24: `${DFM.LOCALE_VN_HYPHEN} ${TFM.HM24}`,
  DATE_VN_HYPHEN__HMS24: `${DFM.LOCALE_VN_HYPHEN} ${TFM.HMS24}`,
  DATE_VN_YY_HYPHEN__HM24: `${DFM.LOCALE_VN_YY_HYPHEN} ${TFM.HM24}`,
  DATE_VN_YY_HYPHEN__HMS24: `${DFM.LOCALE_VN_YY_HYPHEN} ${TFM.HMS24}`,
  HM24__DATE_VN_HYPHEN: `${TFM.HM24} ${DFM.LOCALE_VN_HYPHEN}`,
  HMS24__DATE_VN_HYPHEN: `${TFM.HMS24} ${DFM.LOCALE_VN_HYPHEN}`,
  HM24__DATE_VN_SLASH: `${TFM.HM24} ${DFM.LOCALE_VN_SLASH}`,
  HMS24__DATE_VN_SLASH: `${TFM.HMS24} ${DFM.LOCALE_VN_SLASH}`,
};

export const isValid = (date: DayjsInput) =>
  isDayjs(date) ? date.isValid() : false;
export const newDayjs = (
  date: DayjsInput,
  formatStr: string | null = null,
): Dayjs | null => {
  const obj = formatStr ? dayjs(date, formatStr) : dayjs(date);
  return obj.isValid() ? obj : null;
};

export const toDate = (date: DayjsInput) => newDayjs(date)?.toDate();

/**
 * Keep date as-is and format
 * @param date
 * @param fmTarget
 * @param fmSrc
 * @returns
 */
export const formatDateTime = (
  date: DayjsInput,
  fmTarget: string | null = null,
  fmSrc: string | null = null,
): string => {
  const obj = fmSrc ? newDayjs(date, fmSrc) : newDayjs(date);
  if (obj) {
    return obj.format(fmTarget ?? DFM.LOCALE_VN_HYPHEN);
  }
  return EMPTY_STRING;
};

/**
 * Assume input `date` is local datetime, then convert to UTC time
 * Example:
 * - Input: '2024-04-03 07:15:22' (ngầm hiểu là giờ Vietnam (+7))
 * - Output: '2024-04-03 00:15:22'
 * @param date UTC date
 * @param fmTarget
 * @param fmSrc
 * @returns
 */
export const formatLocalDateTimeToUtc = (
  date: DayjsInput,
  fmTarget: string | null = null,
  fmSrc: string | null = null,
): string => {
  const obj = fmSrc ? newDayjs(date, fmSrc) : newDayjs(date);
  if (obj) {
    return obj.utc().format(fmTarget ?? DFM.LOCALE_VN_HYPHEN);
  }
  return EMPTY_STRING;
};

/**
 * Assume input `date` is UTC time, then convert to local time and format
 * @param date UTC date
 * @param fmTarget
 * @param fmSrc
 * @returns
 */
export const formatUtcToLocalDateTime = (
  date: DayjsInput,
  fmTarget: string | null = null,
  fmSrc: string | null = null,
): string => {
  const obj = fmSrc ? newDayjs(date, fmSrc) : newDayjs(date);
  if (obj) {
    return (obj as Dayjs)
      .utc(true)
      .tz(localTimeZone)
      .format(fmTarget ?? DFM.LOCALE_VN_HYPHEN);
  }
  return EMPTY_STRING;
};

export const fromNow = (date: DayjsInput) => {
  const obj = newDayjs(date);
  return (isValid(obj) && obj?.fromNow()) || null;
};

export const isEqualsDate = (date1: DayjsInput, date2: DayjsInput) => {
  const inst1 = newDayjs(date1);
  const inst2 = newDayjs(date2);

  if (isValid(inst1) && isValid(inst2)) {
    return formatDateTime(inst1) === formatDateTime(inst2);
  }
  return false;
};

const addGenerator =
  (unit: ManipulateType) => (date: DayjsInput, offset: number) => {
    const inst = newDayjs(date);
    return (inst && isValid(inst) && inst.add(offset, unit)) || null;
  };

export const addDay = addGenerator('day');
export const addWeek = addGenerator('week');
export const addMonth = addGenerator('month');
export const addYear = addGenerator('year');

export const diffDates = (date1: DayjsInput, date2: DayjsInput, unit: ManipulateType) => {
  const inst1 = newDayjs(date1);
  const inst2 = newDayjs(date2);

  if (isValid(inst1) && isValid(inst2)) {
    return inst1?.diff(inst2, unit);
  }

  return null;
};

export const isToday = (date: DayjsInput) => {
  const inst = newDayjs(date);
  return isEqualsDate(inst, new Date());
};

export const isYesterday = (date: DayjsInput) => {
  const inst = newDayjs(date);
  return isEqualsDate(inst, addDay(new Date(), -1));
};

export const humanizeMillisecsDuration = (ms: number) => {
  const times: Record<string, number> = {
    year: 31557600000,
    month: 2629746000,
    day: 86400000,
    hour: 3600000,
    minute: 60000,
    second: 1000,
  };
  let timeString = '';
  let plural = '';
  for (const key in times) {
    if (Math.floor(ms / times[key]) > 0) {
      plural = Math.floor(ms / times[key]) > 1 ? 's' : '';
      timeString +=
        `${Math.floor(ms / times[key]).toString()
        } ${key.toString()
        }${plural
        } `;
      ms -= times[key] * Math.floor(ms / times[key]);
    }
  }
  return timeString;
};
