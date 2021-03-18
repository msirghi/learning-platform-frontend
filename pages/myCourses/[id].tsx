import { Button } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import { Course } from '../../common/types';
import { SiteWrapper } from '../../components/common/SiteWrapper';
import { CoursePage } from '../../components/my-courses/coursePage/CoursePage';
import { GetServerSideProps } from 'next';

type Props = {
  course: Course;
};

export default function SingleCoursePage({ course }: Props) {
  return (
    <div>
      <Head>
        <title>{course.name}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SiteWrapper>
        <CoursePage course={course} />
      </SiteWrapper>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id;

  const course = await fetch(`http://localhost:3000/api/courses/${id}`);
  const parsed = await course.json();

  return {
    props: {
      course: parsed,
      namespacesRequired: []
    }
  };
};
