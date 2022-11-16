// Glossary
// --------

/*
  - `Inference` is the process of TypeScript inferring the type
  of a variable
  - `Tuples` are arrays with a fixed number of elements. JS really
  doesn't have them, but TS does.
*/

// Simple example of generics
// --------------------------

const getLastItemArray = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};

const arrNumbers = getLastItemArray([1, 2, 3, '1', { id: 1 }]);
const arrStrings = getLastItemArray(['apple', 'orange']);
const arrObjects = getLastItemArray([{ id: 1 }, { id: 2 }, { id: 3 }]);

// Show example of tuples and generics
// --------------------------

const makeArray = <X, Y = number>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const [first, second] = makeArray('1', '2');

const example = makeArray<string, number>('1', 2);

// Constrain/extend what generics can be passed in
// --------------------------

const getUsersFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
): T => {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  };
};

const user = getUsersFullName({ firstName: 'Son', lastName: 'Goku', age: 30 });

// Generics in interfaces
// --------------------------

interface Tab1 {
  id: string;
  position: number;
  data: any;
}

interface Tab2<T> {
  id: string;
  position: number;
  data: T;
}

interface IData {
  id: number;
  name: string;
}

const tab: Tab2<IData> = {
  id: 'tab1',
  position: 1,
  data: { id: 1, name: 'John Doe' },
};

export default {};
