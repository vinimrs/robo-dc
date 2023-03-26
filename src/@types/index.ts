import { ImageSourcePropType } from 'react-native';

export interface EventRawI {
  Titulo: string;
  Data: string;
  Descricao: string;
  Local: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface EventI extends EventRawI {
  Tipo: string;
  Imagem: ImageSourcePropType;
  Slug: string;
}

export interface HttpClientReturn {
  ok: boolean;
  status: number;
  body: any;
  headers: Headers;
}

export type Routes =
  | 'Home'
  | 'Features'
  | 'Events'
  | 'Event'
  | 'Explore'
  | 'Point'
  | 'Movement'
  | 'Moving'
  | 'Arrived';

export type Points =
  | 'LE-1'
  | 'LE-2'
  | 'LE-3'
  | 'LE-4'
  | 'Suporte'
  | 'PPG-CC4'
  | 'Maker'
  | 'LE-5'
  | 'Auditório'
  | 'Banheiros'
  | 'Copa'
  | 'Lig'
  | 'Reuniões'
  | 'Chefia'
  | 'Graduação'
  | 'Recepção'
  | 'Home';

export interface PointI {
  id: number;
  name: Points;
  slug: string;
  description: string;
  type?: string;
  image: ImageSourcePropType;
}
