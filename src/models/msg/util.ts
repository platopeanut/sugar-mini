import {IP} from "./types";

export function stringifyIP(ip: IP): string {
  return ip.Country + ' / '
       + ip.Province + ' / '
       + ip.City + ' / '
       + ip.District + ' / '
       + ip.Isp
}
