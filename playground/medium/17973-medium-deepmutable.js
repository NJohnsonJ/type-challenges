"use strict";
/*
  17973 - DeepMutable
  -------
  by cutefcc (@cutefcc) #medium #readonly #deep

  ### Question

  Implement a generic DeepMutable<T> which make every parameter of an object - and its sub-objects recursively - mutable.

  For example

  ```ts
  type X = {
    readonly a: () => 1
    readonly b: string
    readonly c: {
      readonly d: boolean
      readonly e: {
        readonly g: {
          readonly h: {
            readonly i: true
            readonly j: "s"
          }
          readonly k: "hello"
        }
      }
    }
  }

  type Expected = {
    a: () => 1
    b: string
    c: {
      d: boolean
      e: {
        g: {
          h: {
            i: true
            j: "s"
          }
          k: "hello"
        }
      }
    }
  }

  type Todo = DeepMutable<X> // should be same as `Expected`
  ```

  You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.

  > View on GitHub: https://tsch.js.org/17973
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/17973/answer
  > View solutions: https://tsch.js.org/17973/solutions
  > More Challenges: https://tsch.js.org
*/
