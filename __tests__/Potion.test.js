const Potion = require('../lib/Potion')

test('should create a health potion object', () => {
  const potion = new Potion('health')

  expect(potion.name).toBe('health')
  expect(potion.value).toEqual(expect.any(Number))
})

test('should create a random potion object', () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
})
