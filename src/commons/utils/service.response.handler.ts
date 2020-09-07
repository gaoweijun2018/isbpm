import { AxiosResponse } from 'axios';
import { HTTP_STATUS } from '@/metas/common';
import { Notify } from 'vant';
import { UserModule } from '@/store/modules/user';
import {PersonModule} from '@/store/modules/person';

interface AxiosError {
    status: number;
    message: string;
    errors?: ErrorElement[];
}

interface ErrorElement {
    message: string;
    params: any;
}

function getErrorElementMsg(error: ErrorElement) {
    // eslint-disable-next-line no-template-curly-in-string
    if (!error.message.includes('${names}')) {
        return;
    }
    // eslint-disable-next-line no-template-curly-in-string
    error.message.replace('${names}', error.params.names);
    return error.message;
}

/**
 * 从后端返回信息从提取错误信息
 * @param err
 */
export const getErrorMsgFromResponse = (err: AxiosError): string => {
    let msg = '请求异常';
    if (err.errors && err.errors.length) {
        msg = err.errors.reduce((pre, current) => {
            pre += getErrorElementMsg(current);
            return pre;
        }, '');
        return msg;
    } else {
        return err.message;
    }
};

interface NetError {
    code: string;
    i18n: string;
    message: string;
    params?: { ['message']: string};
}

function getErrorMsg(error: NetError) {
    const errorMsg = (error.params && error.params.message) || error.message;
    return errorMsg;
}

/**
 * 对请求返回的数据进行处理
 */
export const handlerErrorMsg = (response: AxiosResponse) => {
    let msg = '';

    let errors: any[];

    switch (response.status) {
    case HTTP_STATUS.BAD_REQUEST[0]:
        errors = response.data.errors;
        if (errors != null && errors.length > 0) {
            errors.forEach((error) => {
                const errMsg = getErrorMsg(error);
                msg += errMsg + '、';
            });
        } else {
            msg = response.data.message;
        }
        Notify({message: msg, type: 'danger'});
        return;
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
        msg = HTTP_STATUS.SERVER_ERROR[1];
    }
    Notify({ type: 'danger', message: msg});
};
