import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_assertClone_ObjectAlias = _test_assertClone(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<ObjectAlias.IMember>> => {
            const assert = (input: any): Array<ObjectAlias.IMember> => {
                const $guard = (typia.assertClone as any).guard;
                const __is = (
                    input: any,
                ): input is Array<ObjectAlias.IMember> => {
                    const $io0 = (input: any): boolean =>
                        (null === input.id || "string" === typeof input.id) &&
                        "string" === typeof input.email &&
                        "string" === typeof input.name &&
                        (null === input.sex ||
                            1 === input.sex ||
                            2 === input.sex ||
                            "male" === input.sex ||
                            "female" === input.sex) &&
                        (null === input.age ||
                            ("number" === typeof input.age &&
                                Number.isFinite(input.age))) &&
                        (null === input.dead ||
                            "boolean" === typeof input.dead);
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        )
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<ObjectAlias.IMember> => {
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (null === input.id ||
                                "string" === typeof input.id ||
                                $guard(_exceptionable, {
                                    path: _path + ".id",
                                    expected: "(null | string)",
                                    value: input.id,
                                })) &&
                            ("string" === typeof input.email ||
                                $guard(_exceptionable, {
                                    path: _path + ".email",
                                    expected: "string",
                                    value: input.email,
                                })) &&
                            ("string" === typeof input.name ||
                                $guard(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                })) &&
                            (null === input.sex ||
                                1 === input.sex ||
                                2 === input.sex ||
                                "male" === input.sex ||
                                "female" === input.sex ||
                                $guard(_exceptionable, {
                                    path: _path + ".sex",
                                    expected:
                                        '("female" | "male" | 1 | 2 | null)',
                                    value: input.sex,
                                })) &&
                            (null === input.age ||
                                ("number" === typeof input.age &&
                                    Number.isFinite(input.age)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".age",
                                    expected: "(null | number)",
                                    value: input.age,
                                })) &&
                            (null === input.dead ||
                                "boolean" === typeof input.dead ||
                                $guard(_exceptionable, {
                                    path: _path + ".dead",
                                    expected: "(boolean | null)",
                                    value: input.dead,
                                }));
                        return (
                            (Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "Array<ObjectAlias.IMember>",
                                    value: input,
                                })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "ObjectAlias.IMember",
                                            value: elem,
                                        })) &&
                                    $ao0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    ),
                            )
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone = (
                input: Array<ObjectAlias.IMember>,
            ): typia.Primitive<Array<ObjectAlias.IMember>> => {
                const $co0 = (input: any): any => ({
                    id: input.id as any,
                    email: input.email as any,
                    name: input.name as any,
                    sex: input.sex as any,
                    age: input.age as any,
                    dead: input.dead as any,
                });
                return Array.isArray(input)
                    ? input.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co0(elem)
                              : (elem as any),
                      )
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    ObjectAlias.SPOILERS,
);
