import { generateHelloWorld } from './app';

test('return Hello World', () => {
  const actual = generateHelloWorld();
  expect(actual).toBe('Hello world.');
});
