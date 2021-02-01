import { coursesMock } from '../../../mocks/coursesMock';

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
