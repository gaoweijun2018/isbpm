/**
 * 将对象转化为formData
 * @param object
 */
export function convertObjectToFormData(object: { [key: string]: any}): FormData {
    const formData = new FormData();
    for (const key of Object.keys(object)) {
        if (object[key] || object[key] === 0) {
            formData.append(key, object[key]);
        }
    }
    return formData;
}

/**
 * 获取属性值
 */
export function getValueByProp(data: any, prop: string) {
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
    return temp;
}
