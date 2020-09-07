import {Meta} from '@/metas/meta';

export const USER_STATES: Omit<Meta, 'codeMapping'> = {
    metaData: {
        ACHIEVED: [0, '已归档'],
        ACTIVE: [1, '已激活'],
        UN_ACTIVE: [2, '未激活'],
    },
    list: [],
    valueEnum: {},
};
