import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_assertStringify_DynamicTemplate = _test_assertStringify(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) =>
        ((input: any): string => {
            const assert = (input: any): DynamicTemplate => {
                const $guard = (typia.assertStringify as any).guard;
                const $join = (typia.assertStringify as any).join;
                const __is = (input: any): input is DynamicTemplate => {
                    const $io0 = (input: any): boolean =>
                        Object.keys(input).every((key) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/^(prefix_(.*))/).test(key))
                                return "string" === typeof value;
                            if (RegExp(/((.*)_postfix)$/).test(key))
                                return "string" === typeof value;
                            if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                                return (
                                    "number" === typeof value &&
                                    Number.isFinite(value)
                                );
                            if (
                                RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(
                                    key,
                                )
                            )
                                return "boolean" === typeof value;
                            return true;
                        });
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input) &&
                        $io0(input)
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is DynamicTemplate => {
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            false === _exceptionable ||
                            Object.keys(input).every((key) => {
                                const value = input[key];
                                if (undefined === value) return true;
                                if (RegExp(/^(prefix_(.*))/).test(key))
                                    return (
                                        "string" === typeof value ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "string",
                                            value: value,
                                        })
                                    );
                                if (RegExp(/((.*)_postfix)$/).test(key))
                                    return (
                                        "string" === typeof value ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "string",
                                            value: value,
                                        })
                                    );
                                if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                                    return (
                                        ("number" === typeof value &&
                                            Number.isFinite(value)) ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "number",
                                            value: value,
                                        })
                                    );
                                if (
                                    RegExp(
                                        /^(between_(.*)_and_-?\d+\.?\d*)$/,
                                    ).test(key)
                                )
                                    return (
                                        "boolean" === typeof value ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "boolean",
                                            value: value,
                                        })
                                    );
                                return true;
                            });
                        return (
                            (("object" === typeof input &&
                                null !== input &&
                                false === Array.isArray(input)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "DynamicTemplate",
                                    value: input,
                                })) &&
                            $ao0(input, _path + "", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify = (input: DynamicTemplate): string => {
                const $join = (typia.assertStringify as any).join;
                const $string = (typia.assertStringify as any).string;
                const $number = (typia.assertStringify as any).number;
                const $so0 = (input: any): any =>
                    `{${Object.entries(input)
                        .map(([key, value]: [string, any]) => {
                            if (undefined === value) return "";
                            if (RegExp(/^(prefix_(.*))/).test(key))
                                return `${JSON.stringify(key)}:${$string(
                                    value,
                                )}`;
                            if (RegExp(/((.*)_postfix)$/).test(key))
                                return `${JSON.stringify(key)}:${$string(
                                    value,
                                )}`;
                            if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                                return `${JSON.stringify(key)}:${$number(
                                    value,
                                )}`;
                            if (
                                RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(
                                    key,
                                )
                            )
                                return `${JSON.stringify(key)}:${value}`;
                        })
                        .filter((str) => "" !== str)
                        .join(",")}}`;
                return $so0(input);
            };
            return stringify(assert(input));
        })(input),
    DynamicTemplate.SPOILERS,
);
