import ClientFactory, { ProduceParams } from '@/commons/utils/client.factory';
import { responseHandler, errorHandler, requestInterceptor } from '@/commons/utils/request.interceptor';

/**
 * 登录client创建参数
 */
const amParams: ProduceParams = {
    config: {
        baseURL: process.env.VUE_APP_AM_BASE_URL,
        timeout: 5000,
    },
    requestInterceptor,
    responseInterceptor: {
        onFulfilled: responseHandler,
        onRejected: errorHandler,
    },
};

const amClient = ClientFactory.produce(amParams);
export default amClient;
