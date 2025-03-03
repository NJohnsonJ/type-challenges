/*
  17 - Currying 1
  -------
  by Anthony Fu (@antfu) #hard #array

  ### Question

  > TypeScript 4.0 is recommended in this challenge

  [Currying](https://en.wikipedia.org/wiki/Currying) is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.

  For example:

  ```ts
  const add = (a: number, b: number) => a + b
  const three = add(1, 2)

  const curriedAdd = Currying(add)
  const five = curriedAdd(2)(3)
  ```

  The function passed to `Currying` may have multiple arguments, you need to correctly type it.

  In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.

  > View on GitHub: https://tsch.js.org/17
*/

/* _____________ Your Code Here _____________ */

type Head<P extends any[]> = P extends [any, ...infer Tail]
    ? P extends [...infer F, ...Tail]
        ? F
        : never
    : never;

type Curried<Fn> =
    Fn extends (...args: infer P) => infer R ?
        P['length'] extends 0 | 1
            ? (...args: P) => R
            : P extends [any, ...infer Args]
                ? (...args: Head<P>) => Curried<(...args: Args) => R>
                : never
        : never;

declare function Currying<Fn extends Function>(fn: Fn): Curried<Fn>;

/* _____________ Test Cases _____________ */
import type {Equal, Expect} from '@type-challenges/utils'

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)
const curried3 = Currying(() => true)

type cases = [
    Expect<Equal<
        typeof curried1,
        (a: string) => (b: number) => (c: boolean) => true
    >>,
    Expect<Equal<
        typeof curried2,
        (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
    >>,
    Expect<Equal<typeof curried3, () => true>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/17/answer
  > View solutions: https://tsch.js.org/17/solutions
  > More Challenges: https://tsch.js.org
*/
