import {useEffect, useState} from "react";
import Taro, { usePullDownRefresh } from "@tarojs/taro";
import { View } from "@tarojs/components";
import UserIcon from "../components/UserIcon";
import PlanCard from "./components/PlanCard";
import sugarUser, {UserType} from "../../core/SugarUser";
import planModel from "../../models/plan/model";
import {ExamItem} from "../../models/plan/types";
import SugarIcon, {SugarIcons} from "../components/SugarIcon";

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

  function updateData() {
    Taro.showLoading();
    planModel.update().then(() => {
      update();
      Taro.hideLoading();
      Taro.showToast({
        title: "更新成功",
        icon: "none"
      });
    });
  }

  usePullDownRefresh(() => {
    Taro.stopPullDownRefresh();
    updateData();
  })

  return (
    <View>
      <View style={{display: "flex"}}>
        <SugarIcon name={SugarIcons.update} onTap={updateData} style={{flex: 1}} />
        <View style={{ flex: 1, margin: "20px auto", textAlign: "center" }} >{`${doneItems.length} / ${willItems.length + doneItems.length}`}</View>
        <UserIcon user={user} onSwitchUser={() => setUser(sugarUser.switchUser())}  style={{flex: 1}} />
      </View>
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
