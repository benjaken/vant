import { type ExtractPropTypes } from 'vue';
export type LoadingType = 'circular' | 'spinner';
export declare const loadingProps: {
    size: (NumberConstructor | StringConstructor)[];
    type: {
        type: import("vue").PropType<LoadingType>;
        default: LoadingType;
    };
    color: StringConstructor;
    vertical: BooleanConstructor;
    textSize: (NumberConstructor | StringConstructor)[];
    textColor: StringConstructor;
};
export type LoadingProps = ExtractPropTypes<typeof loadingProps>;
declare const _default: import("vue").DefineComponent<{
    size: (NumberConstructor | StringConstructor)[];
    type: {
        type: import("vue").PropType<LoadingType>;
        default: LoadingType;
    };
    color: StringConstructor;
    vertical: BooleanConstructor;
    textSize: (NumberConstructor | StringConstructor)[];
    textColor: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    size: (NumberConstructor | StringConstructor)[];
    type: {
        type: import("vue").PropType<LoadingType>;
        default: LoadingType;
    };
    color: StringConstructor;
    vertical: BooleanConstructor;
    textSize: (NumberConstructor | StringConstructor)[];
    textColor: StringConstructor;
}>>, {
    type: LoadingType;
    vertical: boolean;
}>;
export default _default;
