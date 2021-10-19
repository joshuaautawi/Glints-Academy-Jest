const reverse = require('../js/reverse');

test('reverses a string', () => {
  expect(reverse('pink')).toBe('knip');
});

test('reverses a string with case sensitivity', () => {
  expect(reverse('PiNk')).toBe('kNiP');
});

test('reverses a string with spaces', () => {
  expect(reverse('pi nk')).toBe('kn ip');
});