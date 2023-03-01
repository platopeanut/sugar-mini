import {useEffect, useState} from "react";
import Taro from "@tarojs/taro";
import {View} from '@tarojs/components';
import CardItem from "./components/CardItem";
import MsgCard from "./components/MsgCard";
import {printAllStorage} from "../../core/storage";
import pictureModel from "../../models/picture/model";
import {SugarIcons} from "../components/SugarIcon";

type CardItemConfig = {
  icon: string
  name: string
  path: string
}

const cardItemsConfig: CardItemConfig[] = [
  {
    icon: SugarIcons.course,
    name: '课表',
    path: '../course/index'
  },
  {
    icon: SugarIcons.plan,
    name: '安排',
    path: '../plan/index'
  },
  {
    icon: SugarIcons.setting,
    name: '设置',
    path: '../setting/index'
  }
]

function Index() {
  const [bgImageBase64, setBgImageBase64] = useState("");

  useEffect(() => {
    Taro.showLoading({ title: "加载背景图" });
    pictureModel.get("bg.jpg").then(picItem => {
      if (picItem) setBgImageBase64(picItem.base64);
      Taro.hideLoading();
    });
    printAllStorage();
  }, []);

  return (
    <View style={{
      backgroundImage: `url(data:image/jpeg;base64,${bgImageBase64})`,
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      height: "1000px"
    }}
    >
      <MsgCard />
      <View style={{
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        width: "90%",
      }}
      >{
        cardItemsConfig.map((it, index) =>
          <CardItem
            key='it'
            icon={it.icon}
            name={it.name}
            path={it.path}
            row={Math.trunc(index / 2) + 1}
            column={index % 2 + 1}
          />
        )
      }
      </View>
    </View>
  )
}


export default Index;
