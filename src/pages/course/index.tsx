import {useEffect, useState} from "react";
import Taro from "@tarojs/taro";
import { View } from '@tarojs/components';
import Header from "./components/Header";
import Table from "./components/Table";
import Footer from "./components/Footer";
import {
  calcCurrWeek, getDayPeriodStr,
  getHeaderDates,
  getLessonViewItems
} from "../../models/course/util";
import LessonDetail from "./components/LessonDetail";
import {dateAddDays, getDateMonth, getDayOfWeek} from "../../utils/datetime";
import sugarUser, {UserType} from "../../core/SugarUser";
import courseModel from "../../models/course/model";
import {LessonDetailItem, LessonItem, LessonViewItem} from "../../models/course/types";

export default function Curriculum() {
  const [date, setDate] = useState(new Date());
  const [user, setUser] = useState<UserType>(sugarUser.user);
  const [month, setMonth] = useState(getDateMonth(date));
  const [week, setWeek] = useState(calcCurrWeek(courseModel.getStartDate(user), date));
  const [headerDates, setHeaderDates] = useState(getHeaderDates(date));
  const [lessonViewItems, setLessonViewItems] = useState<LessonViewItem[]>(getLessonViewItems(user, week));
  const [lessonDetailItem, setLessonDetailItem] = useState<LessonDetailItem | null>(null);

  const update = () => {
    setMonth(getDateMonth(date));
    setHeaderDates(getHeaderDates(date));
    const currWeek = calcCurrWeek(courseModel.getStartDate(user), date);
    setWeek(currWeek);
    setLessonViewItems(getLessonViewItems(user, currWeek));
  }

  // 一旦date改变，对应产生的变化
  useEffect(update, [date, user]);

  // 更新pageDate
  const switchWeek = (deltaWeek: number) => {
    setDate(currDate => dateAddDays(currDate, deltaWeek * 7));
  }

  const onTapItem = (lessonViewItem : LessonViewItem) => {
    const detailItem = lessonViewItem as LessonItem as LessonDetailItem;
    detailItem.timePeriod = getDayPeriodStr(detailItem.dayPeriod, courseModel.getTimeList(user));
    setLessonDetailItem(detailItem);
  }

  return (
    <View>
      <Header month={month} dateList={headerDates} />
      <Table dayOfWeek={getDayOfWeek(date) + 1} lessonViewItems={lessonViewItems} onTapItem={onTapItem} />
      <View style={{ width: "100%", height: "50px" }} />
      <Footer
        week={week}
        user={user}
        onTapLeft={()=>{ switchWeek(-1) }}
        onTapRight={()=>{ switchWeek(1) }}
        onTapUser={()=>{ setUser(sugarUser.switchUser()) }}
        onTapUpdate={()=>{
          Taro.showLoading();
          courseModel.update().then(() => {
            Taro.hideLoading();
            update();
            Taro.showToast({
              title: "更新成功",
              icon: "none"
            });
          });
        }}
      />
      <LessonDetail detailItem={lessonDetailItem} onClose={() => {setLessonDetailItem(null)}} />
    </View>
  )
}

