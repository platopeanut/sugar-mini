export type MsgItem = {
  msg: string
  time: string
  ipStr: string
  ip: IP
}

export type IP = {
  Country: string
  Province: string
  City: string
  District: string
  Isp: string
}
