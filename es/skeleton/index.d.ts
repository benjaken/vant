export declare const Skeleton: import("../utils").WithInstall<import("vue").DefineComponent<{
    row: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    round: BooleanConstructor;
    title: BooleanConstructor;
    titleWidth: (NumberConstructor | StringConstructor)[];
    avatar: BooleanConstructor;
    avatarSize: (NumberConstructor | StringConstructor)[];
    avatarShape: {
        type: import("vue").PropType<import("..").SkeletonAvatarShape>;
        default: import("..").SkeletonAvatarShape;
    };
    loading: {
        type: BooleanConstructor;
        default: true;
    };
    animate: {
        type: BooleanConstructor;
        default: true;
    };
    rowWidth: {
        type: import("vue").PropType<import("../utils").Numeric | import("../utils").Numeric[]>;
        default: string;
    };
}, () => JSX.Element | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    row: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    round: BooleanConstructor;
    title: BooleanConstructor;
    titleWidth: (NumberConstructor | StringConstructor)[];
    avatar: BooleanConstructor;
    avatarSize: (NumberConstructor | StringConstructor)[];
    avatarShape: {
        type: import("vue").PropType<import("..").SkeletonAvatarShape>;
        default: import("..").SkeletonAvatarShape;
    };
    loading: {
        type: BooleanConstructor;
        default: true;
    };
    animate: {
        type: BooleanConstructor;
        default: true;
    };
    rowWidth: {
        type: import("vue").PropType<import("../utils").Numeric | import("../utils").Numeric[]>;
        default: string;
    };
}>>, {
    title: boolean;
    animate: boolean;
    round: boolean;
    loading: boolean;
    row: string | number;
    avatarShape: import("..").SkeletonAvatarShape;
    rowWidth: import("../utils").Numeric | import("../utils").Numeric[];
    avatar: boolean;
}>>;
export default Skeleton;
export { skeletonProps } from './Skeleton';
export type { SkeletonProps } from './Skeleton';
export type { SkeletonThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanSkeleton: typeof Skeleton;
    }
}
