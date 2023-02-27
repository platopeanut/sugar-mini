import sugarUser, {UserType} from "../../core/SugarUser";
import {sugarGetStorageSync, sugarSetStorageSync} from "../../core/storage";
import {calcSecondsBetween} from "../../utils/datetime";
import SugarModel from "../../core/SugarModel";
import {ExamItem, ExamStorageItem} from "./types";
import {getExam} from "./network";
import {object2UserMap, userMap2object} from "../../utils/util";


class PlanModel extends SugarModel {
  private allExamData: Map<UserType, ExamItem[]>;

  constructor() { super(); this.load(); }

  public async update() {
    const users = sugarUser.getAll();
    const exams = await Promise.all(users.map(it => getExam(it)));
    const examData = new Map<UserType, ExamStorageItem[]>();
    for (let i = 0; i < users.length; i++) {
      examData.set(users[i], exams[i]);
    }
    sugarSetStorageSync("Exam", userMap2object(examData));
    this.load();
  }

  private load() {
    const data = object2UserMap<ExamStorageItem[]>(sugarGetStorageSync("Exam"));
    this.allExamData = new Map<UserType, ExamItem[]>();
    data.forEach((value, key) => {
      this.allExamData.set(key, value.map(it => {
        return {
          startDate: new Date(it.startDateTimestamp),
          endDate: new Date(it.endDateStrTimestamp),
          courseName: it.courseName,
          place: it.place
        } as ExamItem;
      }));
    });
  }

  public getWillExamData(user: UserType, currDate: Date = new Date()): ExamItem[] {
    if (!this.allExamData.has(user)) return [];
    return this.allExamData.get(user)!.filter(it => calcSecondsBetween(it.endDate, currDate) > 0);
  }

  public getDoneExamData(user: UserType, currDate: Date = new Date()): ExamItem[] {
    if (!this.allExamData.has(user)) return [];
    return this.allExamData.get(user)!.filter(it => calcSecondsBetween(currDate, it.endDate) >= 0);
  }
}

export default new PlanModel();
