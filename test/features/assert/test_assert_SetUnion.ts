import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { SetUnion } from "../../structures/SetUnion";

export const test_assert_SetUnion = _test_assert(
    "SetUnion",
    SetUnion.generate,
    (input) => typia.assert(input),
    SetUnion.SPOILERS,
);
