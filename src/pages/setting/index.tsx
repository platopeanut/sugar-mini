import {FC} from "react";
import {Button, View} from "@tarojs/components";
import {clearAllStorage} from "../../core/storage";
import Taro from "@tarojs/taro";

type SettingPropsType = {}

const Setting: FC<SettingPropsType> = () => {
  return (
    <View>
      <Button onClick={()=>{
        clearAllStorage();
        Taro.showToast({
          title: "清除成功",
          icon: "none"
        });
      }}
      >清除缓存</Button>
    </View>
  );
}

export default Setting;
