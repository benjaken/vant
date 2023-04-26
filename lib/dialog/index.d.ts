export declare const Dialog: import("../utils").WithInstall<import("vue").DefineComponent<{
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
    title: StringConstructor;
    theme: import("vue").PropType<import("./types").DialogTheme>;
    width: (NumberConstructor | StringConstructor)[];
    message: import("vue").PropType<import("./types").DialogMessage>;
    callback: import("vue").PropType<(action?: import("./types").DialogAction | undefined) => void>;
    allowHtml: BooleanConstructor;
    className: import("vue").PropType<unknown>;
    transition: {
        type: import("vue").PropType<string>;
        default: string;
    };
    messageAlign: import("vue").PropType<import("./types").DialogMessageAlign>;
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    showCancelButton: BooleanConstructor;
    cancelButtonText: StringConstructor;
    cancelButtonColor: StringConstructor;
    cancelButtonDisabled: BooleanConstructor;
    confirmButtonText: StringConstructor;
    confirmButtonColor: StringConstructor;
    confirmButtonDisabled: BooleanConstructor;
    showConfirmButton: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: BooleanConstructor;
    inputPattern: StringConstructor;
    inputErrorMessage: StringConstructor;
    inputPlaceholder: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "keydown" | "update:show" | "confirm")[], "cancel" | "keydown" | "update:show" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    title: StringConstructor;
    theme: import("vue").PropType<import("./types").DialogTheme>;
    width: (NumberConstructor | StringConstructor)[];
    message: import("vue").PropType<import("./types").DialogMessage>;
    callback: import("vue").PropType<(action?: import("./types").DialogAction | undefined) => void>;
    allowHtml: BooleanConstructor;
    className: import("vue").PropType<unknown>;
    transition: {
        type: import("vue").PropType<string>;
        default: string;
    };
    messageAlign: import("vue").PropType<import("./types").DialogMessageAlign>;
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    showCancelButton: BooleanConstructor;
    cancelButtonText: StringConstructor;
    cancelButtonColor: StringConstructor;
    cancelButtonDisabled: BooleanConstructor;
    confirmButtonText: StringConstructor;
    confirmButtonColor: StringConstructor;
    confirmButtonDisabled: BooleanConstructor;
    showConfirmButton: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: BooleanConstructor;
    inputPattern: StringConstructor;
    inputErrorMessage: StringConstructor;
    inputPlaceholder: StringConstructor;
}>> & {
    onKeydown?: ((...args: any[]) => any) | undefined;
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    overlay: boolean;
    show: boolean;
    lockScroll: boolean;
    lazyRender: boolean;
    transitionAppear: boolean;
    closeOnClickOverlay: boolean;
    transition: string;
    closeOnPopstate: boolean;
    allowHtml: boolean;
    showCancelButton: boolean;
    cancelButtonDisabled: boolean;
    confirmButtonDisabled: boolean;
    showConfirmButton: boolean;
}>>;
export default Dialog;
export { dialogProps } from './Dialog';
export { showDialog, closeDialog, showConfirmDialog, setDialogDefaultOptions, resetDialogDefaultOptions, } from './function-call';
export type { DialogProps } from './Dialog';
export type { DialogTheme, DialogMessage, DialogOptions, DialogThemeVars, DialogMessageAlign, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanDialog: typeof Dialog;
    }
}
