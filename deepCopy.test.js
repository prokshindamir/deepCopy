import deepCopy from '../src/deepCopy';

test('Копирует объект', () => {
    const obj = { a: 1 };
    expect(deepCopy(obj)).toEqual(obj);
});
