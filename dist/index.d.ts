import type { PluginOptions } from './types';
import type { PluginCreator, Config } from 'tailwindcss/types/config';
declare const _default: {
    (options: PluginOptions): {
        handler: PluginCreator;
        config?: Partial<Config> | undefined;
    };
    __isOptionsFunction: true;
};
export default _default;
