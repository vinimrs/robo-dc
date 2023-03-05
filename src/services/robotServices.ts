import { HttpClientReturn, Points } from '@types';
import { HttpClient } from '../infra/HttpClient';

export const robotServices = {
  moveTo: async (point: Points): Promise<HttpClientReturn> => {
    return HttpClient(`${process.env.MOVE_URL}/ros/goTo/${point}`, {
      method: 'GET',
    });
  },
};
