import BaseService from '@/services/base.service';
import {Pager} from '@/entities/paging';
import Order, {OrderInfo} from '@/entities/isp/order';
import ispClient from '@/clients/isp';

/**
 * 订单服务
 */
export class OrderService extends BaseService<Order, any, OrderInfo, Pager> {

}

const orderService = new OrderService('/order', ispClient);
export default orderService;
