import deepCopy from './deepCopy';

const obj = { a: 1, b: { c: 2 } };
const copy = deepCopy(obj);
console.log(copy);
