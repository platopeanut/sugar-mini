import {SugarResponse} from "../network";
import SugarError from "./SugarError";

class RequestError<ResType> extends SugarError {
  constructor(url: string, response: SugarResponse<ResType>, reqParams: any = null) {
    super(JSON.stringify({url, response, reqParams}));
  }

  static test<T>(response: SugarResponse<T>): boolean {
    return response.status;
  }
}

export default RequestError;
