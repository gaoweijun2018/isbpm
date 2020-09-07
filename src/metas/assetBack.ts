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

export { ASSET_SOURCE };

