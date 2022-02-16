import * as DateFns from 'date-fns';
import {enUS, ru} from 'date-fns/locale';

export default class DateFormat {
  static LOCALE = process.env.NEXT_PUBLIC_LOCALE === 'en' ? enUS : ru;
  static FORMATS = {
    default: 'dd.MM.yyyy',
    fullMonth: 'dd MMMM yyyy',
  };

  static today = (): DateFormat => {
    const dateFormat = new DateFormat();
    dateFormat.date = new Date();
    return dateFormat;
  };

  static fromISO = (iso: string): DateFormat => {
    const dateFormat = new DateFormat();
    dateFormat.fromISO(iso);
    return dateFormat;
  };

  static fromDate = (date: Date): DateFormat => {
    const dateFormat = new DateFormat();
    dateFormat.fromDate(date);
    return dateFormat;
  };

  static min = (dateFormats: Array<DateFormat | undefined>): DateFormat | undefined => {
    let min: DateFormat | undefined;
    dateFormats.forEach(dateFormat => {
      if (dateFormat?.date === undefined) return;
      if (min === undefined || (min.date !== undefined && dateFormat.date < min.date))
        min = dateFormat;
    });
    return min;
  };

  static max = (dateFormats: Array<DateFormat | undefined>): DateFormat | undefined => {
    let max: DateFormat | undefined;
    dateFormats.forEach(dateFormat => {
      if (dateFormat?.date === undefined) return;
      if (max === undefined || (max.date !== undefined && dateFormat.date > max.date))
        max = dateFormat;
    });
    return max;
  };

  static differenceInDays = (
    a: DateFormat | undefined,
    b: DateFormat | undefined
  ): number | undefined => {
    if (!a?.date || !b?.date) return;
    return DateFns.differenceInDays(a.date, b.date);
  };

  date: Date | undefined;

  fromISO = (iso: string): void => {
    this.date = DateFns.parseISO(iso);
  };

  fromDate = (date: Date): void => {
    this.date = date;
  };

  isBefore = (dateFormat: DateFormat | undefined): boolean | undefined => {
    if (dateFormat?.date === undefined) return;
    if (this.date === undefined) return;
    return DateFns.isBefore(this.date, dateFormat.date);
  };

  isAfter = (dateFormat: DateFormat | undefined): boolean | undefined => {
    if (dateFormat?.date === undefined) return;
    if (this.date === undefined) return;
    return DateFns.isAfter(this.date, dateFormat.date);
  };

  isPast = (): boolean | undefined => {
    if (this.date === undefined) return;
    return DateFns.isPast(this.date);
  };

  isFuture = (): boolean | undefined => {
    if (this.date === undefined) return;
    return DateFns.isFuture(this.date);
  };

  toString = (): string | undefined => {
    return this.default;
  };

  addDays = (days: number): DateFormat | undefined => {
    if (this.date === undefined) return;
    const dateFormat = new DateFormat();
    dateFormat.date = DateFns.addDays(this.date, days);
    return dateFormat;
  };

  addMonths = (months: number): DateFormat | undefined => {
    if (this.date === undefined) return;
    const dateFormat = new DateFormat();
    dateFormat.date = DateFns.addMonths(this.date, months);
    return dateFormat;
  };

  isSameMonth = (dateFormat: DateFormat | undefined): boolean | undefined => {
    if (this.date === undefined || dateFormat?.date === undefined) return;
    return DateFns.isSameMonth(this.date, dateFormat.date);
  };

  isSameYear = (dateFormat: DateFormat | undefined): boolean | undefined => {
    if (this.date === undefined || dateFormat?.date === undefined) return;
    return DateFns.isSameYear(this.date, dateFormat.date);
  };

  startOfMonth = (): DateFormat | undefined => {
    if (this.date === undefined) return;
    const dateFormat = new DateFormat();
    dateFormat.date = DateFns.startOfMonth(this.date);
    return dateFormat;
  };

  endOfMonth = (): DateFormat | undefined => {
    if (this.date === undefined) return;
    const dateFormat = new DateFormat();
    dateFormat.date = DateFns.endOfMonth(this.date);
    return dateFormat;
  };

  getDaysInMonth = (): number | undefined => {
    if (this.date === undefined) return;
    return DateFns.getDaysInMonth(this.date);
  };

  getDaysInYear = (): number | undefined => {
    if (this.date === undefined) return;
    return DateFns.getDaysInYear(this.date);
  };

  get default(): string | undefined {
    return this.format(DateFormat.FORMATS.default);
  }

  format = (format = DateFormat.FORMATS.default): string | undefined => {
    if (!this.date) return;
    return DateFns.format(this.date, format, {locale: DateFormat.LOCALE});
  };
}
