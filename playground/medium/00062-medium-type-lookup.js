"use strict";
/*
  62 - Type Lookup
  -------
  by Anthony Fu (@antfu) #medium #union #map

  ### Question

  Sometimes, you may want to look up a type in a union by its attributes.

  In this challenge, we would like to get the corresponding type by searching for the common `type` field in the union `Cat | Dog`. In other words, we will expect to get `Dog` for `LookUp<Dog | Cat, 'dog'>` and `Cat` for `LookUp<Dog | Cat, 'cat'>` in the following example.

  ```ts
  interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
  }

  interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
  }

  type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
  ```

  > View on GitHub: https://tsch.js.org/62
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/62/answer
  > View solutions: https://tsch.js.org/62/solutions
  > More Challenges: https://tsch.js.org
*/
