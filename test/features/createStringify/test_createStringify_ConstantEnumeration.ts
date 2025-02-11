import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createStringify_ConstantEnumeration = _test_stringify(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createStringify<ConstantEnumeration>(),
);
