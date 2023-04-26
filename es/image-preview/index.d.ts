import type { ImagePreviewProps } from './ImagePreview';
export declare const ImagePreview: import("../utils").WithInstall<import("vue").DefineComponent<{
    show: BooleanConstructor;
    loop: {
        type: BooleanConstructor;
        default: true;
    };
    images: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    minZoom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxZoom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    closeable: BooleanConstructor;
    showIndex: {
        type: BooleanConstructor;
        default: true;
    };
    className: import("vue").PropType<unknown>;
    closeIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    transition: StringConstructor;
    beforeClose: import("vue").PropType<import("../utils").Interceptor>;
    overlayClass: import("vue").PropType<unknown>;
    overlayStyle: import("vue").PropType<import("vue").CSSProperties>;
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    startPosition: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showIndicators: BooleanConstructor;
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    closeIconPosition: {
        type: import("vue").PropType<import("..").PopupCloseIconPosition>;
        default: import("..").PopupCloseIconPosition;
    };
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "closed" | "update:show" | "scale" | "longPress")[], "change" | "close" | "closed" | "update:show" | "scale" | "longPress", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    loop: {
        type: BooleanConstructor;
        default: true;
    };
    images: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    minZoom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maxZoom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    closeable: BooleanConstructor;
    showIndex: {
        type: BooleanConstructor;
        default: true;
    };
    className: import("vue").PropType<unknown>;
    closeIcon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    transition: StringConstructor;
    beforeClose: import("vue").PropType<import("../utils").Interceptor>;
    overlayClass: import("vue").PropType<unknown>;
    overlayStyle: import("vue").PropType<import("vue").CSSProperties>;
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    startPosition: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showIndicators: BooleanConstructor;
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    closeIconPosition: {
        type: import("vue").PropType<import("..").PopupCloseIconPosition>;
        default: import("..").PopupCloseIconPosition;
    };
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
    onScale?: ((...args: any[]) => any) | undefined;
    onLongPress?: ((...args: any[]) => any) | undefined;
}, {
    loop: boolean;
    overlay: boolean;
    show: boolean;
    closeIcon: string;
    closeable: boolean;
    closeOnPopstate: boolean;
    closeIconPosition: import("..").PopupCloseIconPosition;
    swipeDuration: string | number;
    showIndicators: boolean;
    startPosition: string | number;
    minZoom: string | number;
    maxZoom: string | number;
    images: string[];
    showIndex: boolean;
}>>;
export default ImagePreview;
export { imagePreviewProps } from './ImagePreview';
export { showImagePreview } from './function-call';
export type { ImagePreviewProps };
export type { ImagePreviewOptions, ImagePreviewInstance, ImagePreviewThemeVars, ImagePreviewScaleEventParams, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanImagePreview: typeof ImagePreview;
    }
}
