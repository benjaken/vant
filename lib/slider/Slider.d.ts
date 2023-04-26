import { type PropType, type ExtractPropTypes } from 'vue';
type NumberRange = [number, number];
type SliderValue = number | NumberRange;
export declare const sliderProps: {
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    range: BooleanConstructor;
    reverse: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    vertical: BooleanConstructor;
    barHeight: (NumberConstructor | StringConstructor)[];
    buttonSize: (NumberConstructor | StringConstructor)[];
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    modelValue: {
        type: PropType<SliderValue>;
        default: number;
    };
};
export type SliderProps = ExtractPropTypes<typeof sliderProps>;
declare const _default: import("vue").DefineComponent<{
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    range: BooleanConstructor;
    reverse: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    vertical: BooleanConstructor;
    barHeight: (NumberConstructor | StringConstructor)[];
    buttonSize: (NumberConstructor | StringConstructor)[];
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    modelValue: {
        type: PropType<SliderValue>;
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "dragStart" | "dragEnd")[], "update:modelValue" | "change" | "dragStart" | "dragEnd", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    range: BooleanConstructor;
    reverse: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    vertical: BooleanConstructor;
    barHeight: (NumberConstructor | StringConstructor)[];
    buttonSize: (NumberConstructor | StringConstructor)[];
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    modelValue: {
        type: PropType<SliderValue>;
        default: number;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDragStart?: ((...args: any[]) => any) | undefined;
    onDragEnd?: ((...args: any[]) => any) | undefined;
}, {
    reverse: boolean;
    range: boolean;
    max: string | number;
    disabled: boolean;
    modelValue: SliderValue;
    readonly: boolean;
    vertical: boolean;
    step: string | number;
    min: string | number;
}>;
export default _default;
