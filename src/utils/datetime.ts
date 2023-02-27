import {prefix} from "./util";

const DAY_OF_SECONDS = 60 * 60 * 24;

export function getDayOfWeek(date: Date = new Date()): number {
  let idx = date.getDay();
  if (idx === 0) idx = 7;
  return idx - 1;
}

// 获取date对应的month
export function getDateMonth(date: Date = new Date()): number {
  return date.getMonth() + 1;
}

// 截断日期：将日期中的时分秒去除
export function truncDate(date: Date): Date {
  return new Date(Math.trunc(date.getTime() / (DAY_OF_SECONDS * 1000)) * (DAY_OF_SECONDS * 1000));
}

// 计算两个日期之间相隔的天数
export function calcDaysBetween(date1: Date, date2: Date): number {
  return (date1.getTime() - date2.getTime()) / (DAY_OF_SECONDS * 1000);
}

export function calcTruncDaysBetween(date1: Date, date2: Date): number {
  return calcDaysBetween(truncDate(date1), truncDate(date2));
}

// 计算两个日期之间相隔的秒数
export function calcSecondsBetween(date1: Date, date2: Date): number {
  return (date1.getTime() - date2.getTime()) / 1000;
}

// 返回date加上seconds后的日期
export function dateAddSeconds(date: Date, seconds: number): Date {
  return new Date(date.getTime() + seconds * 1000);
}

// 返回date加上days后的日期
export function dateAddDays(date: Date, days: number): Date {
  return dateAddSeconds(date, days * DAY_OF_SECONDS);
}

// string -> date
export function parseDate(date: string, time: string = "00:00:00"): Date {
  return new Date(`${date} ${time} GMT+0800`)
}

// date -> string
export function stringifyDate(date: Date): string {
  return '' + date.getFullYear() + '-'
    + prefix(date.getMonth() + 1) + '-'
    + prefix(date.getDate()) + ' '
    + prefix(date.getHours()) + ':'
    + prefix(date.getMinutes())
}
