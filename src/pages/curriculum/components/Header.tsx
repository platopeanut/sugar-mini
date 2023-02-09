import {View, Text} from "@tarojs/components";
import {FC} from "react";
import {prefix} from "../../../utils/util";

type HeaderPropsType = {
  month: number
  dateList: number[]
}

const Header: FC<HeaderPropsType> = (props) => {
  const dayNamesOfWeek = "一二三四五六日".split("").map(it => "周" + it)
  const monthName = "月"
  return (
    <View style={{
      position: "fixed",
      top: "0px",
      width: "100%",
      height: "50px",
      zIndex: 10,
      alignItems: "center",
      verticalAlign: "center",
      justifyContent: "center",
      backgroundColor: "white",

      display: "flex",
      flexDirection: "row",
      boxShadow: "rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px"
    }}
    >
      <View style={{
        flex: 0.05,
        display: "flex",
        flexDirection: "column",
        textAlign: "right"
      }}
      >
        <Text style={{ flex: 1 }}>{prefix(props.month)}</Text>
        <Text style={{ flex: 1 }}>{monthName}</Text>
      </View>
      <View style={{
        flex: 1,
        display: "flex",
        flexDirection: "column"
      }}
      >
        <View style={{
          flex: 1,
          display: "flex",
          flexDirection: "row"
        }}
        >{dayNamesOfWeek.map(it => <Text key={it} style={{
          flex: 1,
          fontWeight: "bold",
          textAlign: "center"
        }}
        >{it}</Text>)}</View>
        <View style={{
          flex: 1,
          display: "flex",
          flexDirection: "row"
        }}
        >{props.dateList.map(it => <Text key={it} style={{
          flex: 1,
          textAlign: "center"
        }}
        >{prefix(it)}</Text>)}</View>
      </View>
    </View>
  )
}

export default Header
