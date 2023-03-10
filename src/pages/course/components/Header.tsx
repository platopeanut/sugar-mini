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
      boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
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
          textAlign: "center",
          fontSize: "15px",
        }}
        >{it}</Text>)}</View>
        <View style={{
          flex: 1,
          display: "flex",
          flexDirection: "row"
        }}
        >{props.dateList.map(it => <Text key={it} style={{
          flex: 1,
          textAlign: "center",
          fontSize: "15px",
        }}
        >{prefix(it)}</Text>)}</View>
      </View>
    </View>
  )
}

export default Header
