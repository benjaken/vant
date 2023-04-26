import { type ExtractPropTypes } from 'vue';
export type DividerContentPosition = 'left' | 'center' | 'right';
export declare const dividerProps: {
    dashed: BooleanConstructor;
    hairline: {
        type: BooleanConstructor;
        default: true;
    };
    contentPosition: {
        type: import("vue").PropType<DividerContentPosition>;
        default: DividerContentPosition;
    };
};
export type DividerProps = ExtractPropTypes<typeof dividerProps>;
declare const _default: import("vue").DefineComponent<{
    dashed: BooleanConstructor;
    hairline: {
        type: BooleanConstructor;
        default: true;
    };
    contentPosition: {
        type: import("vue").PropType<DividerContentPosition>;
        default: DividerContentPosition;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    dashed: BooleanConstructor;
    hairline: {
        type: BooleanConstructor;
        default: true;
    };
    contentPosition: {
        type: import("vue").PropType<DividerContentPosition>;
        default: DividerContentPosition;
    };
}>>, {
    hairline: boolean;
    dashed: boolean;
    contentPosition: DividerContentPosition;
}>;
export default _default;
