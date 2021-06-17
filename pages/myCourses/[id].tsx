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
  const { req } = context;
  const protocol = req.headers.referer.split(':')[0];
  const host = req.headers.host;
  const course = await fetch(`${protocol}://${host}/api/courses/${id}`);
  const parsed = await course.json();

  return {
    props: {
      course: parsed,
      namespacesRequired: []
    }
  };
};
