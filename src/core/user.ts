import Taro from "@tarojs/taro";

export type UserType = "Chen" | "Li" | "We";

export function getUser() {
  return Taro.getStorageSync<string>("UserName")
}

export function switchUser(user: UserType, hasWe: boolean = false) : UserType {
  if (user === "Chen") return "Li";
  if (user === "Li") return hasWe ? "We" : "Chen";
  else return "Li";
}
