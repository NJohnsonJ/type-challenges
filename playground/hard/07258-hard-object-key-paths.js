"use strict";
/*
  7258 - Object Key Paths
  -------
  by CattChen (@ChenKS12138) #hard #object-keys

  ### Question

  Get all possible paths that could be called by [_.get](https://lodash.com/docs/4.17.15#get) (a lodash function) to get the value of an object

  ```typescript
  type T1 = ObjectKeyPaths<{ name: string; age: number }>; // expected to be 'name' | 'age'
  type T2 = ObjectKeyPaths<{
    refCount: number;
    person: { name: string; age: number };
  }>; // expected to be 'refCount' | 'person' | 'person.name' | 'person.age'
  type T3 = ObjectKeyPaths<{ books: [{ name: string; price: number }] }>; // expected to be the superset of 'books' | 'books.0' | 'books[0]' | 'books.[0]' | 'books.0.name' | 'books.0.price' | 'books.length' | 'books.find'
  ```

  > View on GitHub: https://tsch.js.org/7258
*/
Object.defineProperty(exports, "__esModule", { value: true });
const ref = {
    count: 1,
    person: {
        name: 'cattchen',
        age: 22,
        books: ['book1', 'book2'],
        pets: [
            {
                type: 'cat',
            },
        ],
    },
};
/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/7258/answer
  > View solutions: https://tsch.js.org/7258/solutions
  > More Challenges: https://tsch.js.org
*/
