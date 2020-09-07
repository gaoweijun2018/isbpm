import {Vue, Component, Prop} from 'vue-property-decorator';
import Order, {OrderInfo} from "@/entities/isp/order";

/**
 * 订单列表
 */
@Component({name: 'OrderList'})
export default class extends Vue {
    /**
     * 订单详情
     */
    @Prop({ required: true}) private info!: Order;
    public created() {
        console.log('hello');
    }
}
