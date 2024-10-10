type myType = 'a' | 'b' | 'c';
type myObj = {
    'a': 1,
    'b': 2,
    'c': 3
}

type extractTest = Extract<myType, 'a' | 'b'>;
type excludeTest = Exclude<myType, 'a' | 'b'>;
const a: extractTest = 'a';
const c: excludeTest = 'c'

type pickTest = Pick<myObj, 'a' | 'b'>;
type omitTest = Omit<myObj, 'a' | 'b'>;
const d: omitTest = {
    c: 3
}
const b: pickTest = {
    a: 1,
    b: 2,
};