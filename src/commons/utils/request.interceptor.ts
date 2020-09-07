import {Notify} from 'vant';
import {HTTP_STATUS} from '@/metas/common';
import {AxiosResponse} from 'axios';
import {ErrorHandler, FullFilledHandler, RequestInterceptor} from './client.factory';
import {UserModule} from '@/store/modules/user';
import {PersonModule} from '@/store/modules/person';

/**
 * 返回数据统一处理
 */
export const responseHandler: FullFilledHandler = (response) => {
    const {data: res} = response;
    if (typeof res === 'object') {
        res.code = Number(res.code);
        switch (res.code) {
            case HTTP_STATUS.SUCCESS[0]:
                if (res.errors && res.errors.length) {
                    let errorMsgHtml = '';
                    // @ts-ignore
                    res.errors.forEach((error) => {
                        errorMsgHtml += `${error.message}`;
                    });
                    Notify({type: 'success', message: errorMsgHtml});
                }
                return res.data;
            case HTTP_STATUS.PARAMETER_ERROR[0]:
                return Promise.reject(res.message || 'error');
            default:
                return res.data;
        }
    }
    return res.data;
};

/**
 * 请求携带token
 */
export const requestInterceptor: RequestInterceptor = (config) => {
    const {userToken} = UserModule;
    return {...config, headers: {...config.headers, Authorization: `Bearer ${userToken}`}};
};

interface NetError {
    code: string;
    i18n: string;
    message: string;
    params?: { ['message']: string };
}

function getErrorMsg(error: NetError) {
    const errorMsg = (error.params && error.params.message) || error.message;
    return errorMsg;
}

/**
 * 对请求返回的数据进行处理
 */
export const handlerErrorMsg = (response: AxiosResponse): any => {
    let msg = '';

    let errors: any[] = [];

    switch (response.status) {
        case HTTP_STATUS.BAD_REQUEST[0]:
            // eslint-disable-next-line prefer-destructuring
            errors = response.data.errors;
            if (errors != null && errors.length > 0) {
                errors.forEach((error) => {
                    const errMsg = getErrorMsg(error);
                    msg += `${errMsg}<br />`;
                });
            } else {
                msg = response.data.message;
            }
            break;
        case HTTP_STATUS.FORBIDDEN[0]:
        case HTTP_STATUS.UNAUTHORIZED[0]:
            msg = '授权已过期';
            if (UserModule.userToken) {
                UserModule.LogOut();
            } else if (PersonModule.personToken) {
                PersonModule.LogOut();
            }
            break;
        case HTTP_STATUS.SERVER_ERROR[0]:
        default:
            // eslint-disable-next-line prefer-destructuring
            msg = HTTP_STATUS.SERVER_ERROR[1];
    }
    Notify({type: 'danger', message: msg});
    return msg;
};


/**
 * 错误统一处理
 */
export const errorHandler: ErrorHandler = (error: any) => {
    // error没有message
    if (!error.message) {
        Notify({type: 'danger', message: '未知错误'});
        return Promise.reject(error);
    }
    // 请求超时错误
    if (error.message.includes('timeout of 5000ms exceeded')) {
        Notify({type: 'danger', message: '请求超时'});
        return Promise.reject(error);
    }
    // 网络错误
    if (!error.response) {
        Notify({type: 'danger', message: '未知错误'});
        return Promise.reject(error);
    }
    if (error.response.message === 'Network Error') {
        Notify({type: 'danger', message: '网络错误'});
        return Promise.reject(error);
    }
    if (error.response.status) {
        const errorMsg = handlerErrorMsg(error.response);
        return Promise.reject(errorMsg);
    }
    return Promise.reject(new Error('未知错误'));
};
