import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

/**
 * 请求的拦截器
 */
export type RequestInterceptor = (value: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>;

/**
 * 成功返回的拦截器
 */
export type FullFilledHandler = (value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;

/**
 * 失败返回的拦截器
 */
export type ErrorHandler = (error: any) => any;

/**
 * 创建client的参数
 */
export interface ProduceParams {
    config: AxiosRequestConfig;
    requestInterceptor?: RequestInterceptor;
    responseInterceptor: {
        onFulfilled?: FullFilledHandler,
        onRejected?: ErrorHandler,
    };
}

/**
 * 服务端工厂
 */
export default class ClientFactory {
    /**
     * 创建client
     * @param produceParams
     */
    public static produce(produceParams: ProduceParams): AxiosInstance {
        const axiosInstance = axios.create(produceParams.config);
        const {requestInterceptor, responseInterceptor} = produceParams;
        /**
         * 发送请求的拦截器，在这里可以做请求头携带token等操作
         */
        if (requestInterceptor) {
            axiosInstance.interceptors.request.use(requestInterceptor, (error) => Promise.reject(error));
        }
        /**
         * 返回数据的拦截器和错误处理
         */
        axiosInstance.interceptors.response.use(responseInterceptor.onFulfilled, responseInterceptor.onRejected);
        return axiosInstance;
    }
}
