import { LessonStatus } from './enums';

export interface MenuItem {
  icon: React.ComponentClass<{ className: string }>;
  link: string;
  label: string;
  className?: string;
}

export interface News {
  id: string;
  date: Date;
  title: string;
  description: string;
}

export interface Lesson {
  id: string;
  title: string;
  topic: string;
  time: string;
  status: LessonStatus;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  coverImg?: string;
  teacherImg?: string;
  teacherName?: string;
}
