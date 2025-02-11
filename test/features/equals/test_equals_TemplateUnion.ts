import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_equals_TemplateUnion = _test_equals(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.equals(input),
);
