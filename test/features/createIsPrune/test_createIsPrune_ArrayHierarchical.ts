import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createIsPrune_ArrayHierarchical = _test_isPrune(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createIsPrune<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
