"use strict";
/*
  147 - C-printf Parser
  -------
  by Pig Fang (@g-plane) #hard #template-literal

  ### Question

  There is a function in C language: `printf`. This function allows us to print something with formatting. Like this:

  ```c
  printf("The result is %d.", 42);
  ```

  This challenge requires you to parse the input string and extract the format placeholders like `%d` and `%f`. For example, if the input string is `"The result is %d."`, the parsed result is a tuple `['dec']`.

  Here is the mapping:

  ```typescript
  type ControlsMap = {
    c: 'char',
    s: 'string',
    d: 'dec',
    o: 'oct',
    h: 'hex',
    f: 'float',
    p: 'pointer',
  }
  ```

  > View on GitHub: https://tsch.js.org/147
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/147/answer
  > View solutions: https://tsch.js.org/147/solutions
  > More Challenges: https://tsch.js.org
*/
