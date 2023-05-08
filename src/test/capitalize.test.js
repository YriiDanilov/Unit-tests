import capitalize from '../capitalize.js';

test('capitalize', () => {
    expect(capitalize('hello')).toEqual('Hello');
    expect(capitalize('')).toEqual('');
})