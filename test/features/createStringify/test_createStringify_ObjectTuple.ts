import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createStringify_ObjectTuple = _test_stringify(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createStringify<ObjectTuple>(),
);
