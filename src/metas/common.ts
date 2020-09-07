import { MetaData } from './meta';

export const HTTP_STATUS: MetaData = {
    SUCCESS: [0, '成功'],
    PARAMETER_ERROR: [112, '参数错误'],
    BAD_REQUEST: [400, 'Bad Request'],
    UNAUTHORIZED: [401, 'Unauthorized'],
    FORBIDDEN: [403, 'Forbidden'],
    NOT_FOUND: [404, 'Not Found'],
    SERVER_ERROR: [500, 'Internal Server Error'],
};

export const DATE_FORMAT = 'YYYY-MM-DDT00:00:00';
