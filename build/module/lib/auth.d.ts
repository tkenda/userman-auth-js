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
export interface Item {
    name: string;
    values?: Value[];
    items?: Item[];
}
export declare const StringToItems: (src: string | null) => Item[] | null;
export declare const ItemsToString: (src: Item[] | null) => string;
