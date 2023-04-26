export declare const SkeletonAvatar: import("../utils").WithInstall<import("vue").DefineComponent<{
    avatarSize: (NumberConstructor | StringConstructor)[];
    avatarShape: {
        type: import("vue").PropType<import("./SkeletonAvatar").SkeletonAvatarShape>;
        default: import("./SkeletonAvatar").SkeletonAvatarShape;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    avatarSize: (NumberConstructor | StringConstructor)[];
    avatarShape: {
        type: import("vue").PropType<import("./SkeletonAvatar").SkeletonAvatarShape>;
        default: import("./SkeletonAvatar").SkeletonAvatarShape;
    };
}>>, {
    avatarShape: import("./SkeletonAvatar").SkeletonAvatarShape;
}>>;
export default SkeletonAvatar;
export { skeletonAvatarProps } from './SkeletonAvatar';
export type { SkeletonAvatarProps, SkeletonAvatarShape, } from './SkeletonAvatar';
declare module 'vue' {
    interface GlobalComponents {
        VanSkeletonAvatar: typeof SkeletonAvatar;
    }
}
