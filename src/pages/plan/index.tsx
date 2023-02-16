import {View} from "@tarojs/components";
import PlanCard from "./components/PlanCard";
import {getDoneExamData, getWillExamData} from "./repository";


function Index() {
  const willItems = getWillExamData()
  const doneItems = getDoneExamData()
  const ratio = doneItems.length / (willItems.length + doneItems.length)
  return (
    <View>
      <View style={{
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        padding: "20px",
        margin: "20px auto",
        width: "80%",
        color: "#177cb0",
        fontWeight: "bold"
      }}
      >宝贝加油鸭~</View>
      <View style={{
        width: "90%",
        margin: "10px auto 5px",
        textAlign: "center"
      }}
      >{`${doneItems.length} / ${willItems.length + doneItems.length}`}</View>
      <View style={{
        display: "flex",
        flexDirection: "row",
        width: "90%",
        margin: "0 auto 20px",
        height: "10px"
      }}
      >
        <View style={{
          flex: ratio,
          backgroundColor: "#4cd137",
          textAlign: "center",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
        ></View>
        <View style={{
          flex: 1 - ratio,
          backgroundColor: "#e9ebec",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px"
        }}
        ></View>
      </View>
      {willItems.map(it => <PlanCard key='it' item={it} />)}
      {doneItems.map(it => <PlanCard key='it' item={it} />)}
      <View style={{ height: "20px" }}></View>
    </View>
  )
}

export default Index
