import ClientFactory, { ProduceParams } from '@/commons/utils/client.factory';
import {responseHandler, handlerErrorMsg} from '@/commons/utils/request.interceptor';

/**
 * 登录client创建参数
 */
const ispParams: ProduceParams = {
    config: {
        baseURL: process.env.VUE_APP_BASE_URL,
        timeout: 5000,
    },
    responseInterceptor: {
        onFulfilled: responseHandler,
        onRejected: handlerErrorMsg,
    },
};

const ispClient = ClientFactory.produce(ispParams);
export default ispClient;
