import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createValidate_ToJsonNull = _test_validate(
    "ToJsonNull",
    ToJsonNull.generate,
    typia.createValidate<ToJsonNull>(),
);
