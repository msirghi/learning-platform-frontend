import React from 'react';
import { Course } from '../../common/types';
import { SiteWrapper } from '../../components/common/SiteWrapper';

type Props = {
  course: Course;
};

export default function CoursePage({ course }: Props) {
  return (
    <div>
      <SiteWrapper>
        <CoursePage course={course} />
      </SiteWrapper>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;

  const course = await fetch(`http://localhost:3000/api/courses/${id}`);
  const parsed = await course.json();

  return {
    props: {
      course: parsed
    }
  };
}
