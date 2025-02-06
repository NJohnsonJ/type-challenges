"use strict";
/*
  472 - Tuple to Enum Object
  -------
  by Ryo Hanafusa (@softoika) #hard #tuple #template-literal

  ### Question

  The enum is an original syntax of TypeScript (it does not exist in JavaScript). So it is converted to like the following form as a result of transpilation:
  ```js
  let OperatingSystem;
  (function (OperatingSystem) {
      OperatingSystem[OperatingSystem["MacOS"] = 0] = "MacOS";
      OperatingSystem[OperatingSystem["Windows"] = 1] = "Windows";
      OperatingSystem[OperatingSystem["Linux"] = 2] = "Linux";
  })(OperatingSystem || (OperatingSystem = {}));
  ```
  In this question, the type should convert a given string tuple to an object that behaves like an enum.
  Moreover, the property of an enum is preferably a pascal case.
  ```ts
  Enum<["macOS", "Windows", "Linux"]>
  // -> { readonly MacOS: "macOS", readonly Windows: "Windows", readonly Linux: "Linux" }
  ```
  If `true` is given in the second argument, the value should be a number literal.
  ```ts
  Enum<["macOS", "Windows", "Linux"], true>
  // -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }
  ```

  > View on GitHub: https://tsch.js.org/472
*/
Object.defineProperty(exports, "__esModule", { value: true });
const OperatingSystem = ['macOS', 'Windows', 'Linux'];
const Command = ['echo', 'grep', 'sed', 'awk', 'cut', 'uniq', 'head', 'tail', 'xargs', 'shift'];
/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/472/answer
  > View solutions: https://tsch.js.org/472/solutions
  > More Challenges: https://tsch.js.org
*/
