const { multiply,addthreenumbers } = require('./domath');

/**
 * Multiply to be defined
 */
 
 
test('Multiply function exists', () => {
  expect(multiply).toBeDefined();
});



test('multiply 2 * 2 to equal 4', mulTest);

function mulTest() {
  expect(multiply(2, 2)).toBe(4);
}


test('Addthreenumbers function exists', () => {
  expect(addthreenumbers).toBeDefined();
});


test('add 3 + 3 + 3 to equal 9', addThree);

function addThree() {
  expect(addthreenumbers(3, 3, 3)).toBe(9);
}