import {sugarRequest} from "../../core/network";
import {LessonItem, TimeListItem} from "./types";
import {UserType} from "../../core/SugarUser";

export async function getCourses(user: UserType) {
  return await sugarRequest<LessonItem[]>("/course/" + user, "GET");
}

export async function getTimeList(user: UserType) {
  return await sugarRequest<TimeListItem[]>("/course/timeList/" + user, "GET");
}

export async function getStartDate(user: UserType) {
  return await sugarRequest<string>("/course/startDate/" + user, "GET");
}
