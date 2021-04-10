import { validateForm } from '../src/client/js/validateForm';

jest.spyOn(window, 'alert').mockImplementation(() => {});

test('check if validateForm gives alert when no text was written', () => {
  validateForm('');
  expect(window.alert).toBeCalledWith('Text must be filled out');
});
