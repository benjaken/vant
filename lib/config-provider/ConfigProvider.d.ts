import { type PropType, type InjectionKey, type ExtractPropTypes } from 'vue';
import { type Numeric } from '../utils';
export type ConfigProviderTheme = 'light' | 'dark';
export type ConfigProviderProvide = {
    iconPrefix?: string;
};
export declare const CONFIG_PROVIDER_KEY: InjectionKey<ConfigProviderProvide>;
export type ThemeVars = PropType<Record<string, Numeric>>;
export declare const configProviderProps: {
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    theme: {
        type: PropType<ConfigProviderTheme>;
        default: ConfigProviderTheme;
    };
    zIndex: NumberConstructor;
    themeVars: ThemeVars;
    themeVarsDark: ThemeVars;
    themeVarsLight: ThemeVars;
    iconPrefix: StringConstructor;
};
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    theme: {
        type: PropType<ConfigProviderTheme>;
        default: ConfigProviderTheme;
    };
    zIndex: NumberConstructor;
    themeVars: ThemeVars;
    themeVarsDark: ThemeVars;
    themeVarsLight: ThemeVars;
    iconPrefix: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: keyof HTMLElementTagNameMap;
    };
    theme: {
        type: PropType<ConfigProviderTheme>;
        default: ConfigProviderTheme;
    };
    zIndex: NumberConstructor;
    themeVars: ThemeVars;
    themeVarsDark: ThemeVars;
    themeVarsLight: ThemeVars;
    iconPrefix: StringConstructor;
}>>, {
    tag: keyof HTMLElementTagNameMap;
    theme: ConfigProviderTheme;
}>;
export default _default;
