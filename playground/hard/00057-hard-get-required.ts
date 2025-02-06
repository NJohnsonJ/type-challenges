/*
  57 - Get Required
  -------
  by Zheeeng (@zheeeng) #hard #utils #infer

  ### Question

  Implement the advanced util type `GetRequired<T>`, which remains all the required fields

  For example

  ```ts
  type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }
  ```

  > View on GitHub: https://tsch.js.org/57
*/

/* _____________ Your Code Here _____________ */

type GetRequired<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never ]: T[K];
}

type A = { a: number };
type OptA = { a?: number };

type B = Expect<OptA extends A ? true : false>
type C = Expect<A extends OptA ? true : false>

/* _____________ Test Cases _____________ */
import type {Debug, Equal, Expect} from '@type-challenges/utils'

// type A = Debug<GetRequired<{ foo: number, bar?: string }>>;

type cases = [
  Expect<Equal<GetRequired<{ foo: number, bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined, bar?: undefined }>, { foo: undefined }>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/57/answer
  > View solutions: https://tsch.js.org/57/solutions
  > More Challenges: https://tsch.js.org
*/
