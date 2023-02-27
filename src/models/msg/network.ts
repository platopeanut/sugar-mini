import {sugarRequest} from "../../core/network";
import {MsgItem} from "./types";

export async function getAllMsg() {
  return await sugarRequest<MsgItem[]>("/msg/all", "GET");
}

export async function addMsg(msg: string) {
  return await sugarRequest<MsgItem[]>("/msg", "POST", {msg: msg});
}
