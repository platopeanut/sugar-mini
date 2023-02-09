export interface LessonItem {
  lessonName: string
  teacherName: string
  classroom: string
  weekPeriod: string
  week: string
  dayPeriod: string
}

export interface LessonViewItem extends LessonItem {
  column: number
  startRow: number
  endRow: number
  color: string
}

export interface LessonDetailItem extends LessonItem {
  timePeriod: string
}
