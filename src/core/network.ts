import Taro from "@tarojs/taro";
import NetworkError from "./error/NetworkError";
import RequestError from "./error/RequestError";

const BASE_URL = "https://platopeanut.top";

export type SugarResponse<T> = {
  status: boolean,
  msg: string,
  data: T
};

export async function sugarRequest<ResType>(
  url: string,
  method: keyof Taro.request.Method = "POST",
  data: any = {}
) {
  const res = await Taro.request<SugarResponse<ResType>>({
    url: BASE_URL + url,
    method: method,
    data: data,
  });
  if (!NetworkError.test(res.statusCode))
    throw new NetworkError(url, res.statusCode, res.errMsg, data);
  if (!RequestError.test<ResType>(res.data))
    throw new RequestError<ResType>(url, res.data, data);
  return res.data.data;
}
