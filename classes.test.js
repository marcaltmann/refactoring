import { expect, test } from '@jest/globals';

import { Animal, Crocodile, Elephant } from './classes.js';

function createElephant() {
  return new Elephant('elephant');
}

test('test elephant', () => {
  ele = createElephant();

  expect(ele.name).toEqual('elephant');
});

test('test version getter', () => {
  ele = createElephant();

  expect(ele.version).toEqual('v0.1.0');
});

test('calling getter throws exception', () => {
  ele = createElephant();

  expect(() => ele.version()).toThrow(TypeError);
});

test('calling private member with getter', () => {
  ele = createElephant();

  expect(ele.age).toEqual(0);
});

test('accessing static field', () => {
  const animalCountBefore = Animal.animalCount;

  ele = createElephant();

  expect(Animal.animalCount).toEqual(animalCountBefore + 1);
});

test('accessing setter', () => {
  ele = createElephant();

  ele.age = 15;

  expect(ele.age).toEqual(15);
});
