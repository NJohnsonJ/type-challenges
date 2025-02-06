"use strict";
/*
  9160 - Assign
  -------
  by zhangxiaofan (@workkk98) #hard #object #array

  ### Question

  You have a target object and a source array of objects. You need to copy property from source to target, if it has the same property as the source, you should always keep the source property, and drop the target property. (Inspired by the `Object.assign` API)

  ### example

  ```ts
  type Target = {
    a: 'a'
  }

  type Origin1 = {
    b: 'b'
  }

  // type Result = Assign<Target, [Origin1]>
  type Result = {
    a: 'a'
    b: 'b'
  }
  ```


  ```ts
  type Target = {
    a: 'a'
    d: {
      hi: 'hi'
    }
  }

  type Origin1 = {
    a: 'a1',
    b: 'b'
  }


  type Origin2 = {
    b: 'b2',
    c: 'c'
  }

  type Answer = {
     a: 'a1',
     b: 'b2',
     c: 'c'
     d: {
        hi: 'hi'
    }
  }
  ```

  > View on GitHub: https://tsch.js.org/9160
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9160/answer
  > View solutions: https://tsch.js.org/9160/solutions
  > More Challenges: https://tsch.js.org
*/
