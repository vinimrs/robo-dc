import { HttpClientReturn } from '@types';

export const HttpClient = async (
  fetchUrl: string,
  fetchOptions: RequestInit,
): Promise<HttpClientReturn> => {
  return fetch(fetchUrl, {
    ...fetchOptions,
    headers: {
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    },
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : undefined,
  }).then(async res => {
    return {
      ok: res.ok,
      status: res.status,
      body: await res.json(),
      headers: res.headers,
    };
  });
};
