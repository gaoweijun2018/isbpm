import Cookies from 'js-cookie';

// User
const tokenKey = 'asset_management_mobile_access_token';
export const getToken = () => Cookies.get(tokenKey);
export const setToken = (token: string) => Cookies.set(tokenKey, token);
export const removeToken = () => Cookies.remove(tokenKey);

// Person
const personKey = 'asset_management_mobile_access_person_token';
export const getPersonToken = () => Cookies.get(personKey);
export const setPersonToken = (token: string) => Cookies.set(personKey, token);
export const removePersonToken = () => Cookies.remove(personKey);

// User 类型 （用户 / 员工）
const userType = 'asset_management_mobile_access_type';
export const getUserType = () => Cookies.get(userType);
export const setUserType = (type: string) => Cookies.set(userType, type);
export const removeUserType = () => Cookies.remove(userType);
