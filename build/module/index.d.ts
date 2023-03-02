export interface DataOptions {
    minValue: any;
    maxValue: any;
}
export interface Value {
    name: string;
    string?: string;
    float?: number;
    number?: number;
    boolean?: boolean;
    options?: DataOptions;
}
export declare type Items = Item[];
export interface Item {
    name: string;
    values?: Value[];
    items?: Items;
}
export declare const StringToItems: (src: string | null) => Items | null;
export declare const ItemsToString: (src: Items | null) => string;
export declare const Value: (items: Items | null, path: string) => string | number | boolean | null;
export declare const String: (items: Items | null, path: string) => string | null;
export declare const Float: (items: Items | null, path: string) => number | null;
export declare const Number: (items: Items | null, path: string) => number | null;
export declare const Boolean: (items: Items | null, path: string) => boolean;
