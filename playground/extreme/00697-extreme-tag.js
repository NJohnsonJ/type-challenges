"use strict";
/*
  697 - Tag
  -------
  by null (@uid11) #extreme

  ### Question

  Despite the structural typing system in TypeScript, it is sometimes convenient to mark some types with tags, and so that these tags do not interfere with the ability to assign values  of these types to each other.

  For example, using tags, you can check that some value passes through the calls of the required functions, and in the correct order:
  ```ts
  const doA = <T extends string>(x: T) => {
    const result = x

    return result as Tag<typeof result, 'A'>
  }

  const doB = <T extends string>(x: T) => {
    const result = x

    return result as Tag<typeof result, 'B'>
  };

  const a = doA('foo')
  const b = doB(a)

  type Check0 = IsTrue<HasTags<typeof b, ['A', 'B']>>
  ```

  Write a function `Tag<B, T extends string>` that takes a type `B` other than `null` and `undefined` and returns a type labeled with the string literal type `T`.

  The labeled types must be mutually assignable with the corresponding original types:
  ```ts
  declare let x: string
  declare let y: Tag<string, 'A'>

  x = y = x
  ```

  When tagging a type already marked with a tag, a new tag must be added to the end of the list of all tags of the type:
  ```ts
  type T0 = Tag<{ foo: string }, 'A'>
  type T1 = Tag<T0, 'B'>

  type Check1 = IsTrue<HasExactTags<T1, ['A', 'B']>>
  ```

  Add some functions to check for type tags.

  `GetTags<B>` retrieves a list of all tags of a type `B`:
  ```ts
  type T2 = Tag<number, 'C'>

  type Check2 = IsTrue<Equal<GetTags<T2>, ['C']>>
  ```

  `HasTag<B, T extends string>` checks if type `B` is tagged with tag `T` (and returns `true` or `false`):
  ```ts
  type T3 = Tag<0 | 1, 'D'>

  type Check3 = IsTrue<HasTag<T3, 'D'>>
  ```

  `HasTags<B, T extends readonly string[]>` checks if type `B` is tagged in succession with tags from tuple `T`:
  ```ts
  type T4 = Tag<Tag<Tag<{}, 'A'>, 'B'>, 'C'>

  type Check4 = IsTrue<HasTags<T4, ['B', 'C']>>
  ```

  `HasExactTags<B, T extends readonly string[]>` checks if the list of all tags of type `B` is exactly equal to the `T` tuple:
  ```ts
  type T5 = Tag<Tag<unknown, 'A'>, 'B'>

  type Check5 = IsTrue<HasExactTags<T5, ['A', 'B']>>
  ```

  Finally, add type `UnTag<B>`, which removes all tags from type `B`:
  ```ts
  type T6 = Tag<{ bar: number }, 'A'>
  type T7 = UnTag<T6>

  type Check6 = IsFalse<HasTag<T7, 'A'>>
  ```

  > View on GitHub: https://tsch.js.org/697
*/
Object.defineProperty(exports, "__esModule", { value: true });
x0 = x1 = x0 = x2 = x0 = x3 = x0 = x4 = x0 = x5 = x0 = x6 = x0 = x7 = x0;
x1 = x2 = x1 = x3 = x1 = x4 = x1 = x5 = x1 = x6 = x1 = x7 = x1;
x2 = x3 = x2 = x4 = x2 = x5 = x2 = x6 = x2 = x7 = x2;
x3 = x4 = x3 = x5 = x3 = x6 = x3 = x7 = x3;
x4 = x5 = x4 = x6 = x4 = x7 = x4;
x5 = x6 = x5 = x7 = x5;
x6 = x7 = x6;
y0 = y1 = y0 = y2 = y0 = y3 = y0 = y4 = y0 = y5 = y0 = y6 = y0 = y7 = y0;
y1 = y2 = y1 = y3 = y1 = y4 = y1 = y5 = y1 = y6 = y1 = y7 = y1;
y2 = y3 = y2 = y4 = y2 = y5 = y2 = y6 = y2 = y7 = y2;
y3 = y4 = y3 = y5 = y3 = y6 = y3 = y7 = y3;
y4 = y5 = y4 = y6 = y4 = y7 = y4;
y5 = y6 = y5 = y7 = y5;
y6 = y7 = y6;
// @ts-expect-error
x0 = y0;
// @ts-expect-error
x1 = y1;
// @ts-expect-error
x2 = y2;
// @ts-expect-error
x3 = y3;
// @ts-expect-error
x4 = y4;
// @ts-expect-error
x5 = y5;
// @ts-expect-error
x6 = y6;
// @ts-expect-error
x7 = y7;
/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/697/answer
  > View solutions: https://tsch.js.org/697/solutions
  > More Challenges: https://tsch.js.org
*/
