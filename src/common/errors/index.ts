import { ValidationError } from "class-validator";
import { ERROR_CODES } from "../constants/error-codes";

export class CommonException {
  constructor(
    public code: number,
    public message: string,
    public data: any,
    public success: boolean = false,
    public time = new Date(),
    public count?: number /* paging uchun */
  ) {}
  public static Success(data, count?) {
    return new CommonException(0, "ok", data, true, new Date(), count);
  }
  public static UnknownError(data?: any, meta: any = {}) {
    return new CommonException(ERROR_CODES.BASE, "Unknown error", data);
  }

  public static ValidationError(data?: ValidationError[] | string) {
    return new CommonException(ERROR_CODES.BASE + 1, "Validation Error", data);
  }
}
