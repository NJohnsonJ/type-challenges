/*
  5 - Get Readonly Keys
  -------
  by Anthony Fu (@antfu) #extreme #utils #object-keys

  ### Question

  Implement a generic `GetReadonlyKeys<T>` that returns a union of the readonly keys of an Object.

  For example

  ```ts
  interface Todo {
    readonly title: string
    readonly description: string
    completed: boolean
  }

  type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
  ```

  > View on GitHub: https://tsch.js.org/5
*/

/* _____________ Your Code Here _____________ */

type GetReadonly<T> = {
  [K in keyof T as Readonly<T>[K] extends T[K] ? K : never]: T[K];
};

type GetReadonlyKeys<T> = keyof GetReadonly<T>;

type A = Readonly<Todo1> extends Todo1 ? true : false;

/* _____________ Test Cases _____________ */
import type {Debug, Equal, Expect} from '@type-challenges/utils'

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5/answer
  > View solutions: https://tsch.js.org/5/solutions
  > More Challenges: https://tsch.js.org
*/
