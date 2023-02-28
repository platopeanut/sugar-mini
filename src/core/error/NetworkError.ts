import SugarError from "./SugarError";

class NetworkError extends SugarError {
  constructor(url: string, statusCode: number, errMsg: string, reqParams: any = null) {
    super(JSON.stringify({url, statusCode, errMsg, reqParams}));
  }

  static test(statusCode: number): boolean {
    return statusCode >= 200 && statusCode < 300;
  }
}

export default NetworkError;
