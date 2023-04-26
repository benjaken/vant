declare const _default: import("vue").DefineComponent<{
    date: DateConstructor;
    title: StringConstructor;
    subtitle: StringConstructor;
    showTitle: BooleanConstructor;
    showSubtitle: BooleanConstructor;
    firstDayOfWeek: NumberConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "clickSubtitle"[], "clickSubtitle", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    date: DateConstructor;
    title: StringConstructor;
    subtitle: StringConstructor;
    showTitle: BooleanConstructor;
    showSubtitle: BooleanConstructor;
    firstDayOfWeek: NumberConstructor;
}>> & {
    onClickSubtitle?: ((...args: any[]) => any) | undefined;
}, {
    showTitle: boolean;
    showSubtitle: boolean;
}>;
export default _default;
