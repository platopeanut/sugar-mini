import {View} from "@tarojs/components";
import {FC} from "react";
import {
  calcDaysBetween,
  calcSecondsBetween,
  calcTruncDaysBetween,
  stringifyDate,
} from "../../../utils/datetime";
import {interpolate} from "../../../utils/util";
import {ExamItem} from "../../../models/plan/types";

type PlanCardPropsType = {
  item: ExamItem
}

function getPlanColor(startDate: Date, endDate: Date, currDate: Date = new Date()): string {
  if (calcSecondsBetween(currDate, endDate) > 0) return "#95a5a6"
  if (calcSecondsBetween(currDate, startDate) > 0) return "#3498db"
  const limit = 10
  const day = calcDaysBetween(startDate, currDate)
  const ratio = Math.min(day, limit) / limit
  const color = ratio <= 0.5 ?
    interpolate([242, 12, 0], [255, 242, 0], ratio) :
    interpolate([255, 242, 0], [30, 150, 0], ratio)
  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}

function getPlanTint(startDate: Date, endDate: Date, currDate: Date = new Date()): string {
  let day = calcTruncDaysBetween(startDate, currDate)
  if (day > 0) return `还有${day}天`
  if (day === 0) return '今天'
  day = calcTruncDaysBetween(currDate, endDate)
  return `已过${day}天`
}

const PlanCard: FC<PlanCardPropsType> = (props) => {
  return (
    <View style={{
      width: "90%",
      margin: "20px auto",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      borderRadius: "5px"
    }}
    >
      <View style={{
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
        height: "20px",
        backgroundColor: getPlanColor(props.item.startDate, props.item.endDate),
        color: "white",
        textAlign: "center",
        paddingTop: "5px",
        paddingBottom: "5px",
      }}
      >
        {getPlanTint(props.item.startDate, props.item.endDate)}
      </View>
      <View style={{
        padding: "20px"
      }}
      >
        <PlanCardItem title='名称' value={props.item.courseName} />
        <PlanCardItem title='地点' value={props.item.place} />
        <PlanCardItem title='开始时间' value={stringifyDate(props.item.startDate)} />
        <PlanCardItem title='结束时间' value={stringifyDate(props.item.endDate)} />
      </View>
    </View>
  )
}

type PlanCardItemPropsType = {
  title: string
  value: string
}

const PlanCardItem: FC<PlanCardItemPropsType> = (props) => {
  return (
    <View style={{
      display: "flex",
      flexDirection: "row"
    }}
    >
      <View style={{
        flex: 0.3,
        color: "gray",
        textAlign: "left"
      }}
      >{props.title}</View>
      <View style={{
        flex: 0.7,
        textAlign: "right"
      }}
      >{props.value}</View>
    </View>
  )
}

export default PlanCard
