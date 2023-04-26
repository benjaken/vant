import { type PropType, type ExtractPropTypes } from 'vue';
import { type Numeric } from '../utils';
import type { SkeletonAvatarShape } from '../skeleton-avatar';
export declare const skeletonProps: {
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
        type: PropType<SkeletonAvatarShape>;
        default: SkeletonAvatarShape;
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
        type: PropType<Numeric | Numeric[]>;
        default: string;
    };
};
export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>;
declare const _default: import("vue").DefineComponent<{
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
        type: PropType<SkeletonAvatarShape>;
        default: SkeletonAvatarShape;
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
        type: PropType<Numeric | Numeric[]>;
        default: string;
    };
}, () => JSX.Element | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
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
        type: PropType<SkeletonAvatarShape>;
        default: SkeletonAvatarShape;
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
        type: PropType<Numeric | Numeric[]>;
        default: string;
    };
}>>, {
    title: boolean;
    animate: boolean;
    round: boolean;
    loading: boolean;
    row: string | number;
    avatarShape: SkeletonAvatarShape;
    rowWidth: Numeric | Numeric[];
    avatar: boolean;
}>;
export default _default;
