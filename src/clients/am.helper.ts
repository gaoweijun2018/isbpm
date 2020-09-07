import ClientFactory, {ProduceParams, RequestInterceptor} from '@/commons/utils/client.factory';
import { responseHandler, errorHandler, requestInterceptor } from '@/commons/utils/request.interceptor';
import {PersonModule} from '@/store/modules/person';

/**
 * 请求携带token
 */
export const helperRequestInterceptor: RequestInterceptor = (config) => {
    const {personToken} = PersonModule;
    return {...config, headers: {...config.headers, Authorization: `${personToken}`}};
};

/**
 * 登录client创建参数
 */
const amHelperParams: ProduceParams = {
    config: {
        baseURL: process.env.VUE_APP_AM_BASE_HELPER_URL,
        timeout: 5000,
    },
    requestInterceptor: helperRequestInterceptor,
    responseInterceptor: {
        onFulfilled: responseHandler,
        onRejected: errorHandler,
    },
};

const amHelperClient = ClientFactory.produce(amHelperParams);
export default amHelperClient;
