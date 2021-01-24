import { coursesMock } from '../../../mocks/coursesMock';

export default (req, res) => {
  const id = req.query.id;
  const course = coursesMock.find((course) => course.id === id);

  if (!course) {
    res.statusCode = 404;
    res.json({ message: 'Not found' });
  }
  res.statusCode = 200;
  res.json({ ...course });
};
