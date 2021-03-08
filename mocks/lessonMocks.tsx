import { LessonStatus } from '../common/enums';
import { Lesson } from '../common/types';

export const lessonMock: Lesson[] = [
  {
    id: '22',
    status: LessonStatus.ENDED,
    topic: 'Topic 1',
    title: `Lorem ipsum dolor sit amet.`,
    time: '8:00',
    start: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      10,
      0,
      0,
      0
    ),
    end: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      10,
      30,
      0,
      0
    )
  },
  {
    id: '2',
    status: LessonStatus.ONGOING,
    topic: `Lorem ipsum dolor sit amet.`,
    title: 'Lesson 2',
    time: '9:30',
    start: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      13,
      0,
      0,
      0
    ),
    end: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      14,
      0,
      0,
      0
    )
  },
  {
    id: '3',
    status: LessonStatus.NOT_STARTED,
    topic: 'Topic 3',
    title: 'Lesson 3',
    time: '11:00',
    start: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      14,
      30,
      0,
      0
    ),
    end: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      15,
      30,
      0,
      0
    )
  },
  {
    id: '4',
    status: LessonStatus.NOT_STARTED,
    topic: 'Topic 4',
    title: 'Lesson 4',
    time: '13:00',
    start: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      16,
      0,
      0,
      0
    ),
    end: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      17,
      30,
      0,
      0
    )
  }
];
