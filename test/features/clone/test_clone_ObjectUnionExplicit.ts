import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_clone_ObjectUnionExplicit = _test_clone(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.clone(input),
);
