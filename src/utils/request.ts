import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export class ResponseError extends Error {
  public response: Response | AxiosResponse;

  constructor(response: Response | AxiosResponse) {
    super(response.statusText);
    this.response = response;
  }
}

function parseJSON(response: Response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

function parseAxiosJSON(response: AxiosResponse) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.data;
}

function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new ResponseError(response);
  error.response = response;
  throw error;
}

function checkAxiosStatus(response: AxiosResponse) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new ResponseError(response);
  error.response = response;
  throw error;
}

export async function request(
  url: string,
  options?: RequestInit,
): Promise<{} | { err: ResponseError }> {
  const fetchResponse = await fetch(url, options);
  const response = checkStatus(fetchResponse);
  return parseJSON(response);
}

export async function axiosRequest(
  url: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse> {
  const fetchResponse = await axios(url, options);
  const response = checkAxiosStatus(fetchResponse);
  return parseAxiosJSON(response);
}
