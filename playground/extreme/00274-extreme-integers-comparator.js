"use strict";
/*
  274 - Integers Comparator
  -------
  by Pig Fang (@g-plane) #extreme #template-literal #math

  ### Question

  Implement a type-level integers comparator. We've provided an enum for indicating the comparison result, like this:

  - If `a` is greater than `b`, type should be `Comparison.Greater`.
  - If `a` and `b` are equal, type should be `Comparison.Equal`.
  - If `a` is lower than `b`, type should be `Comparison.Lower`.

  **Note that `a` and `b` can be positive integers or negative integers or zero, even one is positive while another one is negative.**

  > View on GitHub: https://tsch.js.org/274
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* _____________ Your Code Here _____________ */
var Comparison;
(function (Comparison) {
    Comparison[Comparison["Greater"] = 0] = "Greater";
    Comparison[Comparison["Equal"] = 1] = "Equal";
    Comparison[Comparison["Lower"] = 2] = "Lower";
})(Comparison || (Comparison = {}));
/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/274/answer
  > View solutions: https://tsch.js.org/274/solutions
  > More Challenges: https://tsch.js.org
*/
