import type { PluginOptions } from './types';
declare const MaterialWind: {
    (options: PluginOptions): {
        handler: import("tailwindcss/types/config").PluginCreator;
        config?: Partial<import("tailwindcss/types/config").Config> | undefined;
    };
    __isOptionsFunction: true;
};
export default MaterialWind;
