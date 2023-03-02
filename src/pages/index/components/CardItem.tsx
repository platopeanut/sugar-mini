import {FC} from "react";
import {View} from "@tarojs/components";
import Taro from "@tarojs/taro";
import SugarIcon from "../../components/SugarIcon";

type CardItemPropsType = {
  icon: string
  name: string
  color: string
  path: string
  row: number
  column: number
}

const CardItem: FC<CardItemPropsType> = (props) => {
  return (
    <View
      onClick={() => {
        Taro.navigateTo({
          url: props.path
        }).then()
      }}
      style={{
        backgroundColor: "rgba(255, 255, 255, 1)",
        color: props.color,
        gridRow: props.row,
        gridColumn: props.column,
        textAlign: "center",
        padding: "10px 0",
        borderRadius: "5px",
        margin: "2px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <SugarIcon name={props.icon} />
      <View>{props.name}</View>
    </View>
  )
}

export default CardItem
