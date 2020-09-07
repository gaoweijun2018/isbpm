/**
 * 函数节流
 * @param fn 节流函数
 * @param threshold 函数节流间隔
 */
// tslint:disable-next-line:ban-types
export const throttle = (fn: Function, threshold?: number): Function => {
    let start: number = 0;
    threshold = threshold || 1000;
    return function() {
        // @ts-ignore
        const context: any = this;
        const current: number = new Date().getTime();

        if (!start || current - start >= (threshold as number)) {
            fn.apply(context, arguments);
            start = current;
        }
    };
};
