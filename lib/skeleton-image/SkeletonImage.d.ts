import { type ExtractPropTypes } from 'vue';
export type SkeletonImageShape = 'square' | 'round';
export declare const skeletonImageProps: {
    imageSize: (NumberConstructor | StringConstructor)[];
    imageShape: {
        type: import("vue").PropType<SkeletonImageShape>;
        default: SkeletonImageShape;
    };
};
export type SkeletonImageProps = ExtractPropTypes<typeof skeletonImageProps>;
declare const _default: import("vue").DefineComponent<{
    imageSize: (NumberConstructor | StringConstructor)[];
    imageShape: {
        type: import("vue").PropType<SkeletonImageShape>;
        default: SkeletonImageShape;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    imageSize: (NumberConstructor | StringConstructor)[];
    imageShape: {
        type: import("vue").PropType<SkeletonImageShape>;
        default: SkeletonImageShape;
    };
}>>, {
    imageShape: SkeletonImageShape;
}>;
export default _default;
