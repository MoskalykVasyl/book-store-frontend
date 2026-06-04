import type { ErrorResponse } from "@/types/type";
import type { AxiosError } from "axios";




export const getErrorMessage = (
  err: AxiosError<ErrorResponse>,
): string => {
  const message = err.response?.data.message;

  if (Array.isArray(message)) {
    return message.join(', ');
  }

  return message ?? 'Something went wrong';
};