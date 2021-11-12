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
    title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, nisi?',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit delectus beatae a exercitationem atque facilis labore repudiandae voluptatibus libero eum.'
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet?',
    description: 'Description 2'
  },
  {
    id: 3,
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing?',
    description: 'Description 3'
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit?',
    description: 'Description 4'
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, voluptatibus?',
    description: 'Description 5'
  },
  {
    id: 6,
    title: 'Lorem ipsum dolor sit?',
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
