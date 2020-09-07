import {Component} from 'vue-property-decorator';
import VOrder from './components/order/order.vue';
import Order from '@/entities/isp/order';
import orderService, {OrderService} from '@/services/isp/order';
import {mixins} from 'vue-class-component';
import ListMixin from '@/views/orders/mixin/list.mixin';

/**
 * 订单列表
 */
@Component({name: 'OrderList', components: {Order: VOrder}})
export default class extends mixins<ListMixin<Order, OrderService>>(ListMixin) {
    public created() {
        this.service = orderService;
    }
}
