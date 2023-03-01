import {FC, useEffect, useRef, useState} from "react";
import Taro from "@tarojs/taro";
import {Textarea, View} from "@tarojs/components";
import msgModel from "../../../models/msg/model";
import {MsgItem} from "../../../models/msg/types";
import SugarIcon, {SugarIcons} from "../../components/SugarIcon";
import {stringifyIP} from "../../../models/msg/util";

type MsgCardPropsType = {}

const MsgCard: FC<MsgCardPropsType> = () => {
  const [msgItems, setMsgItems] = useState<MsgItem[]>([{
    msg: "", time: "", ipStr: "",
    ip: { Country: "", Province: "", City: "", District: "", Isp: "" }
  } as MsgItem]);
  const [idx, setIdx] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const textInputRef: any = useRef();

  useEffect(() => {
    msgModel.getAllMsg().then(it => {
      setMsgItems(it);
      setIdx(it.length - 1);
    });
  }, []);

  function postMsg() {
    const msg = textInputRef.current.value;
    if (!msg) {
      Taro.showToast({
        title: "消息不能为空",
        icon: "error"
      });
      return;
    }
    msgModel.addMsg(msg).then(items => {
      setMsgItems(items);
      setIdx(items.length - 1);
      setIsEdit(false);
      Taro.showToast({
        title: "发送成功",
        icon: "success"
      });
    });
  }

  return (
    <View style={{
      backgroundColor: "rgba(255,255,255,0.95)",
      margin: "0 auto",
      width: "100%",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
    }}
    >
      {
        isEdit ?
          (<View style={{height: "120px"}}>
            <Textarea style={{width: "100%", height: "120px", border: "1px solid #eaeaea"}} ref={textInputRef} />
          </View>)
          :
          (<View style={{height: "120px"}}>
          <View style={{textAlign: "center", height: "80px"}}>{msgItems[idx].msg}</View>
          <View style={{textAlign: "right", fontSize: "small", marginRight: "10px"}}>{stringifyIP(msgItems[idx].ip)}</View>
          <View style={{textAlign: "right", fontSize: "small", marginRight: "10px"}}>{msgItems[idx].time}</View>
        </View>)
      }
      <View style={{
        display: "flex",
        paddingTop: "15px",
        paddingBottom: "10px"
      }}
      >
        <SugarIcon name={SugarIcons.left} style={{flex: 1}} onTap={() => {
          setIdx(prevIdx => Math.max(prevIdx - 1, 0));
        }}
        />
        <SugarIcon
          name={isEdit ? SugarIcons.closeRed : SugarIcons.edit}
          style={{flex: 1}}
          onTap={() => { setIsEdit(prevIsEdit => !prevIsEdit); }}
        />
        { isEdit ? (<SugarIcon name={SugarIcons.update} style={{flex: 1}} onTap={() => postMsg()} />) : "" }
        <SugarIcon name={SugarIcons.right} style={{flex: 1}} onTap={() => {
          setIdx(prevIdx => Math.min(prevIdx + 1, msgItems.length - 1));
        }}
        />
      </View>
    </View>
  )
}

export default MsgCard
