import { TimePickerProps } from './TimePicker';
export declare const TimePicker: import("../utils").WithInstall<import("vue").DefineComponent<{
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
    modelValue: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    filter: import("vue").PropType<(columnType: string, options: import("..").PickerOption[]) => import("..").PickerOption[]>;
    formatter: {
        type: import("vue").PropType<(type: string, option: import("..").PickerOption) => import("..").PickerOption>;
        default: (type: string, option: import("..").PickerOption) => import("..").PickerOption;
    };
} & {
    minHour: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxHour: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    minMinute: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxMinute: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    minSecond: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxSecond: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    columnsType: {
        type: import("vue").PropType<import("./TimePicker").TimePickerColumnType[]>;
        default: () => string[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "cancel" | "change" | "confirm")[], "update:modelValue" | "cancel" | "change" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    modelValue: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    filter: import("vue").PropType<(columnType: string, options: import("..").PickerOption[]) => import("..").PickerOption[]>;
    formatter: {
        type: import("vue").PropType<(type: string, option: import("..").PickerOption) => import("..").PickerOption>;
        default: (type: string, option: import("..").PickerOption) => import("..").PickerOption;
    };
} & {
    minHour: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxHour: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    minMinute: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxMinute: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    minSecond: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxSecond: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    columnsType: {
        type: import("vue").PropType<import("./TimePicker").TimePickerColumnType[]>;
        default: () => string[];
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    formatter: (type: string, option: import("..").PickerOption) => import("..").PickerOption;
    modelValue: string[];
    readonly: boolean;
    loading: boolean;
    allowHtml: boolean;
    optionHeight: string | number;
    showToolbar: boolean;
    swipeDuration: string | number;
    visibleOptionNum: string | number;
    columnsType: import("./TimePicker").TimePickerColumnType[];
    minHour: string | number;
    maxHour: string | number;
    minMinute: string | number;
    maxMinute: string | number;
    minSecond: string | number;
    maxSecond: string | number;
}>>;
export default TimePicker;
export { timePickerProps } from './TimePicker';
export type { TimePickerProps };
export type { TimePickerColumnType } from './TimePicker';
declare module 'vue' {
    interface GlobalComponents {
        VanTimePicker: typeof TimePicker;
    }
}
