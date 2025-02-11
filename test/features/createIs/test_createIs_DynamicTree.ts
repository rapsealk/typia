import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_createIs_DynamicTree = _test_is(
    "DynamicTree",
    DynamicTree.generate,
    typia.createIs<DynamicTree>(),
    DynamicTree.SPOILERS,
);
