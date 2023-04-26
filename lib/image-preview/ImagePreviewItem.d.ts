declare const _default: import("vue").DefineComponent<{
    src: StringConstructor;
    show: BooleanConstructor;
    active: NumberConstructor;
    minZoom: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
    maxZoom: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
    rootWidth: {
        type: NumberConstructor;
        required: true;
    };
    rootHeight: {
        type: NumberConstructor;
        required: true;
    };
    disableZoom: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "scale" | "longPress")[], "close" | "scale" | "longPress", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    src: StringConstructor;
    show: BooleanConstructor;
    active: NumberConstructor;
    minZoom: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
    maxZoom: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
    rootWidth: {
        type: NumberConstructor;
        required: true;
    };
    rootHeight: {
        type: NumberConstructor;
        required: true;
    };
    disableZoom: BooleanConstructor;
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onScale?: ((...args: any[]) => any) | undefined;
    onLongPress?: ((...args: any[]) => any) | undefined;
}, {
    show: boolean;
    disableZoom: boolean;
}>;
export default _default;
