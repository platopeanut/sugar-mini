import {FC} from "react";
import {View} from "@tarojs/components";
import {AtModal, AtModalContent, AtModalHeader} from "taro-ui";
import {LessonDetailItem} from "../type";

type LessonDetailPropsType = {
  detailItem: LessonDetailItem | null
  onClose: () => void
}

const LessonDetail: FC<LessonDetailPropsType> = (props) => {
  if (props.detailItem === null) return (<View></View>);
  const item = props.detailItem!
  return (
    <AtModal isOpened onClose={props.onClose}>
      <AtModalHeader>{item.lessonName}</AtModalHeader>
      <AtModalContent>
        <View style={{
          display: "flex",
          flexDirection: "column"
        }}
        >
          <DetailItem label='上课教室' value={item.classroom} />
          <DetailItem label='任课教师' value={item.teacherName} />
          <DetailItem label='上课周次' value={item.weekPeriod} />
          <DetailItem label='上课时间' value={item.timePeriod} />
          <DetailItem label='上课时段' value={'周' + item.week + item.dayPeriod + '节'} />
        </View>
      </AtModalContent>
    </AtModal>
  )
}

type DetailItemPropsType = {
  label: string
  value: string
}

const DetailItem: FC<DetailItemPropsType> = (props) => {
  return (
    <View style={{
      flex: 1,
      display: "flex",
      flexDirection: "row",
      padding: "10px"
    }}
    >
      <View style={{flex: 0.3, textAlign: "left", color: "gray"}}>{props.label}</View>
      <View style={{flex: 0.7, textAlign: "right"}}>{props.value}</View>
    </View>
  )
}

export default LessonDetail
