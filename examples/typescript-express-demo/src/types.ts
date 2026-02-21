export type ApiError = {
  error: string;
  details?: Array<{ path: string; message: string }>;
};