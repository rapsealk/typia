import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_createValidatePrune_AtomicUnion = _test_validatePrune(
    "AtomicUnion",
    AtomicUnion.generate,
    (input: any): typia.IValidation<AtomicUnion> => {
        const validate = (input: any): typia.IValidation<AtomicUnion> => {
            const __is = (input: any): input is AtomicUnion => {
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            null === elem ||
                            "string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            "boolean" === typeof elem,
                    )
                );
            };
            const errors = [] as any[];
            const $report = (typia.createValidatePrune as any).report(errors);
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is AtomicUnion => {
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "Array<(boolean | null | number | string)>",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        null === elem ||
                                        "string" === typeof elem ||
                                        ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                        "boolean" === typeof elem ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(boolean | null | number | string)",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "Array<(boolean | null | number | string)>",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        const prune = (input: AtomicUnion): void => {};
        const output = validate(input);
        if (output.success) prune(input);
        return output;
    },
    AtomicUnion.SPOILERS,
);
