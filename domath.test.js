const { multiply } = require('./domath');

/**
 * Multiply to be defined
 */
 
 
 test('Multiply function exists', () => {
  expect(multiply).toBeDefined();
});


test('multiply 5 * 5 to equal 25', mulTest);

function mulTest() {
  expect(multiply(2, 2)).toBe(25);
}




