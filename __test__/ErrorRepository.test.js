import ErrorRepository from '../src/ErrorRepository';

test('should show description of the error', () => {
  const errorsList = new ErrorRepository();
  errorsList.errors.set(404, 'Not Found');
  errorsList.errors.set(503, 'Service Unavailable');
  errorsList.errors.set(403, 'Forbidden');

  expect(errorsList.translate(404)).toBe('Not Found');
});

test('should show "Unknown error"', () => {
  const errorsList = new ErrorRepository();
  errorsList.errors.set(404, 'Not Found');
  errorsList.errors.set(503, 'Service Unavailable');
  errorsList.errors.set(403, 'Forbidden');

  expect(errorsList.translate(507)).toBe('Unknown error');
});
