import Taro from "@tarojs/taro";
import {sugarGetImage} from "../../core/network";

export async function getPicture(imgName: string) {
  const buffer = await sugarGetImage(imgName);
  return Taro.arrayBufferToBase64(buffer);
}
