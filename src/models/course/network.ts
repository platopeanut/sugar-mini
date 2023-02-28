import {sugarRequest} from "../../core/network";
import {LessonItem, TimeListItem} from "./types";
import {UserType} from "../../core/SugarUser";

export async function getCourses(user: UserType) {
  const rawItems = await sugarRequest<LessonItem[]>("/course/" + user, "GET");
  return rawItems.filter(it => it.dayPeriod !== null);
}

export async function getTimeList(user: UserType) {
  return await sugarRequest<TimeListItem[]>("/course/timeList/" + user, "GET");
}

export async function getStartDate(user: UserType) {
  return await sugarRequest<string>("/course/startDate/" + user, "GET");
}
