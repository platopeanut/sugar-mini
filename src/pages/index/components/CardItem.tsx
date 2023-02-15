import {FC} from "react";
import {View} from "@tarojs/components";
import Taro from "@tarojs/taro";

type CardItemPropsType = {
  iconPath: string
  color: string
  name: string
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
        backgroundColor: "rgba(255, 255, 255, 0.9)",
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
      <View className={`at-icon at-icon-${props.iconPath}`}></View>
      <View>{props.name}</View>
    </View>
  )
}

export default CardItem
