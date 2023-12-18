import { type ExtractPropTypes } from 'vue';
export declare const checkButtonProps: {
    options: {
        type: any;
        default: never[];
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: any;
        default: string;
    };
    round: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    cancelable: BooleanConstructor;
    single: BooleanConstructor;
    horizon: BooleanConstructor;
    row: {
        type: NumberConstructor;
        default: number;
    };
    needIndex: BooleanConstructor;
    beforeChange: null;
    disabledItems: {
        type: ArrayConstructor;
        default: () => never[];
    };
    size: {
        type: StringConstructor;
        default: string;
    };
};
export type CheckButtonProps = ExtractPropTypes<typeof checkButtonProps>;
declare const _default: import("vue").DefineComponent<{
    options: {
        type: any;
        default: never[];
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: any;
        default: string;
    };
    round: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    cancelable: BooleanConstructor;
    single: BooleanConstructor;
    horizon: BooleanConstructor;
    row: {
        type: NumberConstructor;
        default: number;
    };
    needIndex: BooleanConstructor;
    beforeChange: null;
    disabledItems: {
        type: ArrayConstructor;
        default: () => never[];
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    options: {
        type: any;
        default: never[];
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: any;
        default: string;
    };
    round: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    cancelable: BooleanConstructor;
    single: BooleanConstructor;
    horizon: BooleanConstructor;
    row: {
        type: NumberConstructor;
        default: number;
    };
    needIndex: BooleanConstructor;
    beforeChange: null;
    disabledItems: {
        type: ArrayConstructor;
        default: () => never[];
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    label: string;
    round: boolean;
    disabled: boolean;
    size: string;
    modelValue: any;
    readonly: boolean;
    row: number;
    single: boolean;
    options: any;
    cancelable: boolean;
    horizon: boolean;
    needIndex: boolean;
    disabledItems: unknown[];
}>;
export default _default;
