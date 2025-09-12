/*
 * Classes in JS
 * TODO: Use debugger
 */

class Animal {
  #age = 0;

  static animalCount = 0;

  constructor(name) {
    if (!name) {
      throw new ReferenceError('name is required')
    }
    if (typeof name !== 'string') {
      throw new TypeError('name must be string')
    }
    this.name = name;
    Animal.animalCount += 1;
  }

  makeSound() {
    throw new Error('not implemented');
  }

  get version() {
    return 'v0.1.0';
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    console.assert(Number.isInteger(newAge) && newAge >= 0);
    this.#age = newAge;
  }
}

class Elephant extends Animal {
  makeSound() {
    console.log('Trumpet');
  }
}

class Crocodile extends Animal {
  makeSound() {
    console.log('Roar');
  }
}

export { Animal, Crocodile, Elephant };
