import ClientFactory, { ProduceParams } from '@/commons/utils/client.factory';
import { Notify } from 'vant';
import {UserModule} from '@/store/modules/user';

/**
 * 登录client的
 * @param error
 */
const passportErrorHandler = (error: any) => {
    let errorMsg: string = '未知错误';
    if (error.message === 'Network Error' || (error.message && error.message.includes('timeout'))) {
        errorMsg = '服务器请求超时，请检查网络连接';
    }
    if (!error.response) {
        Notify({ type: 'danger', message: errorMsg});
        return Promise.reject(errorMsg);
    }
    if (error.response.status === 401) {
        errorMsg = '授权已过期, 请重新登录';
        UserModule.LogOut();
    }
    const { data } = error.response;
    if (data.error_description === 'Bad credentials') {
        errorMsg = '账号或密码不正确';
    }
    Notify({ type: 'danger', message: errorMsg});
    return Promise.reject(errorMsg);
};

/**
 * 登录client创建参数
 */
const passwordProduceParams: ProduceParams = {
    config: {
        baseURL: process.env.VUE_APP_PASSPORT_BASE_URL,
        timeout: 5000,
    },
    responseInterceptor: {
        onFulfilled: (value) => value.data,
        onRejected: passportErrorHandler,
    },
};

const passportClient = ClientFactory.produce(passwordProduceParams);
export default passportClient;
