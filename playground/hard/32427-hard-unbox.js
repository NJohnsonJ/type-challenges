"use strict";
/*
  32427 - Unbox
  -------
  by Julian Coy (@eXamadeus) #hard #utils #promise #function #tuple #array

  ### Question

  How can we build a type that "unboxes" arrays, functions, promises, and tuples?

  Example:

  ```typescript
  Unbox<string> // string
  Unbox<()=>number> // number
  Unbox<boolean[]> // boolean
  Unbox<Promise<boolean>> // boolean
  ```

  Bonus: Can we make it recursive?

  ```typescript
  Unbox<() => () => () => () => number> // number
  ```

  Double Bonus: Can we control the recursion?

  ```typescript
  Unbox<() => () => () => () => number, 3> // () => number
  ```

  > View on GitHub: https://tsch.js.org/32427
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/32427/answer
  > View solutions: https://tsch.js.org/32427/solutions
  > More Challenges: https://tsch.js.org
*/
