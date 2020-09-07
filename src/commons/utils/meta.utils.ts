
import { Meta } from '@/metas/meta';

/**
 * 初始化常量
 * @param constant
 */
export const initConstant = (constant: Meta): void => {
    Object.keys(constant.metaData).forEach((key) => {
        constant.list.push(constant.metaData[key]);
    });
    // eslint-disable-next-line no-param-reassign
    constant.codeMapping = new Map(constant.list);
    constant.list.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        // @ts-ignore
        constant.valueEnum[item[0]] = { text: item[1] };
    });
};
