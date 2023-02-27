import {FC, useEffect, useState} from "react";
import {View, Swiper, SwiperItem} from "@tarojs/components";
import msgModel from "../../../models/msg/model";
import {MsgItem} from "../../../models/msg/types";

type MsgCardPropsType = {}

const MsgCard: FC<MsgCardPropsType> = () => {
  const [msgItems, setMsgItems] = useState<MsgItem[]>([]);
  useEffect(() => {
    msgModel.getAllMsg().then(it => setMsgItems(it));
  }, []);

  return (
    <View style={{
      backgroundColor: "rgba(255,255,255,0.9)",
      margin: "0 auto",
      width: "90%"
    }}
    >
      <Swiper
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        // indicatorDots
        autoplay
      >
        { msgItems.map(it => (
          <SwiperItem key='it'>
            <View style={{
              textAlign: "center"
            }}
            >{it.msg}</View>
          </SwiperItem>
        )) }
      </Swiper>
    </View>
  )
}

export default MsgCard
