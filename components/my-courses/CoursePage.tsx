import React from 'react';
import { Course } from '../../common/types';

type Props = {
  course: Course;
};

export const CoursePage: React.FC<Props> = ({ course }) => {
  return <div>Course</div>;
};
