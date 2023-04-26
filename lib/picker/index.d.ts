import { PickerProps } from './Picker';
export declare const Picker: import("../utils").WithInstall<import("vue").DefineComponent<{
    loading: BooleanConstructor;
    readonly: BooleanConstructor;
    allowHtml: BooleanConstructor;
    optionHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showToolbar: {
        type: BooleanConstructor;
        default: true;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    visibleOptionNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
} & {
    title: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
} & {
    columns: {
        type: import("vue").PropType<(import("./types").PickerColumn | import("./types").PickerOption)[]>;
        default: () => never[];
    };
    modelValue: {
        type: import("vue").PropType<import("../utils").Numeric[]>;
        default: () => never[];
    };
    toolbarPosition: {
        type: import("vue").PropType<import("./types").PickerToolbarPosition>;
        default: import("./types").PickerToolbarPosition;
    };
    columnsFieldNames: import("vue").PropType<import("./types").PickerFieldNames>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "cancel" | "change" | "clickOption" | "scrollInto" | "confirm")[], "update:modelValue" | "cancel" | "change" | "clickOption" | "scrollInto" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    loading: BooleanConstructor;
    readonly: BooleanConstructor;
    allowHtml: BooleanConstructor;
    optionHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showToolbar: {
        type: BooleanConstructor;
        default: true;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    visibleOptionNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
} & {
    title: StringConstructor;
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
} & {
    columns: {
        type: import("vue").PropType<(import("./types").PickerColumn | import("./types").PickerOption)[]>;
        default: () => never[];
    };
    modelValue: {
        type: import("vue").PropType<import("../utils").Numeric[]>;
        default: () => never[];
    };
    toolbarPosition: {
        type: import("vue").PropType<import("./types").PickerToolbarPosition>;
        default: import("./types").PickerToolbarPosition;
    };
    columnsFieldNames: import("vue").PropType<import("./types").PickerFieldNames>;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onClickOption?: ((...args: any[]) => any) | undefined;
    onScrollInto?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: import("../utils").Numeric[];
    readonly: boolean;
    loading: boolean;
    allowHtml: boolean;
    optionHeight: string | number;
    showToolbar: boolean;
    swipeDuration: string | number;
    visibleOptionNum: string | number;
    columns: (import("./types").PickerColumn | import("./types").PickerOption)[];
    toolbarPosition: import("./types").PickerToolbarPosition;
}>>;
export default Picker;
export { pickerProps } from './Picker';
export type { PickerProps };
export type { PickerColumn, PickerOption, PickerInstance, PickerThemeVars, PickerFieldNames, PickerToolbarPosition, PickerCancelEventParams, PickerChangeEventParams, PickerConfirmEventParams, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanPicker: typeof Picker;
    }
}
