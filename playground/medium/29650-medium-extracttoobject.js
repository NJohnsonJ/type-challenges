"use strict";
/*
  29650 - ExtractToObject
  -------
  by Maxim Bazuev (@bazuka5801) #medium #object

  ### Question

  Implement a type that extract prop value to the interface. The type takes the two arguments. The output should be an object with the prop values.
    Prop value is object.

    For example

  ```ts
  type Test = { id: '1', myProp: { foo: '2' }}
  type Result = ExtractToObject<Test, 'myProp'> // expected to be { id: '1', foo: '2' }
  ```

  > View on GitHub: https://tsch.js.org/29650
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/29650/answer
  > View solutions: https://tsch.js.org/29650/solutions
  > More Challenges: https://tsch.js.org
*/
