import { expect, test } from '@jest/globals';

import calcOrderPrice from './after';
import calcOrderPrice2 from './after2';

test('Calculates correctly', () => {
    const actual = calcOrderPrice('Trumpet-2453 2');
    const expected = 100;
    expect(actual).toEqual(100);
});

test('Calculates correctly', () => {
    const actual = calcOrderPrice2('Trumpet-2453 2');
    const expected = 100;
    expect(actual).toEqual(100);
});
