import { Course } from '../../../common/types';

export default (req, res) => {
  const id = req.query.id;
  if (req.query && id) {
    const course = coursesMock.find((course) => course.id === id);

    if (!course) {
      res.statusCode = 404;
      res.send({ message: 'Not found' });
      return;
    }
    res.statusCode = 200;
    res.send({ ...course });
    return;
  }
  res.statusCode = 400;
  res.send({ message: 'Bad request' });
};

const coursesMock: Course[] = [
  {
    id: '1',
    name: 'Course 1',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero non illum est fuga beatae ab, assumenda reiciendis nesciunt numquam similique!`,
    coverImg:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    teacherImg:
      'https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg',
    teacherName: 'Teacher 1'
  },
  {
    id: '2',
    name: 'Course 2',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    coverImg: 'https://www.w3schools.com/w3css/img_lights.jpg',
    teacherImg:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    teacherName: 'Teacher 2'
  },
  {
    id: '3',
    name: 'Course 3',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    coverImg:
      'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
    teacherImg:
      'https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s1200c/3_Beautiful-girl-with-a-gentle-smile.jpg',
    teacherName: 'Teacher 3'
  },
  {
    id: '4',
    name: 'Course 4',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    coverImg:
      'https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg',
    teacherImg: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg',
    teacherName: 'Teacher 4'
  },
  {
    id: '5',
    name: 'Course 5',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    teacherImg: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg',
    teacherName: 'Teacher 5'
  },
  {
    id: '6',
    name: 'Course 6',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    teacherImg: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg',
    teacherName: 'Teacher 6'
  },
  {
    id: '7',
    name: 'Course 7',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    teacherImg: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg',
    teacherName: 'Teacher 7'
  },
  {
    id: '8',
    name: 'Course 8',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    teacherImg: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg',
    teacherName: 'Teacher 8'
  },
  {
    id: '9',
    name: 'Course 9',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    teacherImg: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg',
    teacherName: 'Teacher 9'
  },
  {
    id: '10',
    name: 'Course 10',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    teacherImg: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg',
    teacherName: 'Teacher 10'
  },
  {
    id: '11',
    name: 'Course 11',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    teacherImg: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg',
    teacherName: 'Teacher 11'
  },
  {
    id: '12',
    name: 'Course 12',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    teacherImg: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg',
    teacherName: 'Teacher 12'
  },
  {
    id: '13',
    name: 'Course 13',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    teacherImg: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg',
    teacherName: 'Teacher 13'
  }
];
