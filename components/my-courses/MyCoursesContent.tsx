import React, { useEffect, useState, Suspense, useCallback } from 'react';
import { coursesMock } from '../../mocks/coursesMock';
import styles from '../../styles/modules/MyCourses.module.scss';
import { MyCoursesHeader } from './MyCoursesHeader';
import { Course } from '../../common/types';
import { FullscreenSpinner } from '../common/spinners/FullscreenSpinner';
import { CourseNotFound } from './CourseNotFound';
import { PageDots } from './pageDots/PageDots';
import { MAX_COURSE_CARDS_PER_PAGE } from '../../common/constants/common.constants';
import { useWindowSize } from '../common/hooks/useWindowResize';
import { CardSkeleton } from './cardSkeleton/CardSkeleton';

let initCourses: Course[] = [];

const LazyCourseCard = React.lazy(() => import('./courseCard/CourseCard'));

export const MyCoursesContent = () => {
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [width] = useWindowSize();

  useEffect(() => {
    initCourses = coursesMock;
    setFilteredCourses(initCourses.slice(0, currentPage + MAX_COURSE_CARDS_PER_PAGE - 1));
  }, []);

  const filterCourses = (val: string) => {
    if (!val) {
      setFilteredCourses(initCourses.slice(0, currentPage + MAX_COURSE_CARDS_PER_PAGE - 1));
      return;
    }

    const filtered = coursesMock.filter(
      ({ name, description }) =>
        name.toLowerCase().includes(val.toLowerCase()) ||
        description.toLowerCase().includes(val.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  const onSearchInputChange = useCallback((value: string) => {
    setSearchValue(value);
    filterCourses(value);
  }, []);

  const onPageChange = (page: number) => {
    window.scrollTo({ top: 0 });
    setCurrentPage(page);
    const start = (page - 1) * MAX_COURSE_CARDS_PER_PAGE;
    const end = page * MAX_COURSE_CARDS_PER_PAGE;
    setFilteredCourses(initCourses.slice(start, end));
  };

  if (!filteredCourses) {
    return <FullscreenSpinner />;
  }

  return (
    <div>
      <MyCoursesHeader onSearchInputChange={onSearchInputChange} searchValue={searchValue} />
      <div className={styles.content}>
        {filteredCourses.map((course) => {
          return (
            <div key={course.id} className={styles.contentCard}>
              <Suspense fallback={<CardSkeleton />}>
                <LazyCourseCard course={course} />
              </Suspense>
            </div>
          );
        })}
        {filteredCourses.length === 0 && <CourseNotFound />}
      </div>
      {initCourses.length > MAX_COURSE_CARDS_PER_PAGE && searchValue.length === 0 && (
        <PageDots
          showDots={width > 768}
          onPageChange={onPageChange}
          amount={+(initCourses.length / MAX_COURSE_CARDS_PER_PAGE).toFixed()}
          currentTab={currentPage}
        />
      )}
    </div>
  );
};
