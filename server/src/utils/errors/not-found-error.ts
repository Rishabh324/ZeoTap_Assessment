import StatusCode from "../../status-codes/status-codes";
import CustomError from "./custom-error";

export default class NotFoundError extends CustomError {
  public constructor(message: string) {
    super(message, StatusCode.NOT_FOUND);
  }
}