import { sum } from '../sum.js';

test('sum', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum('1', '2')).toEqual(3);
    expect(sum(-1, -2)).toEqual(3);
}) 