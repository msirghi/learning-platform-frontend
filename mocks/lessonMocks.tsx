import { LessonStatus } from '../common/enums';
import { Lesson } from '../common/types';

export const lessonMock: Lesson[] = [
  {
    id: '1',
    status: LessonStatus.ENDED,
    topic: 'Topic 1',
    title: `Lorem ipsum dolor sit amet.`,
    time: '8:00'
  },
  {
    id: '2',
    status: LessonStatus.ONGOING,
    topic: `Lorem ipsum dolor sit amet.`,
    title: 'Lesson 2',
    time: '9:30'
  },
  { id: '3', status: LessonStatus.NOT_STARTED, topic: 'Topic 3', title: 'Lesson 3', time: '11:00' },
  { id: '4', status: LessonStatus.NOT_STARTED, topic: 'Topic 4', title: 'Lesson 4', time: '13:00' }
];
