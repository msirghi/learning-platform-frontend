import { GradeType } from '../common/enums';
import { Grade } from '../common/types';

export const GradesMock: Grade[] = [
  {
    id: '1',
    course: 'Mathematics',
    marks: [
      {
        mark: '9.12',
        test: GradeType.ATTESTATION_1,
        updatedAt: new Date()
      },
      {
        mark: '9.12',
        test: GradeType.ATTESTATION_2,
        updatedAt: new Date()
      },
      {
        mark: '9.12',
        test: GradeType.EXAM,
        updatedAt: new Date()
      },
      {
        mark: '9.12',
        test: GradeType.INDIVIDUAL_WORK,
        updatedAt: new Date()
      },
      {
        mark: '9.12',
        test: GradeType.INDIVIDUAL_WORK,
        updatedAt: new Date()
      }
    ],
    teacher: 'Teacher 1',
    year: 'First year',
    maxPresence: 15,
    presence: 3
  },
  {
    id: '2',
    course: 'Computer Science Computer Science',
    marks: [
      {
        mark: '9.12',
        test: GradeType.ATTESTATION_1,
        updatedAt: new Date()
      },
      {
        mark: '9.12',
        test: GradeType.ATTESTATION_2,
        updatedAt: new Date()
      },
      {
        mark: '9.12',
        test: GradeType.EXAM,
        updatedAt: new Date()
      },
      {
        mark: '9.12',
        test: GradeType.INDIVIDUAL_WORK,
        updatedAt: new Date()
      }
    ],
    teacher: 'Teacher 2',
    year: 'First year',
    maxPresence: 15,
    presence: 7
  },
  {
    id: '3',
    course: 'Biology',
    marks: [
      {
        mark: '9.12',
        test: GradeType.ATTESTATION_1,
        updatedAt: new Date()
      },
      {
        mark: '9.12',
        test: GradeType.ATTESTATION_2,
        updatedAt: new Date()
      },
      {
        mark: '9.12',
        test: GradeType.EXAM,
        updatedAt: new Date()
      }
    ],
    teacher: 'Teacher 3',
    year: 'First year',
    maxPresence: 20,
    presence: 15
  },
  {
    id: '4',
    course: 'Physics',
    marks: [
      {
        mark: '9.12',
        test: GradeType.ATTESTATION_1,
        updatedAt: new Date()
      },
      {
        mark: '9.12',
        test: GradeType.ATTESTATION_2,
        updatedAt: new Date()
      },
      {
        mark: '9.12',
        test: GradeType.EXAM,
        updatedAt: new Date()
      }
    ],
    teacher: 'Teacher 4',
    year: 'First year',
    maxPresence: 20,
    presence: 19
  }
];
