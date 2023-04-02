import { PointI } from '@types';

export const imagesSrc = {
  logo: require('../assets/images/logodc.png'),
  teacher: require('../assets/images/teacher.png'),
  student: require('../assets/images/student.png'),
  guest: require('../assets/images/guest.png'),
  arrow: require('../assets/images/arrow.png'),
  calendar: require('../assets/images/calendar.png'),
  // listArrow: require('../assets/images/list-arrow.png'),
  location: require('../assets/images/location.png'),
  moreTime: require('../assets/images/moretime.png'),
  target: require('../assets/images/target.png'),
  time: require('../assets/images/time.png'),
  dc: require('../assets/images/dc.jpeg'),
  auditorio: require('../assets/images/auditorio.jpeg'),
  dcPoints: {
    le1: require('../assets/images/dc.jpeg'),
  },
  mapa: require('../assets/images/mapa-terreo-dc.jpg'),
  explore: require('../assets/images/explore.png'),
  event: require('../assets/images/event.png'),
};

export const filters = [
  {
    id: 1,
    name: 'Seminários',
    slug: 'seminar',
  },
  {
    id: 2,
    name: 'Reunião',
    slug: 'meeting',
  },
  {
    id: 3,
    name: 'Workshop',
    slug: 'workshop',
  },
  {
    id: 4,
    name: 'Outros',
    slug: 'other',
  },
];

export const points: PointI[] = [
  {
    id: 1,
    name: 'LE-1',
    slug: 'le1',
    type: 'Laboratório',
    description:
      'LE-1 é um dos laboratórios onde ocorre aulas práticas para estudantes de cursos de graduação e pós-graduação de computação na Universidade Federal de São Carlos. O laboratório é equipado com equipamentos de última geração e conta com uma equipe de professores altamente qualificados.',
    image: imagesSrc.dcPoints.le1,
  },
  {
    id: 2,
    name: 'LE-2',
    slug: 'le2',
    type: 'Laboratório',
    description:
      'LE-2 é um dos laboratórios onde ocorre aulas práticas para estudantes de cursos de graduação e pós-graduação de computação na Universidade Federal de São Carlos. O laboratório é equipado com equipamentos de última geração e conta com uma equipe de professores altamente qualificados.',
    image: imagesSrc.dcPoints.le1,
  },
  {
    id: 3,
    name: 'LE-3',
    slug: 'le3',
    type: 'Laboratório',
    description:
      'LE-3 é um dos laboratórios onde ocorre aulas práticas para estudantes de cursos de graduação e pós-graduação de computação na Universidade Federal de São Carlos. O laboratório é equipado com equipamentos de última geração e conta com uma equipe de professores altamente qualificados.',
    image: imagesSrc.dcPoints.le1,
  },
  {
    id: 4,
    name: 'LE-4',
    slug: 'le4',
    type: 'Laboratório',
    description:
      'LE-4 é um dos laboratórios onde ocorre aulas práticas para estudantes de cursos de graduação e pós-graduação de computação na Universidade Federal de São Carlos. O laboratório é equipado com equipamentos de última geração e conta com uma equipe de professores altamente qualificados.',
    image: imagesSrc.dcPoints.le1,
  },
  {
    id: 5,
    name: 'Suporte',
    slug: 'suporte',
    type: 'Técnico',
    description: 'Neste local você pode encontrar o suporte técnico do DC.',
    image: imagesSrc.dcPoints.le1,
  },
  {
    id: 6,
    name: 'PPG-CC4',
    type: 'Laboratório',
    slug: 'ppgcc4',
    description: 'Neste local você pode encontrar o PPG-CC4.',
    image: imagesSrc.dcPoints.le1,
  },
  {
    id: 7,
    name: 'Maker',
    slug: 'maker',
    type: 'Laboratório',
    description: 'Neste local você pode encontrar o Espaço Maker.',
    image: imagesSrc.dcPoints.le1,
  },
  {
    id: 8,
    name: 'LE-5',
    slug: 'le5',
    type: 'Laboratório',
    description:
      'LE-5 é um dos laboratórios onde ocorre aulas práticas para estudantes de cursos de graduação e pós-graduação de computação na Universidade Federal de São Carlos. O laboratório é equipado com equipamentos de última geração e conta com uma equipe de professores altamente qualificados.',
    image: imagesSrc.dcPoints.le1,
  },
  {
    id: 9,
    name: 'Auditório',
    slug: 'auditorio',
    type: 'Auditório',
    description: 'Neste local você pode encontrar o Auditório.',
    image: imagesSrc.dcPoints.le1,
  },
  {
    id: 10,
    name: 'Banheiros',
    slug: 'banheiros',
    type: 'Serviços',
    description: 'Neste local você pode encontrar os Banheiros.',
    image: imagesSrc.dcPoints.le1,
  },
  {
    id: 11,
    name: 'Copa',
    slug: 'copa',
    type: 'Serviços',
    description: 'Neste local você pode encontrar a Copa.',
    image: imagesSrc.dcPoints.le1,
  },
  {
    id: 12,
    name: 'Lig',
    slug: 'lig',
    type: 'Lig',
    description: 'Neste local você pode encontrar o LIG.',
    image: imagesSrc.dcPoints.le1,
  },
  {
    id: 13,
    name: 'Reuniões',
    slug: 'reunioes',
    type: 'Reunião',
    description: 'Neste local você pode encontrar o Espaço para Reuniões.',
    image: imagesSrc.dcPoints.le1,
  },
  {
    id: 14,
    name: 'Chefia',
    slug: 'chefia',
    type: 'Chefia',
    description: 'Neste local você pode encontrar a Chefia.',
    image: imagesSrc.dcPoints.le1,
  },
  {
    id: 15,
    name: 'Graduação',
    slug: 'graduacao',
    type: 'Graduação',
    description: 'Neste local você pode encontrar o Espaço para Graduação.',
    image: imagesSrc.dcPoints.le1,
  },
  {
    id: 16,
    name: 'Recepção',
    slug: 'recepcao',
    type: 'Recepção',
    description: 'Neste local você pode encontrar a Recepção.',
    image: imagesSrc.dcPoints.le1,
  },
  {
    id: 17,
    name: 'Home',
    slug: 'home',
    type: 'Home',
    description: 'Neste local você pode encontrar o salão principal do DC.',
    image: imagesSrc.dcPoints.le1,
  },
];

