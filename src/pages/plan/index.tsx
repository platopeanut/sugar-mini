import {useEffect, useState} from "react";
import Taro, { usePullDownRefresh } from "@tarojs/taro";
import { View } from "@tarojs/components";
import UserBar from "../components/UserBar";
import PlanCard from "./components/PlanCard";
import sugarUser, {UserType} from "../../core/SugarUser";
import planModel from "../../models/plan/model";
import {ExamItem} from "../../models/plan/types";

function Index() {
  const [willItems, setWillItems] = useState<ExamItem[]>([]);
  const [doneItems, setDoneItems] = useState<ExamItem[]>([]);
  const [ratio, setRatio] = useState<number>(0);
  const [user, setUser] = useState<UserType>(sugarUser.user);
  const update = () => {
    const willData = planModel.getWillExamData(sugarUser.user, new Date());
    const doneData = planModel.getDoneExamData(sugarUser.user, new Date());
    setWillItems(willData);
    setDoneItems(doneData);
    setRatio(willData.length / (willData.length + doneData.length));
  }

  useEffect(() => {
    update();
  }, [user]);

  usePullDownRefresh(() => {
    Taro.stopPullDownRefresh();
    Taro.showLoading();
    planModel.update().then(() => {
      update();
      Taro.hideLoading();
      Taro.showToast({
        title: "更新成功",
        icon: "none"
      });
    });
  })

  return (
    <View>
      <UserBar onSwitchUser={() => setUser(sugarUser.user)} style={{
        width: "100%",
      }}
      />
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
