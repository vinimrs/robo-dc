import { HttpClientReturn, Points } from '@types';
import { HttpClient } from '../infra/HttpClient';

export const robotServices = {
  moveTo: async (point: Points): Promise<HttpClientReturn> => {
    if (process.env.NODE_ENV === 'development') {
      return {
        ok: true,
        status: 100,
        headers: {} as Headers,
        body: { message: 'Deu certo (desenvolvimento).' },
      };
    }
    return HttpClient(`${process.env.MOVE_URL}/ros/goTo/${point}`, {
      method: 'GET',
    });
  },
  cancelMove: async (): Promise<HttpClientReturn> => {
    if (process.env.NODE_ENV === 'development') {
      return {
        ok: true,
        status: 100,
        headers: {} as Headers,
        body: { message: 'Deu certo (desenvolvimento).' },
      };
    }
    return HttpClient(`${process.env.MOVE_URL}/ros/cancel`, {
      method: 'DELETE',
    });
  },
  getStatus: async (): Promise<HttpClientReturn> => {
    if (process.env.NODE_ENV === 'development') {
      return {
        ok: true,
        status: 100,
        headers: {} as Headers,
        body: {
          goal_state: 'SUCCEEDED',
        },
      };
    }
    return HttpClient(`${process.env.MOVE_URL}/ros/status`, {
      method: 'GET',
    });
  },
};
