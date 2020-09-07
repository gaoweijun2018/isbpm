import { Meta } from '@/metas/meta';
import { initConstant } from '@/commons/utils/meta.utils';

/**
 * 资产来源
 */
const ASSET_SOURCE: Meta = {
    metaData: {
        SELF_BUY: [1000000, '自购'],
        RENT: [2000000, '租赁'],
        BORROW: [3000000, '借用'],
        GIVE: [4000000, '赠送'],
        SELF_PRODUCE: [5000000, '自产'],
        OTHER: [6000000, '其他'],
    },
    list: [],
    codeMapping: new Map(),
    valueEnum: {},
};

initConstant(ASSET_SOURCE);


/**
 * 资产状态
 */
const ASSET_STATE: Meta = {
    metaData: {
        UN_ACHIEVED: [-1, '未归档'],
        ARCHIVE: [0, '已归档'],
        ACTIVE: [1, '启用中'],
        ASSET_PUT_WAREHOUSE: [112, '在库'],
        ASSET_USING: [113, '在用'],
        ASSET_REPAIRING: [114, '维修中'],
        ASSET_CLEAN: [115, '已报废'],
    },
    list: [],
    codeMapping: new Map(),
    valueEnum: {},
};

initConstant(ASSET_STATE);
ASSET_STATE.valueEnum = {
    112: { text: '在库' },
    113: { text: '在用' },
    114: { text: '维修中' },
    115: { text: '已报废' },
};

/**
 * 资产盘点结果
 */
const ASSET_INVENTORY_TASK: Meta = {
    metaData: {
        INVENTORY_ORDER_COMPLETED: [116, '盘点完成'],
        ASSET_INVENTORYING_NORMAL: [117, '正常'],
        ASSET_INVENTORYING_INFO_WRONG: [118, '信息不符'],
        ASSET_INVENTORYING_BROKEN: [119, '损坏'],
        ASSET_INVENTORYING_LOST: [120, '遗失'],
        ASSET_INVENTORYING_OTHER: [121, '其他'],
        ASSET_CLEAN: [115, '已报废'],
    },
    list: [],
    codeMapping: new Map(),
    valueEnum: {},
};

initConstant(ASSET_INVENTORY_TASK);

/**
 * 个人资产状态
 */
const PERSON_ASSET_STATE: Meta = {
  metaData: {
    ASSET_USING: [113, '在用'],
    ASSET_REPAIRING: [114, '维修'],
    ASSET_CLEAN: [115, '报废'],
  },
  list: [],
  codeMapping: new Map(),
  valueEnum: {},
};

initConstant(PERSON_ASSET_STATE);

export { ASSET_SOURCE, ASSET_STATE, ASSET_INVENTORY_TASK, PERSON_ASSET_STATE };

