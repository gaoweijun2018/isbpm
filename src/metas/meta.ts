/**
 * 元数据
 */
export interface MetaData {
    [name: string]: [number, string];
}

export interface ValueEnumItem {
    text: string;
    status?: 'success' | 'error' | 'processing' | 'warning' | 'default';
}

export interface ValueEnum {
    [key: string]: ValueEnumItem;
}

/**
 * 常量
 */
export interface Meta {
    metaData: MetaData;
    list: Array<[number | number[], string]>;
    codeMapping: Map<number | number[], string>;
    valueEnum: ValueEnum;
}

/**
 * 常量合集
 */
export interface Metas {
    [key: string]: Meta;
}
