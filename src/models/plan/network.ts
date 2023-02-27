import {UserType} from "../../core/SugarUser";
import {sugarRequest} from "../../core/network";
import {ExamStorageItem} from "./types";
import {parseDate} from "../../utils/datetime";

export async function getExam(user: UserType) {
  const rawData = await sugarRequest<{
    courseName: string
    place: string
    date: string
    period: string
  }[]>("/exam/" + user, "GET");
  return rawData.map(it => {
    const period = it.period.split('-')
    return {
      startDateTimestamp: parseDate(it.date, period[0]).getTime(),
      endDateStrTimestamp: parseDate(it.date, period[1]).getTime(),
      courseName: it.courseName,
      place: it.place
    } as ExamStorageItem;
  });
}
