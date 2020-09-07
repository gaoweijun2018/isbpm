import Vue from 'vue';
import {ValueEnum} from '@/metas/meta';

/**
 * 获取属性值
 */
export function getValueByProp(data: any, prop: string, valueEnum?: ValueEnum) {
    const defaultText = '--';
    let temp = data;
    const propArr = prop.split('.');
    let i = 0;
    while (i < propArr.length) {
        if (!temp) {
            return defaultText;
        }
        temp = temp[propArr[i]];
        i++;
    }
    if (temp !== defaultText && valueEnum) {
        return valueEnum[temp].text;
    }
    return temp;
}
Vue.filter('getValueByProp', getValueByProp);
