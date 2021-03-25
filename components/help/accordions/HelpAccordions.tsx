import React, { useEffect, useState } from 'react';
import { HelpQuestion } from '../../../common/types';
import { HelpAccordion } from './accordion/HelpAccordion';
import styles from './HelpAccordions.module.scss';
import { QuestionNotFound } from './notFound/QuestionNotFound';

type Props = {
  searchInputValue: string;
};

// TODO: Get from translations
const questions: HelpQuestion[] = [
  {
    id: 1,
    title: 'Title 1',
    description: 'Description 1'
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'Description 2'
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'Description 3'
  },
  {
    id: 4,
    title: 'Title 4',
    description: 'Description 4'
  },
  {
    id: 5,
    title: 'Title 5',
    description: 'Description 5'
  },
  {
    id: 6,
    title: 'Title 6',
    description: 'Description 6'
  }
];

export const HelpAccordions: React.FC<Props> = ({ searchInputValue }) => {
  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  useEffect(() => {
    if (searchInputValue.length === 0) {
      setFilteredQuestions(questions);
      return;
    }
    const filtered = questions.filter(
      ({ title, description }) =>
        title.toLowerCase().includes(searchInputValue.toLowerCase()) ||
        description.toLowerCase().includes(searchInputValue.toLowerCase())
    );
    setFilteredQuestions(filtered);
  }, [searchInputValue]);

  return (
    <div className={styles.accordionContainer}>
      {filteredQuestions.map(({ id, title, description }) => {
        return <HelpAccordion key={id} title={title} description={description} />;
      })}

      {filteredQuestions.length === 0 && <QuestionNotFound searchInputValue={searchInputValue} />}
    </div>
  );
};
