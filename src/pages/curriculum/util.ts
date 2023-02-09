import {LessonItem, LessonViewItem} from "./type";
import {COLORS} from "../../core/theme";
import {UserType} from "../../core/user";
import {getAllLessonItems, getLessonItems} from "./repository";

const DAY_OF_SECONDS = 60 * 60 * 24;

// 获取date对应的month
export function getDateMonth(date: Date = new Date()): number {
  return date.getMonth() + 1;
}

// 获取date对应的header dates
export function getHeaderDates(date: Date = new Date()): number[] {
  let day = date.getDay();
  if (day === 0) day = 7;
  day --;
  const weekDates : number[] = [];
  for (let i = 0; i < 7; i++) {
    weekDates.push(dateAddDays(date, i - day).getDate());
  }
  return weekDates;
}

// 根据开学日期和当前日期计算当前是第几周
export function calcCurrWeek(startDate: Date, currDate: Date = new Date()) : number {
  return Math.ceil(calcDaysBetween(currDate, startDate) / 7);
}

// 计算两个日期之间相隔的天数
export function calcDaysBetween(date1: Date, date2: Date): number {
  return (date1.getTime() - date2.getTime()) / (DAY_OF_SECONDS * 1000);
}

// 返回date加上seconds后的日期
export function dateAddSeconds(date: Date, seconds: number): Date {
  return new Date(date.getTime() + seconds * 1000);
}

// 返回date加上days后的日期
export function dateAddDays(date: Date, days: number): Date {
  return dateAddSeconds(date, days * DAY_OF_SECONDS);
}

export function parseDayOfWeek(dayOfWeek: string): number {
  return "一二三四五六日".split("").indexOf(dayOfWeek)
}

export function parseDayPeriod(dayPeriod: string): [number, number] {
  const items = dayPeriod.split("-")
  return [parseInt(items[0]), parseInt(items[1])]
}

export function parseWeekPeriod(weekPeriod: string): number[] {
  let flag = 0;
  if (weekPeriod[0] === '*') flag ++;
  if (weekPeriod[1] === '*') flag ++;
  const periods = weekPeriod.slice(flag).split(',');
  const nums : number[] = [];
  for (const period of periods) {
    const [start, end] = period.split('-');
    for (let i = parseInt(start); i < parseInt(end); i++) {
      if (flag === 1 && i % 2 === 0) continue;
      if (flag === 2 && i % 2 === 1) continue;
      nums.push(i);
    }
  }
  return nums;
}

export function convertToLessonViewItems(lessonItems: LessonItem[], colorDict: Map<string, string>) : LessonViewItem[] {
  return lessonItems.map(it => {
    const viewItem = it as LessonViewItem
    viewItem.column = parseDayOfWeek(it.week) + 1;
    const periods = parseDayPeriod(it.dayPeriod);
    viewItem.startRow = periods[0];
    viewItem.endRow = periods[periods.length - 1];
    viewItem.color = colorDict.get(viewItem.lessonName)!;
    return viewItem
  })
}

export function getLessonViewItems(user: UserType, week: number): LessonViewItem[] {
  const colorDict = new Map<string, string>();
  let i = 0;
  getAllLessonItems(user).forEach(it => {
    if (!colorDict.has(it.lessonName)) {
      colorDict.set(it.lessonName, COLORS[i])
      i = (i + 1) % COLORS.length;
    }
  })
  return convertToLessonViewItems(getLessonItems(user, week), colorDict)
}
