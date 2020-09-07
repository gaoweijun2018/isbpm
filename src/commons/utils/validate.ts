/**
 * 验证手机号
 */
export const validatePhone = (phone: string): boolean => {
    return /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4[579]\d{2})\d{6}$/.test(phone);
};

/**
 * 验证验证码
 */
export const validateCode = (code: string): boolean => {
    return /^\d{6}$/.test(code);
};

/**
 * 验证身份证
 */
export const validateIdCard = (id: string): boolean => {
    const pattern = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    return pattern.test(id);
};
