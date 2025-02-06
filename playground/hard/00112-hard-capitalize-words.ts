/*
  112 - Capitalize Words
  -------
  by Anthony Fu (@antfu) #hard #template-literal

  ### Question

  Implement `CapitalizeWords<T>` which converts the first letter of **each word of a string** to uppercase and leaves the rest as-is.

  For example

  ```ts
  type capitalized = CapitalizeWords<'hello world, my friends'> // expected to be 'Hello World, My Friends'
  ```

  > View on GitHub: https://tsch.js.org/112
*/

/* _____________ Your Code Here _____________ */

// type Letter =
//     | 'a'
//     | 'b'
//     | 'c'
//     | 'd'
//     | 'e'
//     | 'f'
//     | 'g'
//     | 'h'
//     | 'i'
//     | 'j'
//     | 'k'
//     | 'l'
//     | 'm'
//     | 'n'
//     | 'o'
//     | 'p'
//     | 'q'
//     | 'r'
//     | 's'
//     | 't'
//     | 'u'
//     | 'v'
//     | 'w'
//     | 'x'
//     | 'y'
//     | 'z';
//
// type ScanWord<S extends string> = S extends `${infer C}${infer R}` ? Lowercase<C> extends Letter ? `${C}${ScanWord<R>}` : '' : '';
//
// type SplitWords<S extends string, W extends string = ScanWord<S>> = S extends `${W}${infer R}` ? R extends `${string}${infer N}` ? [W, ...SplitWords<N>] : [W] : [];
//
// type Tail<S extends unknown[]> = S extends [unknown, ...infer R] ? R : [];
//
// type CapitalizeWords<S extends string, Words extends string[] = SplitWords<S>> =
//     Words['length'] extends 0
//         ? ''
//         : S extends `${infer C}${Words[0]}${infer R}`
//             ? `${C}${Capitalize<Words[0]>}${CapitalizeWords<R, Tail<Words>>}`
//             : Words[0]
//     ;

type CapitalizeWords<S extends string, W extends string = ''> = S extends `${infer C}${infer R}`
    ? Uppercase<C> extends Lowercase<C>
        ? `${Capitalize<W>}${C}${CapitalizeWords<R>}`
        : CapitalizeWords<R, `${W}${C}`>
    : `${Capitalize<W>}`;

/* _____________ Test Cases _____________ */
import type {Equal, Expect} from '@type-challenges/utils'

type A = CapitalizeWords<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq'>

type cases = [
    Expect<Equal<CapitalizeWords<'foobar'>, 'Foobar'>>,
    Expect<Equal<CapitalizeWords<'FOOBAR'>, 'FOOBAR'>>,
    Expect<Equal<CapitalizeWords<'foo bar'>, 'Foo Bar'>>,
    Expect<Equal<CapitalizeWords<'foo bar hello world'>, 'Foo Bar Hello World'>>,
    Expect<Equal<CapitalizeWords<'foo bar.hello,world'>, 'Foo Bar.Hello,World'>>,
    Expect<Equal<CapitalizeWords<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq'>, 'Aa!Bb@Cc#Dd$Ee%Ff^Gg&Hh*Ii(Jj)Kk_Ll+Mm{Nn}Oo|Pp🤣Qq'>>,
    Expect<Equal<CapitalizeWords<''>, ''>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/112/answer
  > View solutions: https://tsch.js.org/112/solutions
  > More Challenges: https://tsch.js.org
*/
