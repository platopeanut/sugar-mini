import {sugarGetStorageSync, sugarSetStorageSync} from "./storage";
import SugarModel from "./SugarModel";

export type UserType = "Chen" | "Li" | "We";

export type UserDict<T> = {
  Chen: T,
  Li: T
}

class SugarUser extends SugarModel {
  private _user: UserType = this.load();
  private load(): UserType { return sugarGetStorageSync<UserType>("UserName") || "Li"; }
  public save(user: UserType) {
    sugarSetStorageSync("UserName", user);
    this._user = this.load();
  }
  public get user() { return this._user; }
  public set user(user: UserType) { this._user = user; }
  public switchUser(hasWe: boolean = false) : UserType {
    let nextUser: UserType;
    if (this._user === "Chen") nextUser = "Li";
    else if (this._user === "Li") nextUser = hasWe ? "We" : "Chen";
    else nextUser = "Chen";
    this._user = nextUser;
    return this._user;
  }
  public getAll(hasWe: boolean = false): UserType[] {
    return hasWe ? ["Li", "Chen", "We"] : ["Li", "Chen"];
  }
}

export default new SugarUser();
