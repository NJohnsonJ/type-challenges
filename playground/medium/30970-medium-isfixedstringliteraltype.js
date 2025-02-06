"use strict";
/*
  30970 - IsFixedStringLiteralType
  -------
  by 蛭子屋双六 (@sugoroku-y) #medium

  ### Question

  Sometimes you may want to determine whether a string literal is a definite type. For example, when you want to check whether the type specified as a class identifier is a fixed string literal type.

  ```typescript
  type Action<ID extends string> = { readonly id: ID };
  ```

  Since it must be fixed, the following types must be determined as false.

  * never type
  * Union of string literal types
  * Template literal types with embedded string, number, bigint, boolean

  Determine whether the given type S is a definite string literal type.

  > View on GitHub: https://tsch.js.org/30970
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/30970/answer
  > View solutions: https://tsch.js.org/30970/solutions
  > More Challenges: https://tsch.js.org
*/
