import { AxiosError } from "axios";

//todo: move later
type ErrorResponse = {
  message: string;
  statusCode: number;
};
export const returnTypedError = (error: AxiosError): AxiosError<ErrorResponse> => {
  return error as AxiosError<ErrorResponse>;
};
