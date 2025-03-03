"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curried1 = DynamicParamsCurrying((a, b, c) => true);
const curried2 = DynamicParamsCurrying((a, b, c, d, e, f, g) => true);
const curried1Return1 = curried1('123')(123)(true);
const curried1Return2 = curried1('123', 123)(false);
const curried1Return3 = curried1('123', 123, true);
const curried2Return1 = curried2('123')(123)(true)(false)(true)('123')(false);
const curried2Return2 = curried2('123', 123)(true, false)(true, '123')(false);
const curried2Return3 = curried2('123', 123)(true)(false)(true, '123', false);
const curried2Return4 = curried2('123', 123, true)(false, true, '123')(false);
const curried2Return5 = curried2('123', 123, true)(false)(true)('123')(false);
const curried2Return6 = curried2('123', 123, true, false)(true, '123', false);
const curried2Return7 = curried2('123', 123, true, false, true)('123', false);
const curried2Return8 = curried2('123', 123, true, false, true)('123')(false);
const curried2Return9 = curried2('123', 123, true, false, true, '123')(false);
const curried2Return10 = curried2('123', 123, true, false, true, '123', false);
// @ts-expect-error
const curried1ReturnWrong = curried1('123')(123)('wrong arg type');
// @ts-expect-error
const curried1ReturnWrong2 = curried1('123')()(123)(true);
