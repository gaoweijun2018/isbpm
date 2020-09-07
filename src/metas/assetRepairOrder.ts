import { Meta } from '@/metas/meta';
import { initConstant } from '@/commons/utils/meta.utils';

/**
 * 资产维修单 状态
 */
const ASSET_REPAIR_ORDER_STATE: Meta = {
    metaData: {
        // 资产维修单中的状态
        REPAIR_ORDER_REPAIRING: [109, '维修中'],
        // 资产维修单中的状态
        REPAIR_ORDER_PART_COMPLETED: [110, '部分已完成'],
        // 资产维修单中的状态
        REPAIR_ORDER_COMPLETED: [111, '已完成'],
    },
    list: [],
    codeMapping: new Map(),
    valueEnum: {},
};

/**
 * 资产维修单 状态
 */
const ASSET_REPAIR_ITEM_STATE: Meta = {
    metaData: {
        // 资产维修单的item的状态
        REPAIR_ITEM_REPAIRING: [107, '维修中'],
        // 资产维修单的item的状态
        REPAIR_ITEM_COMPETED: [108, '已完成'],
    },
    list: [],
    codeMapping: new Map(),
    valueEnum: {},
};

initConstant(ASSET_REPAIR_ORDER_STATE);
initConstant(ASSET_REPAIR_ITEM_STATE);

export { ASSET_REPAIR_ORDER_STATE, ASSET_REPAIR_ITEM_STATE };

