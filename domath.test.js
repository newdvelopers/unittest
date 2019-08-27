const { multiply } = require('./domath');

/**
 * Multiply to be defined
 */
 
 
 test('Multiply function exists', () => {
  expect(multiply).toBeDefined();
});


test('multiply 2 * 2 to equal 4', mulTest);

function mulTest() {
  expect(multiply(2, 2)).toBe(42);
}




