import { ExtractPropTypes } from 'vue';
export declare const DEFAULT_ROW_WIDTH = "100%";
export declare const skeletonParagraphProps: {
    round: BooleanConstructor;
    rowWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
};
export type SkeletonParagraphProps = ExtractPropTypes<typeof skeletonParagraphProps>;
declare const _default: import("vue").DefineComponent<{
    round: BooleanConstructor;
    rowWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    round: BooleanConstructor;
    rowWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
}>>, {
    round: boolean;
    rowWidth: string | number;
}>;
export default _default;
