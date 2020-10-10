import * as types from './types';
export * from './types';
export interface ParseOptions {
    hiddenPaths?: string[];
    matchesNode?: boolean;
    maxPathLength?: number;
    maxSourceLines?: number;
    useColor?: boolean;
    verbose?: boolean;
}
declare function parseSync(src: string, options?: ParseOptions): types.UML[];
export { parseSync as parse };
export declare function parseFile(globPattern: (string | string[]), options?: ParseOptions, cb?: (error: Error, result: types.File) => void): types.File;
declare type Formatter = (parseResult: (types.File | types.UML[])) => any;
declare type Formatters = {
    default: Formatter;
    graph: Formatter;
};
export declare const formatters: Formatters;
