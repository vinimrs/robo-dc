import { imagesSrc } from '@constants';
import { EventI } from '@types';
import { HttpClient } from '../infra/HttpClient';
import { EVENTS_URL } from '@env';

export const eventServices = {
  getAllEvents: async (): Promise<EventI[]> => {
    return HttpClient(`${EVENTS_URL}?_sort=Data:DESC`, {
      method: 'GET',
    }).then(res => {
      if (res.ok) {
        return res.body.map((event: EventI) => putTypeAndImage(event));
      }
      return [];
    });
  },
  getNEvents: async (n: number): Promise<EventI[]> => {
    return HttpClient(`${EVENTS_URL}?_sort=Data:DESC&_limit=${n}`, {
      method: 'GET',
    }).then(res => {
      if (res.ok) {
        return res.body.map((event: EventI) => putTypeAndImage(event));
      }
      return [];
    });
  },
};

const putTypeAndImage = (eventRaw: EventI): EventI => {
  let event = { ...eventRaw };

  if (eventRaw.Local === 'Auditório do DC') {
    event = {
      ...event,
      Imagem: imagesSrc.auditorio,
    };
  } else {
    event = {
      ...event,
      Imagem: imagesSrc.dc,
    };
  }

  if (
    event.Titulo.includes('Seminário') ||
    event.Descricao.includes('Seminário')
  ) {
    event.Titulo = event.Titulo.replace('Seminário:', '').replace(/^ /, '');
    return {
      ...event,
      Slug: 'seminar',
      Tipo: 'Seminário',
    };
  }
  if (event.Titulo.includes('Reunião') || event.Descricao.includes('Reunião')) {
    event.Titulo = event.Titulo.replace('Reunião:', '').replace(/^ /, '');
    return {
      ...event,
      Slug: 'meeting',
      Tipo: 'Reunião',
    };
  }
  if (event.Titulo.includes('Curso') || event.Descricao.includes('Curso')) {
    event.Titulo = event.Titulo.replace('Curso:', '').replace(/^ /, '');
    return { ...event, Slug: 'course', Imagem: imagesSrc.dc, Tipo: 'Curso' };
  }
  if (
    event.Titulo.includes('Congresso') ||
    event.Descricao.includes('Congresso')
  ) {
    event.Titulo = event.Titulo.replace('Congresso:', '').replace(/^ /, '');

    return {
      ...event,
      Slug: 'congress',
      Tipo: 'Congresso',
    };
  }
  if (
    event.Titulo.includes('Workshop') ||
    event.Descricao.includes('Workshop')
  ) {
    event.Titulo = event.Titulo.replace('Workshop:', '').replace(/^ /, '');
    return {
      ...event,
      Slug: 'workshop',
      Tipo: 'Workshop',
    };
  }
  if (
    event.Titulo.includes('Webinário') ||
    event.Descricao.includes('Webinário')
  ) {
    event.Titulo = event.Titulo.replace('Webinário:', '').replace(/^ /, '');
    return {
      ...event,
      Slug: 'webnar',
      Tipo: 'Webinário',
    };
  }

  return {
    ...event,
    Tipo: 'Outro',
    Slug: 'other',
  };
};
