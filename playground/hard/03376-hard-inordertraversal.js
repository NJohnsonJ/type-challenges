"use strict";
/*
  3376 - InorderTraversal
  -------
  by jiangshan (@jiangshanmeta) #medium #object

  ### Question

  Implement the type version of binary tree inorder traversal.

  For example:

  ```typescript
  const tree1 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  } as const

  type A = InorderTraversal<typeof tree1> // [1, 3, 2]
  ```

  > View on GitHub: https://tsch.js.org/3376
*/
Object.defineProperty(exports, "__esModule", { value: true });
const tree1 = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: null,
    },
};
const tree2 = {
    val: 1,
    left: null,
    right: null,
};
const tree3 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null,
    },
    right: null,
};
const tree4 = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: null,
        right: null,
    },
};
/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3376/answer
  > View solutions: https://tsch.js.org/3376/solutions
  > More Challenges: https://tsch.js.org
*/
