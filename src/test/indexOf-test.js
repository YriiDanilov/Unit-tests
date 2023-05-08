import _ from 'lodash';
import assert from 'power-assert';

assert(_.indexOf([1, 5, 3, 4, 5, 6], 1) === 0);
assert(_.indexOf([1, 5, 3, 4, 5, 6], 5) === 1);
assert(_.indexOf([1, 5, 3, 4, 5, 6], 5, 2) === 4);
assert(_.indexOf([], 2) === -1);

console.log('Все тесты пройдены!')