import {useEffect, useState} from "react";
import Taro from "@tarojs/taro";
import { View } from '@tarojs/components';
import Header from "./components/Header";
import Table from "./components/Table";
import Footer from "./components/Footer";
import {
  calcCurrWeek,
  getHeaderDates,
  getLessonViewItems
} from "./util";
import {START_DATE} from "./repository";
import {LessonDetailItem, LessonItem, LessonViewItem} from "./type";
import {UserType} from "../../core/user";
import LessonDetail from "./components/LessonDetail";
import {dateAddDays, getDateMonth} from "../../utils/datetime";

export default function Curriculum() {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(getDateMonth(date));
  const [week, setWeek] = useState(calcCurrWeek(START_DATE, date));
  const [headerDates, setHeaderDates] = useState(getHeaderDates(date));
  const [user, setUser] = useState<UserType>("Chen");
  const [lessonViewItems, setLessonViewItems] = useState<LessonViewItem[]>(getLessonViewItems(user, week));
  const [lessonDetailItem, setLessonDetailItem] = useState<LessonDetailItem | null>(null);

  // 一旦date改变，对应产生的变化
  useEffect(() => {
    setMonth(getDateMonth(date));
    setHeaderDates(getHeaderDates(date));
    const currWeek = calcCurrWeek(START_DATE, date);
    setWeek(currWeek);
    setLessonViewItems(getLessonViewItems(user, currWeek));
  }, [date, user]);

  // 更新pageDate
  const switchWeek = (deltaWeek: number) => {
    setDate(currDate => dateAddDays(currDate, deltaWeek * 7));
  }

  const onTapItem = (lessonViewItem : LessonViewItem) => {
    const detailItem = lessonViewItem as LessonItem as LessonDetailItem
    detailItem.timePeriod = "08:30~10:10"
    setLessonDetailItem(detailItem)
  }

  return (
    <View>
      <Header month={month} dateList={headerDates} />
      <Table lessonViewItems={lessonViewItems} onTapItem={onTapItem} />
      <View style={{ width: "100%", height: "50px" }} />
      <Footer
        week={week}
        user={user}
        onTapLeft={()=>{ switchWeek(-1) }}
        onTapRight={()=>{ switchWeek(1) }}
        onTapUser={()=>{ setUser(currUser => currUser === "Chen" ? "Li" : "Chen") }}
        onTapUpdate={()=>{ Taro.showToast({title: 'update'}).then() }}
      />
      <LessonDetail detailItem={lessonDetailItem} onClose={() => {setLessonDetailItem(null)}} />
    </View>
  )
}

