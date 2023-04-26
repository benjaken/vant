export declare const Notify: import("../utils").WithInstall<import("vue").DefineComponent<{
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    duration: (NumberConstructor | StringConstructor)[];
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    beforeClose: import("vue").PropType<import("../utils").Interceptor>;
    overlayStyle: import("vue").PropType<import("vue").CSSProperties>;
    overlayClass: import("vue").PropType<unknown>;
    transitionAppear: BooleanConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
} & {
    type: {
        type: import("vue").PropType<import("./types").NotifyType>;
        default: import("./types").NotifyType;
    };
    color: StringConstructor;
    message: (NumberConstructor | StringConstructor)[];
    position: {
        type: import("vue").PropType<import("./types").NotifyPosition>;
        default: import("./types").NotifyPosition;
    };
    className: import("vue").PropType<unknown>;
    background: StringConstructor;
    lockScroll: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:show"[], "update:show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    zIndex: (NumberConstructor | StringConstructor)[];
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    duration: (NumberConstructor | StringConstructor)[];
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    beforeClose: import("vue").PropType<import("../utils").Interceptor>;
    overlayStyle: import("vue").PropType<import("vue").CSSProperties>;
    overlayClass: import("vue").PropType<unknown>;
    transitionAppear: BooleanConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
} & {
    type: {
        type: import("vue").PropType<import("./types").NotifyType>;
        default: import("./types").NotifyType;
    };
    color: StringConstructor;
    message: (NumberConstructor | StringConstructor)[];
    position: {
        type: import("vue").PropType<import("./types").NotifyPosition>;
        default: import("./types").NotifyPosition;
    };
    className: import("vue").PropType<unknown>;
    background: StringConstructor;
    lockScroll: BooleanConstructor;
}>> & {
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
}, {
    type: import("./types").NotifyType;
    position: import("./types").NotifyPosition;
    overlay: boolean;
    show: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    transitionAppear: boolean;
    closeOnClickOverlay: boolean;
}>>;
export default Notify;
export { notifyProps } from './Notify';
export { showNotify, closeNotify, setNotifyDefaultOptions, resetNotifyDefaultOptions, } from './function-call';
export type { NotifyProps } from './Notify';
export type { NotifyType, NotifyOptions, NotifyThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanNotify: typeof Notify;
    }
}
