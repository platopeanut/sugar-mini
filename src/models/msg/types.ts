export type MsgItem = {
  msg: string
  time: string
  ipStr: string
  ip: {
    Country: string
    Province: string
    City: string
    District: string
    Isp: string
  }
}
