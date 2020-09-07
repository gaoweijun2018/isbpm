import { Meta } from '@/metas/meta';
import { initConstant } from '@/commons/utils/meta.utils';

/**
 * 资产盘点单
 */
const ASSET_INVENTORY_TASK_STATE: Meta = {
    metaData: {
        ASSET_INVENTORYING: [1, '盘点中'],
        ASSET_INVENTORYING_NORMAL: [120, '正常'],
        ASSET_INVENTORYING_INFO_WRONG: [121, '信息不符'],
        ASSET_INVENTORYING_BROKEN: [122, '损坏'],
        ASSET_INVENTORYING_LOST: [123, '遗失'],
        ASSET_INVENTORYING_OTHER: [124, '其他'],
    },
    list: [],
    codeMapping: new Map(),
    valueEnum: {},
};

/**
 * 资产盘点任务状状态
 */
const ASSET_INVENTORY_TASK_FILTER_STATE: Meta = {
    metaData: {
        ASSET_INVENTORYING: [1, '未盘点'],
        ASSET_INVENTORYING_NORMAL: [120, '已盘点'],
        ASSET_INVENTORYING_INFO_WRONG: [121, '已盘点'],
        ASSET_INVENTORYING_BROKEN: [122, '已盘点'],
        ASSET_INVENTORYING_LOST: [123, '已盘点'],
        ASSET_INVENTORYING_OTHER: [124, '已盘点'],
    },
    list: [],
    codeMapping: new Map(),
    valueEnum: {},
};

/**
 * 资产盘点单
 */
const ASSET_INVENTORY_ORDER_STATE: Meta = {
    metaData: {
        ASSET_INVENTORY_NOT_START: [118, '未开始'],
        INVENTORY_ORDER_NOT_COMPLETED: [117, '盘点中'],
        INVENTORY_ORDER_COMPLETED: [116, '已完成'],
    },
    list: [],
    codeMapping: new Map(),
    valueEnum: {},
};

initConstant(ASSET_INVENTORY_TASK_STATE);
initConstant(ASSET_INVENTORY_ORDER_STATE);
initConstant(ASSET_INVENTORY_TASK_FILTER_STATE);

ASSET_INVENTORY_ORDER_STATE.valueEnum = {
    118: {
        text: '未开始',
        status: 'default',
    },
    117: {
        text: '盘点中',
        status: 'warning',
    },
    116: {
        text: '已完成',
        status: 'success',
    },
};

ASSET_INVENTORY_TASK_FILTER_STATE.list = [
    [[1], '未盘点'],
    [[120, 121, 122, 123, 124], '已盘点'],
];

ASSET_INVENTORY_TASK_FILTER_STATE.valueEnum = {
    1: {
        text: '未盘',
        status: 'error',
    },
    120: {
        text: '已盘',
        status: 'success',
    },
    121: {
        text: '已盘',
        status: 'success',
    },
    122: {
        text: '已盘',
        status: 'success',
    },
    123: {
        text: '已盘',
        status: 'success',
    },
    124: {
        text: '已盘',
        status: 'success',
    },
};

export { ASSET_INVENTORY_TASK_STATE, ASSET_INVENTORY_ORDER_STATE, ASSET_INVENTORY_TASK_FILTER_STATE };

