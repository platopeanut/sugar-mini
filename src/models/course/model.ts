import SugarModel from "../../core/SugarModel";
import sugarUser, {UserType} from "../../core/SugarUser";
import {LessonItem, TimeListItem} from "./types";
import {getCourses, getStartDate, getTimeList} from "./network";
import {sugarGetStorageSync, sugarSetStorageSync} from "../../core/storage";
import {object2UserMap, userMap2object} from "../../utils/util";
import {parseDate} from "../../utils/datetime";

class CourseModel extends SugarModel {
  private _startDate: Map<UserType, Date>;
  private _course: Map<UserType, LessonItem[]>;
  private _timeList: Map<UserType, TimeListItem[]>;
  public getStartDate(user: UserType) {
    if (!this._startDate.has(user)) {
      console.error("No Such User: ", user);
      return new Date();
    }
    return this._startDate.get(user)!;
  }
  public getCourse(user: UserType) {
    if (!this._course.has(user)) {
      console.error("No Such User: ", user);
      return [];
    }
    return this._course.get(user)!;
  }
  public getTimeList(user: UserType) {
    if (!this._timeList.has(user)) {
      console.error("No Such User: ", user);
      return [];
    }
    return this._timeList.get(user)!;
  }
  constructor() { super(); this.load(); }
  public async update() {
    const users = sugarUser.getAll();
    const startDatesStr = await Promise.all(users.map(it => getStartDate(it)));
    const timeLists = await Promise.all(users.map(it => getTimeList(it)));
    const courses = await Promise.all(users.map(it => getCourses(it)));
    const data = new Map<UserType, {
      startDateStr: string,
      timeList: TimeListItem[],
      course: LessonItem[]
    }>();
    for (let i = 0; i < users.length; i++) {
      data.set(users[i], {
        startDateStr: startDatesStr[i],
        timeList: timeLists[i],
        course: courses[i]
      });
    }
    sugarSetStorageSync("Course", userMap2object(data));
    this.load();
  }
  private load() {
    const data = object2UserMap<{
      startDateStr: string,
      timeList: TimeListItem[],
      course: LessonItem[]
    }>(sugarGetStorageSync("Course"));
    this._startDate = new Map<UserType, Date>();
    this._timeList = new Map<UserType, TimeListItem[]>();
    this._course = new Map<UserType, LessonItem[]>();
    data.forEach((value, user) => {
      this._startDate.set(user, parseDate(value.startDateStr));
      this._timeList.set(user, value.timeList);
      this._course.set(user, value.course);
    });
  }
}

export default new CourseModel();
