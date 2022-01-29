import { $ } from "zx";

export type CurlResponse<T = string, E = string> = CurlFailure<E> | CurlSuccess<T>;

export type CurlFailure<E> = {
  type: "failure";
  error: E;
};

export type CurlSuccess<T> = {
  type: "success";
  text: T;
};

export const curl = async (url: string): Promise<CurlResponse> => {
  const process = await $`curl ${url}`;

  const response =
    process.exitCode || process.stderr
      ? <CurlFailure<string>>{ type: "failure", error: process.stderr }
      : <CurlSuccess<string>>{ type: "success", text: process.stdout };

  return response;
};
