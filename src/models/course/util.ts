import {COLORS} from "../../core/theme";
import {UserType} from "../../core/SugarUser";
import {calcDaysBetween, dateAddDays} from "../../utils/datetime";
import {LessonItem, LessonViewItem, TimeListItem} from "./types";
import courseModel from "../../models/course/model";
import {prefix} from "../../utils/util";

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

export function parseDayOfWeek(dayOfWeek: string): number {
  return "一二三四五六日".split("").indexOf(dayOfWeek)
}

export function parseDayPeriod(dayPeriod: string): [number, number] {
  const items = dayPeriod.split("-")
  if (items.length === 1) return [parseInt(items[0]), parseInt(items[0])]
  return [parseInt(items[0]), parseInt(items[1])]
}

export function parseWeekPeriod(weekPeriod: string): number[] {
  let flag = 0;
  if (weekPeriod[0] === '*') flag ++;
  if (weekPeriod[1] === '*') flag ++;
  const periods = weekPeriod.slice(flag).split(',');
  const nums : number[] = [];
  for (const period of periods) {
    let [start, end] = period.split('-');
    end = end || start;
    for (let i = parseInt(start); i <= parseInt(end); i++) {
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

function getLessonItems(user: UserType, week: number) {
  return courseModel.getCourse(user).filter(it =>
    parseWeekPeriod(it.weekPeriod).indexOf(week) !== -1
  );
}

export function getLessonViewItems(user: UserType, week: number): LessonViewItem[] {
  const colorDict = new Map<string, string>();
  let i = 0;
  courseModel.getCourse(user).forEach(it => {
    if (!colorDict.has(it.lessonName)) {
      colorDict.set(it.lessonName, COLORS[i])
      i = (i + 1) % COLORS.length;
    }
  })
  return convertToLessonViewItems(getLessonItems(user, week), colorDict)
}

export function getDayPeriodStr(dayPeriod: string, timeList: TimeListItem[]): string {
  const [startIdx, endIdx] = parseDayPeriod(dayPeriod);
  return prefix(timeList[startIdx - 1].startHour) + ':'
       + prefix(timeList[startIdx - 1].startMinute) + ' - '
       + prefix(timeList[endIdx - 1].finishHour) + ':'
       + prefix(timeList[endIdx - 1].finishMinute);
}
