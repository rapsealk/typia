import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createValidate_ArrayAtomicSimple = _test_validate(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.createValidate<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
