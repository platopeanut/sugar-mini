import SugarModel from "../../core/SugarModel";
import {getAllMsg, addMsg} from "./network";

class MsgModel extends SugarModel {
  public async getAllMsg() { return await getAllMsg(); }

  public async addMsg(msg: string) { return await addMsg(msg); }

}

export default new MsgModel();
