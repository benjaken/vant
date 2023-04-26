export declare const ConfigProvider: import("../utils").WithInstall<import("vue").DefineComponent<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    theme: {
        type: import("vue").PropType<import("./ConfigProvider").ConfigProviderTheme>;
        default: import("./ConfigProvider").ConfigProviderTheme;
    };
    zIndex: NumberConstructor;
    themeVars: import("./ConfigProvider").ThemeVars;
    themeVarsDark: import("./ConfigProvider").ThemeVars;
    themeVarsLight: import("./ConfigProvider").ThemeVars;
    iconPrefix: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    theme: {
        type: import("vue").PropType<import("./ConfigProvider").ConfigProviderTheme>;
        default: import("./ConfigProvider").ConfigProviderTheme;
    };
    zIndex: NumberConstructor;
    themeVars: import("./ConfigProvider").ThemeVars;
    themeVarsDark: import("./ConfigProvider").ThemeVars;
    themeVarsLight: import("./ConfigProvider").ThemeVars;
    iconPrefix: StringConstructor;
}>>, {
    tag: keyof HTMLElementTagNameMap;
    theme: import("./ConfigProvider").ConfigProviderTheme;
}>>;
export default ConfigProvider;
export { configProviderProps } from './ConfigProvider';
export type { ConfigProviderProps, ConfigProviderTheme, } from './ConfigProvider';
export type { ConfigProviderThemeVars } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanConfigProvider: typeof ConfigProvider;
    }
}
