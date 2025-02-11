import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_isParse_DynamicArray = _test_isParse(
    "DynamicArray",
    DynamicArray.generate,
    (input) => typia.isParse<DynamicArray>(input),
    DynamicArray.SPOILERS,
);
