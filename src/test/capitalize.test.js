import { capitalize } from '../capitalize.js';
import assert from 'power-assert';

assert(capitalize('hello') === 'Hello');

assert(capitalize('') === '');

console.log('Все тесты пройдены!');