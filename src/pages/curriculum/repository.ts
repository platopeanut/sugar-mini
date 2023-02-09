import {LessonItem, LessonViewItem} from "./type";
import {UserType} from "../../core/user";
import {parseWeekPeriod} from "./util";

export const START_DATE: Date = new Date("2022-08-31 00:00:00 GMT+0800");

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
      "lessonName": "形势与政策5",
      "teacherName": "赵灿林-[主讲];",
      "classroom": "D1125",
      "weekPeriod": "16-17",
      "week": "一",
      "dayPeriod": "6-7"
    },
    {
      "lessonName": "形势与政策5",
      "teacherName": "门秀红-[主讲];",
      "classroom": "D1125",
      "weekPeriod": "14-15",
      "week": "一",
      "dayPeriod": "6-7"
    },
    {
      "lessonName": "人工智能导论",
      "teacherName": "杨梦宁-[主讲];",
      "classroom": "D1347",
      "weekPeriod": "8-17",
      "week": "三",
      "dayPeriod": "1-2"
    },
    {
      "lessonName": "人工智能导论",
      "teacherName": "杨梦宁-[主讲];",
      "classroom": "D1347",
      "weekPeriod": "8-17",
      "week": "一",
      "dayPeriod": "8-9"
    },
    {
      "lessonName": "人工智能导论",
      "teacherName": "杨梦宁-[主讲];",
      "classroom": "软件工程实验室-DS1501",
      "weekPeriod": "12-15",
      "week": "四",
      "dayPeriod": "1-4"
    },
    {
      "lessonName": "软件需求分析",
      "teacherName": "张毅-[主讲];",
      "classroom": "D1243",
      "weekPeriod": "1-5,7-9",
      "week": "二",
      "dayPeriod": "1-2"
    },
    {
      "lessonName": "软件需求分析",
      "teacherName": "张毅-[主讲];",
      "classroom": "D1243",
      "weekPeriod": "1-5,7-9",
      "week": "四",
      "dayPeriod": "1-2"
    },
    {
      "lessonName": "信息安全导论",
      "teacherName": "胡海波-[主讲];",
      "classroom": "D1144",
      "weekPeriod": "1-5,7-9",
      "week": "二",
      "dayPeriod": "6-7"
    },
    {
      "lessonName": "信息安全导论",
      "teacherName": "胡海波-[主讲];",
      "classroom": "D1143",
      "weekPeriod": "1-5,7-9",
      "week": "五",
      "dayPeriod": "3-4"
    },
    {
      "lessonName": "计算机图形学",
      "teacherName": "杨梦宁-[主讲];",
      "classroom": "D1138",
      "weekPeriod": "1-5,7-11",
      "week": "三",
      "dayPeriod": "6-7"
    },
    {
      "lessonName": "计算机图形学",
      "teacherName": "杨梦宁-[主讲];",
      "classroom": "D1239",
      "weekPeriod": "1-2,4-5,7-12",
      "week": "一",
      "dayPeriod": "6-7"
    },
    {
      "lessonName": "计算机图形学",
      "teacherName": "杨梦宁-[主讲];",
      "classroom": "软件工程实验室-DS1502",
      "weekPeriod": "4-4,6-8",
      "week": "六",
      "dayPeriod": "6-9"
    },
    {
      "lessonName": "Web开发技术",
      "teacherName": "王成良-[主讲];",
      "classroom": "D1336",
      "weekPeriod": "1-5,7-7",
      "week": "四",
      "dayPeriod": "3-4"
    },
    {
      "lessonName": "Web开发技术",
      "teacherName": "王成良-[主讲];",
      "classroom": "D1139",
      "weekPeriod": "1-5,7-7",
      "week": "二",
      "dayPeriod": "3-4"
    },
    {
      "lessonName": "Web开发技术",
      "teacherName": "王成良-[主讲];",
      "classroom": "软件工程实验室-DS1501",
      "weekPeriod": "3-4,6-7",
      "week": "六",
      "dayPeriod": "1-4"
    },
    {
      "lessonName": "多媒体技术",
      "teacherName": "桑军-[主讲];",
      "classroom": "D1138",
      "weekPeriod": "11-16",
      "week": "二",
      "dayPeriod": "8-9"
    },
    {
      "lessonName": "多媒体技术",
      "teacherName": "桑军-[主讲];",
      "classroom": "D1138",
      "weekPeriod": "11-16",
      "week": "五",
      "dayPeriod": "1-2"
    },
    {
      "lessonName": "多媒体技术",
      "teacherName": "桑军-[主讲];",
      "classroom": "软件工程实验室-DS1501",
      "weekPeriod": "13-16",
      "week": "六",
      "dayPeriod": "1-4"
    },
    {
      "lessonName": "嵌入式体系结构",
      "teacherName": "刘寄-[主讲];",
      "classroom": "软件工程实验室-DS1501",
      "weekPeriod": "10-17",
      "week": "二",
      "dayPeriod": "6-7"
    },
    {
      "lessonName": "嵌入式体系结构",
      "teacherName": "刘寄-[主讲];",
      "classroom": "软件工程实验室-DS1501",
      "weekPeriod": "10-17",
      "week": "五",
      "dayPeriod": "3-4"
    },
    {
      "lessonName": "嵌入式体系结构",
      "teacherName": "刘寄-[主讲];",
      "classroom": "软件工程实验室-DS1501",
      "weekPeriod": "10-12,17-17",
      "week": "六",
      "dayPeriod": "1-4"
    },
    {
      "lessonName": "嵌入式体系结构",
      "teacherName": "刘寄-[主讲];",
      "classroom": "软件工程实验室-DS1501",
      "weekPeriod": "13-16",
      "week": "六",
      "dayPeriod": "6-9"
    },
    {
      "lessonName": "药物发现简史",
      "teacherName": "李杨峰-[主讲];",
      "classroom": "D1128",
      "weekPeriod": "1-5,7-17",
      "week": "三",
      "dayPeriod": "8-9"
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