export const ros_states = {
  0: 'PENDING',
  1: 'ACTIVE',
  2: 'PREEMPTED',
  3: 'SUCCEEDED',
  4: 'ABORTED',
  5: 'REJECTED',
  6: 'PREEMPTING',
  7: 'RECALLING',
  8: 'RECALLED',
  9: 'LOST',
};

export const ros_comm_state = {
  0: 'WAITING_FOR_GOAL_ACK',
  1: 'PENDING',
  2: 'ACTIVE',
  3: 'WAITING_FOR_RESULT',
  4: 'WAITING_FOR_CANCEL_ACK',
  5: 'RECALLING',
  6: 'PREEMPTING',
  7: 'DONE',
  8: 'LOST',
};

export const pointsMapped = [
  {
    point: points[0],
    position: { top: 40, left: 30 },
  },
  {
    point: points[1],
    position: { top: 40, left: 130 },
  },
  {
    point: points[2],
    position: { top: 40, left: 230 },
  },
  {
    point: points[3],
    position: { top: 40, left: 330 },
  },
  {
    point: points[4],
    position: { top: 90, left: 430 },
  },
  {
    point: points[5],
    position: { top: 40, left: 510 },
  },
  {
    point: points[6],
    position: { top: 40, left: 610 },
  },
  {
    point: points[7],
    position: { top: 40, left: 730 },
  },
  {
    point: points[8],
    position: { top: 100, left: 805 },
  },
  {
    point: points[9],
    position: { top: 165, left: 40 },
  },
  {
    point: points[10],
    position: { top: 235, left: 40 },
  },
  {
    point: points[11],
    position: { top: 305, left: 35 },
  },
  {
    point: points[15],
    position: { top: 360, left: 520 },
  },
];
