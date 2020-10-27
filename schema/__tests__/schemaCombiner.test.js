/* eslint-disable no-undef */
const { combineSchema } = require('../schemaCombiner');

test('combines multiple strings into 1', () => {
  expect(combineSchema(['string1', 'string2'])).toBe('\nstring1\nstring2');
});
