import { HttpClientReturn, Points } from '@types';
import { HttpClient } from '../infra/HttpClient';

export const robotServices = {
  moveTo: async (point: Points): Promise<HttpClientReturn> => {
    if (process.env.NODE_ENV === 'development') {
      return {
        ok: true,
        status: 100,
        headers: {} as Headers,
        body: { message: 'Esperando ajuste do IP.' },
      };
    }
    return HttpClient(`${process.env.MOVE_URL}/ros/goTo/${point}`, {
      method: 'GET',
    });
  },
};
