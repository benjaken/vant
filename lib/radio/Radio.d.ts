import { type ExtractPropTypes } from 'vue';
import { CheckerShape, CheckerLabelPosition } from '../checkbox/Checker';
export declare const radioProps: {
    name: import("vue").PropType<unknown>;
    shape: {
        type: import("vue").PropType<CheckerShape>;
        default: CheckerShape;
    };
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: import("vue").PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: import("vue").PropType<CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
};
export type RadioShape = CheckerShape;
export type RadioLabelPosition = CheckerLabelPosition;
export type RadioProps = ExtractPropTypes<typeof radioProps>;
declare const _default: import("vue").DefineComponent<{
    name: import("vue").PropType<unknown>;
    shape: {
        type: import("vue").PropType<CheckerShape>;
        default: CheckerShape;
    };
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: import("vue").PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: import("vue").PropType<CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    name: import("vue").PropType<unknown>;
    shape: {
        type: import("vue").PropType<CheckerShape>;
        default: CheckerShape;
    };
    disabled: BooleanConstructor;
    iconSize: (NumberConstructor | StringConstructor)[];
    modelValue: import("vue").PropType<unknown>;
    checkedColor: StringConstructor;
    labelPosition: import("vue").PropType<CheckerLabelPosition>;
    labelDisabled: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    shape: CheckerShape;
    labelDisabled: boolean;
}>;
export default _default;
