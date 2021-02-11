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

export interface ChatMessage {
  id: string | number;
  message: string;
  author: string;
  date: Date;
}

export interface Student {
  id: string | number;
  firstName: string;
  lastName: string;
}

export interface ChatTheme {
  color: string;
}
