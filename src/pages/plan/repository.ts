import {calcSecondsBetween, parseDate} from "../../utils/datetime";

export type ExamItem = {
  startDate: Date
  endDate: Date
  courseName: string
  place: string
}

const rawData: string[][] = [
  ["中国自然地理", "成龙校区第一教学楼1-B403", "2023-02-15", "16:20-18:20"],
  ["旅游地理学", "成龙校区第一教学楼1-B404", "2023-02-17", "14:00-16:00"],
  ["中学地理教学设计", "成龙校区第一教学楼1-B404", "2023-02-20", "16:20-18:20"],
  ["概率论与数理统计", "成龙校区第一教学楼1-B401", "2023-02-21", "10:20-12:20"],
  ["世界自然地理", "成龙校区第一教学楼1-B403", "2023-02-21", "14:00-16:00"],
  ["地理学科教育研究", "成龙校区第一教学楼1-B403", "2023-02-22", "14:00-16:00"],
  ["中学地理课程标准与教材研究", "成龙校区第一教学楼1-B403", "2023-02-22", "16:20-18:20"],
  ["中学地理教学论", "成龙校区第一教学楼1-B403", "2023-02-23", "10:20-12:20"],
  ["全球环境变化", "成龙校区第一教学楼1-B414", "2023-02-23", "14:00-16:00"],
  ["自然资源学地理", "成龙校区第一教学楼1-B404", "2023-02-23", "16:20-18:20"],
]
const allExamData: ExamItem[] = rawData.map(it => {
  const period = it[3].split('-')
  return {
    startDate: parseDate(it[2], period[0]),
    endDate: parseDate(it[2], period[1]),
    courseName: it[0],
    place: it[1]
  }
})

export function getWillExamData(currDate: Date = new Date()): ExamItem[] {
  return allExamData.filter(it => calcSecondsBetween(it.endDate, currDate) > 0)
}

export function getDoneExamData(currDate: Date = new Date()): ExamItem[] {
  return allExamData.filter(it => calcSecondsBetween(currDate, it.endDate) >= 0)
}
