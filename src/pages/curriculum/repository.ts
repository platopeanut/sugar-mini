import {LessonItem, LessonViewItem} from "./type";
import {UserType} from "../../core/user";
import {parseWeekPeriod} from "./util";
import {parseDate} from "../../utils/datetime";

export const START_DATE: Date = parseDate("2023-02-20");

const LESSON_DATA : { "Li": LessonItem[], "Chen": LessonItem[] } = {
  "Li": [
    {
      "lessonName": "概率论与数理统计",
      "teacherName": "姜世中",
      "classroom": "1-B402",
      "weekPeriod": "1-15",
      "week": "一",
      "dayPeriod": "1-2"
    },
    {
      "lessonName": "中国自然地理",
      "teacherName": "王玉贵",
      "classroom": "1-B303",
      "weekPeriod": "**1-15",
      "week": "一",
      "dayPeriod": "3-4"
    },
    {
      "lessonName": "中国地理教学论",
      "teacherName": "徐留兴",
      "classroom": "1-B414",
      "weekPeriod": "1-17",
      "week": "一",
      "dayPeriod": "6-7"
    },
    {
      "lessonName": "地理学科教育研究",
      "teacherName": "宁龙梅",
      "classroom": "1-A214",
      "weekPeriod": "1-17",
      "week": "一",
      "dayPeriod": "8-9"
    },
    {
      "lessonName": "地理教学能力综合训练(微格)2",
      "teacherName": "周兴华",
      "classroom": "一实验楼东203(微格)",
      "weekPeriod": "2-17",
      "week": "一",
      "dayPeriod": "11-12"
    },
    {
      "lessonName": "中学地理课程标准与教材研究",
      "teacherName": "周兴华",
      "classroom": "1-A215",
      "weekPeriod": "1-17",
      "week": "二",
      "dayPeriod": "3-4"
    },
    {
      "lessonName": "班级管理概论",
      "teacherName": "邵艾群",
      "classroom": "1-A506",
      "weekPeriod": "**1-8",
      "week": "二",
      "dayPeriod": "6-7"
    },
    {
      "lessonName": "世界自然地理",
      "teacherName": "张洋",
      "classroom": "1-A203",
      "weekPeriod": "1-15",
      "week": "二",
      "dayPeriod": "8-9"
    },
    {
      "lessonName": "全球环境变化",
      "teacherName": "孙喆",
      "classroom": "C101",
      "weekPeriod": "1-15",
      "week": "二",
      "dayPeriod": "11-13"
    },
    {
      "lessonName": "中学地理教学设计",
      "teacherName": "鲜洁",
      "classroom": "学生活动中心601",
      "weekPeriod": "1-17",
      "week": "三",
      "dayPeriod": "3-4"
    },
    {
      "lessonName": "自然资源学原理",
      "teacherName": "苑全治",
      "classroom": "1-A117",
      "weekPeriod": "1-17",
      "week": "三",
      "dayPeriod": "6-7"
    },
    {
      "lessonName": "形势与政策5",
      "teacherName": "赵奕熹",
      "classroom": "1-B214",
      "weekPeriod": "12-13",
      "week": "三",
      "dayPeriod": "8-9"
    },
    {
      "lessonName": "旅游地理学",
      "teacherName": "何田",
      "classroom": "1-A419",
      "weekPeriod": "1-15",
      "week": "四",
      "dayPeriod": "1-2"
    },
    {
      "lessonName": "中国自然地理",
      "teacherName": "王玉贵",
      "classroom": "1-A404",
      "weekPeriod": "1-15",
      "week": "四",
      "dayPeriod": "3-4"
    },
    {
      "lessonName": "形势与政策5",
      "teacherName": "赵奕熹",
      "classroom": "1-C204",
      "weekPeriod": "12-13",
      "week": "四",
      "dayPeriod": "6-7"
    },
    {
      "lessonName": "大学生职业发展与就业指导",
      "teacherName": "赵奕熹",
      "classroom": "1-A215",
      "weekPeriod": "3-10",
      "week": "四",
      "dayPeriod": "8-9"
    },
    {
      "lessonName": "概率论与数理统计",
      "teacherName": "姜世中",
      "classroom": "1-B313",
      "weekPeriod": "*1-15",
      "week": "五",
      "dayPeriod": "3-4"
    },
    {
      "lessonName": "旅游地理学",
      "teacherName": "何田",
      "classroom": "1-B313",
      "weekPeriod": "**1-15",
      "week": "五",
      "dayPeriod": "3-4"
    },
    {
      "lessonName": "世界自然地理",
      "teacherName": "张洋",
      "classroom": "1-A212",
      "weekPeriod": "**1-15",
      "week": "五",
      "dayPeriod": "6-7"
    }
  ],
  "Chen": [
    {
      "lessonName": "形势与政策6",
      "teacherName": "罗秀英-[主讲];",
      "classroom": "DYC410",
      "weekPeriod": "14-17",
      "week": "一",
      "dayPeriod": "8-9"
    },
    {
    "lessonName": "机器学习",
    "teacherName": "王悦阳-[主讲];",
    "classroom": "D1145",
    "weekPeriod": "8-17",
    "week": "五",
    "dayPeriod": "3-4"
    },
    {
      "lessonName": "机器学习",
      "teacherName": "王悦阳-[主讲];",
      "classroom": "D1145",
      "weekPeriod": "7-16",
      "week": "二",
      "dayPeriod": "6-7"
    },
    {
      "lessonName": "机器学习",
      "teacherName": "王悦阳-[主讲];",
      "classroom": "软件工程实验室-DS1501",
      "weekPeriod": "17-17",
      "week": "二",
      "dayPeriod": "6-9"
    },
    {
      "lessonName": "机器学习",
      "teacherName": "王悦阳-[主讲];",
      "classroom": "软件工程实验室-DS1501",
      "weekPeriod": "10-10,13-13,16-16",
      "week": "五",
      "dayPeriod": "10-13"
    },
    {
      "lessonName": "软件项目管理",
      "teacherName": "熊敏-[主讲];",
      "classroom": "D1213",
      "weekPeriod": "1-8",
      "week": "二",
      "dayPeriod": "8-9"
    },
    {
      "lessonName": "软件项目管理",
      "teacherName": "熊敏-[主讲];",
      "classroom": "D1226",
      "weekPeriod": "1-6,8-9",
      "week": "五",
      "dayPeriod": "8-9"
    },
    {
      "lessonName": "数字图像处理",
      "teacherName": "陈远-[主讲];",
      "classroom": "D1244",
      "weekPeriod": "9-15",
      "week": "三",
      "dayPeriod": "1-2"
    },
    {
      "lessonName": "数字图像处理",
      "teacherName": "陈远-[主讲];",
      "classroom": "D1244",
      "weekPeriod": "9-10,12-16",
      "week": "一",
      "dayPeriod": "1-2"
    },
    {
      "lessonName": "数字图像处理",
      "teacherName": "陈远-[主讲];",
      "classroom": "",
      "weekPeriod": "13-14",
      "week": "",
      "dayPeriod": ""
    },
    {
      "lessonName": "数字图像处理",
      "teacherName": "陈远-[主讲];",
      "classroom": "数字媒体实验室-DS1503",
      "weekPeriod": "15-15",
      "week": "一",
      "dayPeriod": "10-13"
    },
    {
      "lessonName": "数字图像处理",
      "teacherName": "陈远-[主讲];",
      "classroom": "数字媒体实验室-DS1503",
      "weekPeriod": "12-12",
      "week": "六",
      "dayPeriod": "1-4"
    },
    {
      "lessonName": "软件架构与设计模式",
      "teacherName": "蔡海尼-[主讲];",
      "classroom": "D1145",
      "weekPeriod": "9-10,12-16",
      "week": "一",
      "dayPeriod": "6-7"
    },
    {
      "lessonName": "软件架构与设计模式",
      "teacherName": "蔡海尼-[主讲];",
      "classroom": "D1145",
      "weekPeriod": "9-15",
      "week": "三",
      "dayPeriod": "6-7"
    },
    {
      "lessonName": "软件架构与设计模式",
      "teacherName": "蔡海尼-[主讲];",
      "classroom": "软件工程实验室-DS1501",
      "weekPeriod": "10-10,12-13",
      "week": "一",
      "dayPeriod": "8-9"
    },
    {
      "lessonName": "软件架构与设计模式",
      "teacherName": "蔡海尼-[主讲];",
      "classroom": "软件工程实验室-DS1501",
      "weekPeriod": "14-14",
      "week": "四",
      "dayPeriod": "8-9"
    },
    {
      "lessonName": "软件架构与设计模式",
      "teacherName": "蔡海尼-[主讲];",
      "classroom": "",
      "weekPeriod": "12-15",
      "week": "",
      "dayPeriod": ""
    },
    {
      "lessonName": "软件测试",
      "teacherName": "雷晏-[主讲];",
      "classroom": "D1345",
      "weekPeriod": "1-6",
      "week": "三",
      "dayPeriod": "3-4"
    },
    {
      "lessonName": "软件测试",
      "teacherName": "雷晏-[主讲];",
      "classroom": "D1345",
      "weekPeriod": "1-6",
      "week": "一",
      "dayPeriod": "3-4"
    },
    {
      "lessonName": "软件测试",
      "teacherName": "雷晏-[主讲];",
      "classroom": "软件工程实验室-DS1501",
      "weekPeriod": "3-6",
      "week": "五",
      "dayPeriod": "10-13"
    },
    {
      "lessonName": "软件工程实训",
      "teacherName": "杨正益-[主讲];",
      "classroom": "",
      "weekPeriod": "19-21",
      "week": "",
      "dayPeriod": ""
    }
  ]
}

export function getAllLessonItems(user: UserType) : LessonViewItem[] {
  return LESSON_DATA[user];
}

export function getLessonItems(user: UserType, week: number) : LessonViewItem[] {
  return LESSON_DATA[user].filter(it =>
    parseWeekPeriod(it.weekPeriod).indexOf(week) !== -1
  );
}

