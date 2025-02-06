"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Should work
expect(readonlyEqual()(uniqueItems([1, 2, 3])));
expect(readonlyEqual()(uniqueItems(['a', 'b', 'c'])));
expect(readonlyEqual()(uniqueItems([1, 'a', true])));
expect(readonlyEqual()(uniqueItems([undefined, null, 3, false])));
// Should error
// @ts-expect-error
uniqueItems([1, 2, 2, 3, 4, 4, 5, 6]);
// @ts-expect-error
uniqueItems([true, true, false, false, 'b', 'b']);
// @ts-expect-error
uniqueItems([1, 1]);
// @ts-expect-error
uniqueItems([undefined, undefined]);
// @ts-expect-error
uniqueItems([null, undefined, null]);
// @ts-expect-error
uniqueItems(['test', undefined, 'test']);
// Bonus: Should give detailed errors
uniqueItems([
    1,
    2,
    // @ts-expect-error
    2,
    3,
    4,
    // @ts-expect-error
    4,
    6,
    7,
]);
uniqueItems([
    true,
    // @ts-expect-error
    true,
    false,
    // @ts-expect-error
    false,
    'b',
    // @ts-expect-error
    'b',
]);
