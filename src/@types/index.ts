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
