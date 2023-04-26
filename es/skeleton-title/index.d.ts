export declare const SkeletonTitle: import("../utils").WithInstall<import("vue").DefineComponent<{
    round: BooleanConstructor;
    titleWidth: (NumberConstructor | StringConstructor)[];
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    round: BooleanConstructor;
    titleWidth: (NumberConstructor | StringConstructor)[];
}>>, {
    round: boolean;
}>>;
export default SkeletonTitle;
export { skeletonTitleProps } from './SkeletonTitle';
export type { SkeletonTitleProps } from './SkeletonTitle';
declare module 'vue' {
    interface GlobalComponents {
        VanSkeletonTitle: typeof SkeletonTitle;
    }
}
