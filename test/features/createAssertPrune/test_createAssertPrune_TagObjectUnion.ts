import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_createAssertPrune_TagObjectUnion = _test_assertPrune(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createAssertPrune<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
