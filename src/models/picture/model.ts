import SugarModel from "../../core/SugarModel";
import {sugarGetStorageSync, sugarSetStorageSync} from "../../core/storage";
import {PicItem} from "./types";
import {getPicture} from "./network";

class PictureModel extends SugarModel {
  private picItems = sugarGetStorageSync<PicItem[]>("Picture") || [];
  public async get(imgName: string) {
    const item = await this.find(imgName);
    if (item) return item;
    await this.update(imgName);
    return await this.find(imgName);
  }
  private async find(imgName: string) {
    return this.picItems.find(it => it.name === imgName);
  }
  private async update(imgName: string) {
    const base64 = await getPicture(imgName);
    this.picItems.push({ name: imgName, base64: base64 });
    sugarSetStorageSync("Picture", this.picItems);
    this.picItems = sugarGetStorageSync<PicItem[]>("Picture") || [];
  }
}

export default new PictureModel();
