import { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import type { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};

declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;

declare const _default_2: DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<InputProps>, {
    modelValue: string;
    disabled: boolean;
}>, {
    focus: typeof focus_2;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<InputProps>, {
    modelValue: string;
    disabled: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {
    modelValue: string;
    disabled: boolean;
}, {}>;

declare function focus_2(): void;

/**
 * 定义emit类型
 */
export declare type InputEmits = {
    'update:modelValue': [value: string];
};

/**
 * 定义instance类型
 */
export declare type InputInstance = InstanceType<typeof _default_2>;

/**
 * 定义props类型
 */
export declare interface InputProps {
    modelValue: string;
    disabled?: boolean;
}

/**
 * 定义props类型
 */
export declare interface ScrollDataProps {
    data: Array<any>;
    header: Array<{
        name: string;
        prop: string;
        width?: number;
    }>;
    rowHeight?: number;
    tableHeight?: number;
}

declare type SFCWithInstall<T> = T & Plugin_2;

export declare const YiInput: SFCWithInstall<DefineComponent<{
    modelValue: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    focus: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<{
    modelValue: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {
    modelValue: string;
    disabled: boolean;
}, {}>> & Record<string, any>;

export declare const YiScrollData: SFCWithInstall<DefineComponent<{
    data: {
        type: PropType<any[]>;
        required: true;
    };
    header: {
        type: PropType<{
            name: string;
            prop: string;
            width?: number | undefined;
        }[]>;
        required: true;
    };
    rowHeight: {
        type: PropType<number>;
        default: number;
    };
    tableHeight: {
        type: PropType<number>;
        default: number;
    };
}, {
    focus: typeof focus;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
    data: {
        type: PropType<any[]>;
        required: true;
    };
    header: {
        type: PropType<{
            name: string;
            prop: string;
            width?: number | undefined;
        }[]>;
        required: true;
    };
    rowHeight: {
        type: PropType<number>;
        default: number;
    };
    tableHeight: {
        type: PropType<number>;
        default: number;
    };
}>>, {
    rowHeight: number;
    tableHeight: number;
}, {}>> & Record<string, any>;

export { }
