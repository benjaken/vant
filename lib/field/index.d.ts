import { FieldProps } from './Field';
export declare const Field: import("../utils").WithInstall<import("vue").DefineComponent<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    icon: StringConstructor;
    size: import("vue").PropType<import("..").CellSize>;
    title: (NumberConstructor | StringConstructor)[];
    value: (NumberConstructor | StringConstructor)[];
    label: (NumberConstructor | StringConstructor)[];
    center: BooleanConstructor;
    isLink: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
    required: BooleanConstructor;
    iconPrefix: StringConstructor;
    valueClass: import("vue").PropType<unknown>;
    labelClass: import("vue").PropType<unknown>;
    titleClass: import("vue").PropType<unknown>;
    titleStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    arrowDirection: import("vue").PropType<import("..").CellArrowDirection>;
    clickable: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
} & {
    id: StringConstructor;
    name: StringConstructor;
    leftIcon: StringConstructor;
    rightIcon: StringConstructor;
    autofocus: BooleanConstructor;
    clearable: BooleanConstructor;
    maxlength: (NumberConstructor | StringConstructor)[];
    formatter: import("vue").PropType<(value: string) => string>;
    clearIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    inputAlign: import("vue").PropType<import("./types").FieldTextAlign>;
    placeholder: StringConstructor;
    autocomplete: StringConstructor;
    errorMessage: StringConstructor;
    enterkeyhint: StringConstructor;
    clearTrigger: {
        type: import("vue").PropType<import("./types").FieldClearTrigger>;
        default: import("./types").FieldClearTrigger;
    };
    formatTrigger: {
        type: import("vue").PropType<import("./types").FieldFormatTrigger>;
        default: import("./types").FieldFormatTrigger;
    };
    error: {
        type: BooleanConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: null;
    };
} & {
    rows: (NumberConstructor | StringConstructor)[];
    type: {
        type: import("vue").PropType<import("./types").FieldType>;
        default: import("./types").FieldType;
    };
    rules: import("vue").PropType<import("./types").FieldRule[]>;
    autosize: import("vue").PropType<boolean | import("./types").FieldAutosizeConfig>;
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelClass: import("vue").PropType<unknown>;
    labelAlign: import("vue").PropType<import("./types").FieldTextAlign>;
    showWordLimit: BooleanConstructor;
    errorMessageAlign: import("vue").PropType<import("./types").FieldTextAlign>;
    colon: {
        type: BooleanConstructor;
        default: null;
    };
    showTip: {
        type: BooleanConstructor;
        value: boolean;
    };
    FieldTipType: {
        type: import("vue").PropType<import("./types").FieldTipType>;
        value: string;
    };
    tipUnit: {
        type: StringConstructor;
        value: string;
    };
    passwordTip: {
        type: ArrayConstructor;
        value: never[];
    };
    inlineBlock: {
        type: BooleanConstructor;
        value: boolean;
    };
    inputWidth: {
        type: (NumberConstructor | StringConstructor)[];
        value: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clear" | "focus" | "blur" | "keypress" | "clickInput" | "endValidate" | "startValidate" | "clickLeftIcon" | "clickRightIcon" | "update:modelValue")[], "clear" | "focus" | "blur" | "keypress" | "clickInput" | "endValidate" | "startValidate" | "clickLeftIcon" | "clickRightIcon" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    icon: StringConstructor;
    size: import("vue").PropType<import("..").CellSize>;
    title: (NumberConstructor | StringConstructor)[];
    value: (NumberConstructor | StringConstructor)[];
    label: (NumberConstructor | StringConstructor)[];
    center: BooleanConstructor;
    isLink: BooleanConstructor;
    border: {
        type: BooleanConstructor;
        default: true;
    };
    required: BooleanConstructor;
    iconPrefix: StringConstructor;
    valueClass: import("vue").PropType<unknown>;
    labelClass: import("vue").PropType<unknown>;
    titleClass: import("vue").PropType<unknown>;
    titleStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    arrowDirection: import("vue").PropType<import("..").CellArrowDirection>;
    clickable: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
} & {
    id: StringConstructor;
    name: StringConstructor;
    leftIcon: StringConstructor;
    rightIcon: StringConstructor;
    autofocus: BooleanConstructor;
    clearable: BooleanConstructor;
    maxlength: (NumberConstructor | StringConstructor)[];
    formatter: import("vue").PropType<(value: string) => string>;
    clearIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    inputAlign: import("vue").PropType<import("./types").FieldTextAlign>;
    placeholder: StringConstructor;
    autocomplete: StringConstructor;
    errorMessage: StringConstructor;
    enterkeyhint: StringConstructor;
    clearTrigger: {
        type: import("vue").PropType<import("./types").FieldClearTrigger>;
        default: import("./types").FieldClearTrigger;
    };
    formatTrigger: {
        type: import("vue").PropType<import("./types").FieldFormatTrigger>;
        default: import("./types").FieldFormatTrigger;
    };
    error: {
        type: BooleanConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    readonly: {
        type: BooleanConstructor;
        default: null;
    };
} & {
    rows: (NumberConstructor | StringConstructor)[];
    type: {
        type: import("vue").PropType<import("./types").FieldType>;
        default: import("./types").FieldType;
    };
    rules: import("vue").PropType<import("./types").FieldRule[]>;
    autosize: import("vue").PropType<boolean | import("./types").FieldAutosizeConfig>;
    labelWidth: (NumberConstructor | StringConstructor)[];
    labelClass: import("vue").PropType<unknown>;
    labelAlign: import("vue").PropType<import("./types").FieldTextAlign>;
    showWordLimit: BooleanConstructor;
    errorMessageAlign: import("vue").PropType<import("./types").FieldTextAlign>;
    colon: {
        type: BooleanConstructor;
        default: null;
    };
    showTip: {
        type: BooleanConstructor;
        value: boolean;
    };
    FieldTipType: {
        type: import("vue").PropType<import("./types").FieldTipType>;
        value: string;
    };
    tipUnit: {
        type: StringConstructor;
        value: string;
    };
    passwordTip: {
        type: ArrayConstructor;
        value: never[];
    };
    inlineBlock: {
        type: BooleanConstructor;
        value: boolean;
    };
    inputWidth: {
        type: (NumberConstructor | StringConstructor)[];
        value: string;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onKeypress?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    onClickInput?: ((...args: any[]) => any) | undefined;
    onEndValidate?: ((...args: any[]) => any) | undefined;
    onStartValidate?: ((...args: any[]) => any) | undefined;
    onClickLeftIcon?: ((...args: any[]) => any) | undefined;
    onClickRightIcon?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: import("./types").FieldType;
    tag: keyof HTMLElementTagNameMap;
    center: boolean;
    autofocus: boolean;
    disabled: boolean;
    isLink: boolean;
    border: boolean;
    required: boolean;
    clickable: boolean | null;
    clearable: boolean;
    clearIcon: string;
    modelValue: string | number;
    clearTrigger: import("./types").FieldClearTrigger;
    formatTrigger: import("./types").FieldFormatTrigger;
    error: boolean;
    readonly: boolean;
    showWordLimit: boolean;
    colon: boolean;
    showTip: boolean;
    inlineBlock: boolean;
}>>;
export default Field;
export { fieldProps } from './Field';
export type { FieldProps };
export type { FieldType, FieldRule, FieldInstance, FieldTextAlign, FieldThemeVars, FieldRuleMessage, FieldClearTrigger, FieldFormatTrigger, FieldRuleValidator, FieldRuleFormatter, FieldValidateError, FieldAutosizeConfig, FieldValidateTrigger, FieldValidationStatus, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanField: typeof Field;
    }
}
