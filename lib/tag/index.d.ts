export declare const Tag: import("../utils").WithInstall<import("vue").DefineComponent<{
    size: import("vue").PropType<import("./types").TagSize>;
    mark: BooleanConstructor;
    show: {
        type: BooleanConstructor;
        default: true;
    };
    type: {
        type: import("vue").PropType<import("./types").TagType>;
        default: import("./types").TagType;
    };
    color: StringConstructor;
    plain: BooleanConstructor;
    round: BooleanConstructor;
    textColor: StringConstructor;
    closeable: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: import("vue").PropType<import("./types").TagSize>;
    mark: BooleanConstructor;
    show: {
        type: BooleanConstructor;
        default: true;
    };
    type: {
        type: import("vue").PropType<import("./types").TagType>;
        default: import("./types").TagType;
    };
    color: StringConstructor;
    plain: BooleanConstructor;
    round: BooleanConstructor;
    textColor: StringConstructor;
    closeable: BooleanConstructor;
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    type: import("./types").TagType;
    mark: boolean;
    round: boolean;
    plain: boolean;
    show: boolean;
    closeable: boolean;
}>>;
export default Tag;
export { tagProps } from './Tag';
export type { TagProps } from './Tag';
export type { TagSize, TagType, TagThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanTag: typeof Tag;
    }
}
